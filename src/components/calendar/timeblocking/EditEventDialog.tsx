// components/calendar/dialogs/EditEventDialog.tsx

import {
  Dialog,
  Portal,
  Button,
  CloseButton,
  Field,
  Input,
  Stack,
} from "@chakra-ui/react";
import type { CalendarEvent } from "../timeblocking/types";

type EditEventDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedEvent: CalendarEvent | null;
  onChange: (updated: CalendarEvent) => void;
  onSave: () => void;
};

export const EditEventDialog = ({
  isOpen,
  onClose,
  selectedEvent,
  onChange,
  onSave,
}: EditEventDialogProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(e) => e.open === false && onClose()}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Edit Event</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body>
              <Stack gap="8" maxW="sm" css={{ "--field-label-width": "96px" }}>
                <Field.Root orientation="horizontal">
                  <Field.Label>Event Name</Field.Label>
                  <Input
                    value={selectedEvent?.title || ""}
                    onChange={(e) =>
                      selectedEvent &&
                      onChange({ ...selectedEvent, title: e.target.value })
                    }
                    placeholder="Update event title"
                    flex="1"
                  />
                </Field.Root>
              </Stack>
            </Dialog.Body>

            <Dialog.Footer>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={onSave}>Save Changes</Button>
            </Dialog.Footer>

            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
