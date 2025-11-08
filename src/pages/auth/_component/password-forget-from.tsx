import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_ROUTES} from "@/routes/common/routePath";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import {  useSendOTPMutation } from "@/features/auth/authAPI";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

type FormValues = z.infer<typeof schema>;

const PasswordForgetForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) => {
  const navigate = useNavigate();
  const [sendOTP, { isLoading }] = useSendOTPMutation();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: FormValues) => {
    sendOTP(values.email)
      .unwrap()
      .then(() => {
        localStorage.setItem("user-email", values.email);
        toast.success("OTP sent to your email");
        setTimeout(() => {
          navigate(AUTH_ROUTES.OTP_VERIFY);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.data?.message || "Failed to send OTP");
      });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-6", className)}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Password Forget</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Enter your email below to reset your password
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="!font-normal">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="subscribe2techwithemma@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={isLoading} type="submit" className="w-full">
            {isLoading && <Loader className="h-4 w-4 animate-spin" />}
            Reset Password
          </Button>
        </div>
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link
            to={AUTH_ROUTES.SIGN_UP}
            className="underline underline-offset-4"
          >
            Sign up
          </Link>
          {" | "}
           <Link
            to={AUTH_ROUTES.ADMIN_SIGN_IN}
            className="underline underline-offset-4"
          >
            Admin Sign up
          </Link>
          
        </div>
      </form>
    </Form>
  );
};

export default PasswordForgetForm;
