import React, {  FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  dialogOpen: boolean;
  setDialogOpen: any;
  children: React.ReactNode;
};
const DialogContainer: FC<Props> = ({
  dialogOpen,
  setDialogOpen,
  children,
}) => {
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent
        aria-describedby=""
        className={"bg-white p-5 transition-all duration-200 rounded-xl max-w-[542px]"}
      >
        <DialogTitle className="hidden">title</DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogContainer;
