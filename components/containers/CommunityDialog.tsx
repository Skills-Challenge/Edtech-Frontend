"use client";

import { Button } from "@/components/ui/Button";
import send from "@/public/send.svg";
import { setModalOpen } from "@/store/reducers/ModalReducer";
import { AppState, useAppDispatch, useAppSelector } from "@/store/store";
import Image from "next/image";
import ComponentHeader from "../common/ComponentHeader";
import DialogContainer from "../common/DialogContainer";

const CommunityDialog = () => {
  const dispatch = useAppDispatch();
  const { isModalOpen } = useAppSelector((state: AppState) => state.modal);
  return (
    <DialogContainer
      dialogOpen={isModalOpen}
      setDialogOpen={() => dispatch(setModalOpen(false))}
    >
      <div className="bg-white py-[60px] px-[40px]">
        <div className="flex flex-col items-center">
          <div className="rounded-full mb-12 w-[134px] h-[134px] bg-highlight flex items-center justify-center">
            <Image src={send} alt="send" />
          </div>
          <div className="mb-8 max-w-[365px]">
            <ComponentHeader
              heading="Join our WhatsApp community"
              subHeading="Get notified on the latest projects and hackathons"
              center
            />
          </div>
          <div className="">
            <Button className="h-[55px] rounded-xl text-white text-xl font-semibold px-11 py-3">
              Join
            </Button>
          </div>
        </div>
      </div>
    </DialogContainer>
  );
};

export default CommunityDialog;
