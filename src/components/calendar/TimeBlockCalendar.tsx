import { Calendar } from "react-big-calendar";
import localizer from "@/utils/dateFnsLocalizer";
import "./calendar.css";
import type { CalendarEvent } from "./timeblocking/types";
import type { View, SlotInfo } from "react-big-calendar";
import {
  Box,
  Dialog,
  Portal,
  Button,
  CloseButton,
  Field,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";

type TimeBlockCalendarProps = {
  events: CalendarEvent[];
  setEvents: React.Dispatch<React.SetStateAction<CalendarEvent[]>>;
  defaultView?: View;
  views?: View[];
};

export const TimeBlockCalendar = ({
  events,
  setEvents,
  defaultView = "day",
  views = ["day", "week"],
}: TimeBlockCalendarProps) => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventColor, setEventColor] = useState("#EAE2DD");
  const [showCustomPicker, setShowCustomPicker] = useState(false);
  const presetColors = ["#E7F1DC", "#F6F2D9", "#E0C1C9", "#D2DCE4"];
  const [currentView, setCurrentView] = useState<View>(defaultView);
  const [open, setOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<SlotInfo | null>(null);
  const handleSave = () => {
    if (!selectedSlot || !eventTitle.trim()) return;


    const newEvent: CalendarEvent = {
      id: events.length + 1,
      title: eventTitle,
      start: selectedSlot.start,
      end: selectedSlot.end,
      isFocusBlock: false,
      color: eventColor,
    };

    setEvents([...events, newEvent]);
    setEventTitle("");
    setSelectedSlot(null);
    setOpen(false); // close Dialog
  };

  return (
    <Box h="100%" w="100%" p={4}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        view={currentView}
        onView={(view) => setCurrentView(view)}
        views={views}
        selectable
        onSelectSlot={(slotInfo) => {
          setSelectedSlot(slotInfo);
          setOpen(true);
        }}
        style={{ height: 500 }}
      />

      <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Add Event</Dialog.Title>
              </Dialog.Header>

              <Dialog.Body>
                <Stack
                  gap="8"
                  maxW="sm"
                  css={{ "--field-label-width": "96px" }}
                >
                  {/* Event Name */}
                  <Field.Root orientation="horizontal">
                    <Field.Label>Event Name</Field.Label>
                    <Input
                      value={eventTitle}
                      onChange={(e) => setEventTitle(e.target.value)}
                      placeholder="Enter event name"
                      flex="1"
                    />
                  </Field.Root>

                  {/* Color Picker */}
                  <Field.Root orientation="horizontal">
                    <Field.Label>Color</Field.Label>
                    <Box flex="1">
                      <Stack direction="row" wrap="wrap" gap={2} mb={2}>
                        {presetColors.map((color) => (
                          <Box
                            key={color}
                            w="24px"
                            h="24px"
                            borderRadius="full"
                            bg={color}
                            border={
                              color === eventColor
                                ? "2px solid grey"
                                : "1px solid white"
                            }
                            cursor="pointer"
                            onClick={() => {
                              setEventColor(color);
                              setShowCustomPicker(false);
                            }}
                          />
                        ))}
                        <Button
                          size="xs"
                          onClick={() => setShowCustomPicker((prev) => !prev)}
                          variant="outline"
                        >
                          {showCustomPicker ? "Hide" : "Custom..."}
                        </Button>
                      </Stack>

                      {showCustomPicker && (
                        <HexColorPicker
                          color={eventColor}
                          onChange={setEventColor}
                        />
                      )}
                    </Box>
                  </Field.Root>
                </Stack>
              </Dialog.Body>

              <Dialog.Footer>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    console.log("🧠 Save clicked");
                    handleSave();
                  }}
                >
                  Save
                </Button>
              </Dialog.Footer>

              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Box>
  );
};
