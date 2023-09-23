import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { Spinner } from "./Spinner";

export function SubmitPostModal({ isOpen, setter, onSubmit, isLoading }: any) {
  return (
    <>
      <Dialog open={isOpen} handler={setter}>
        <DialogHeader className="justify-between">
          <Typography
            variant="h6"
            color="black"
            className="font-montserrat font-semibold"
          >
            Submit a Post
          </Typography>
          <IconButton
            color="indigo"
            size="sm"
            variant="text"
            onClick={() => setter(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody divider>
          <div className="grid gap-6">
            <Input
              label="Subject"
              className="font-montserrat font-medium"
              crossOrigin={undefined}
              color="indigo"
              maxLength={50}
            />
            <Textarea
              label="Message"
              color="indigo"
              className="font-montserrat font-medium"
              maxLength={150}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setter(false)}
            className="mr-1 font-montserrat text-base"
          >
            <span>Cancel</span>
          </Button>
          <Button
            className="bg-[#7163DE] font-montserrat text-base flex flex-row gap-1 items-center"
            onClick={onSubmit}
          >
            {isLoading ? (
              <>
                <Spinner />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
