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
import {  useVerifyOTPMutation } from "@/features/auth/authAPI";

const schema = z.object({
  otp: z.string().min(6, "OTP must be at least 6 characters"),
  newPassword: z.string().min(6, "Password must be at least 6 characters"),
});

type FormValues = z.infer<typeof schema>;

const VerifyOtpForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) => {
  const navigate = useNavigate();
  const [verifyOTP, { isLoading }] = useVerifyOTPMutation();
  const email = localStorage.getItem("user-email") || "";

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: FormValues) => {
    verifyOTP({ email, otp: values.otp, newPassword: values.newPassword })
      .unwrap()
      .then(() => {
        toast.success("Password reset successful");
        setTimeout(() => {
          navigate(AUTH_ROUTES.SIGN_IN);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.data?.message || "Failed to reset password");
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
          <h1 className="text-2xl font-bold">Verify your account</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Enter your OTP below to Verify your account
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="!font-normal">OTP</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter OTP" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
           <div className="grid gap-2">
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="!font-normal">New Password</FormLabel>
                  <FormControl>
                    <Input placeholder="*******" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={isLoading} type="submit" className="w-full">
            {isLoading && <Loader className="h-4 w-4 animate-spin" />}
            ReSet Password
          </Button>
        </div>
        <div className="text-start text-sm">
          <Link
            to={AUTH_ROUTES.FORGOT_PASSWORD}
            className="underline underline-offset-4"
          >
            Password Forget
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default VerifyOtpForm;
