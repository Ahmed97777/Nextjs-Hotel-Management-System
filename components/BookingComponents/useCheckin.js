import { updateBooking } from "@/services/apiBookings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useChecking() {
  const queryClient = useQueryClient();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => {
      toast.error(
        "There was an error while checking in, please refresh the page and try again"
      );
    },
  });

  return { checkin, isCheckingIn };
}
