import { QueryClient, useMutation } from "@tanstack/react-query";
import { createEditCabin } from "@services/apiCabins";

import { toast } from "react-hot-toast";

export function useCreateCabin() {
  const { isPending: isCreatingCabin, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      QueryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreatingCabin, createCabin };
}
