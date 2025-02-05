import { createEditCabin } from "@services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();
  const { isPending: isEditingCabin, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin was edited successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditingCabin, editCabin };
}
