"use client";

import { AlertDialog, Button } from "@heroui/react";
import { MdDeleteSweep } from "react-icons/md";

export function BookingDelete({ bookingId }) {
  const handelDelete = async () => {
    const res = await fetch(`http://localhost:8000/booking/${bookingId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();
    window.location.reload();
  };
  return (
    <AlertDialog>
      <Button
        variant="outline"
        className="text-red-400 items-center rounded-none"
      >
        <MdDeleteSweep /> Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Your Booking?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body></AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handelDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
