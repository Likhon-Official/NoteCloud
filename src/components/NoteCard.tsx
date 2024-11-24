import * as React from "react";
import { formatDistanceToNow } from "date-fns";
import { Note } from "../types/Note";

interface NoteCardProps {
  note: Note;
  onPress: (note: Note) => void;
}

export function NoteCard({ note, onPress }: NoteCardProps) {
  return (
    <gridLayout
      className="bg-white rounded-lg p-4 mb-4 elevation-2"
      rows="auto, auto, auto"
      onTap={() => onPress(note)}
    >
      <label
        row="0"
        className="text-lg font-bold text-gray-900 mb-2"
        text={note.title}
      />
      <label
        row="1"
        className="text-gray-600 mb-2"
        text={note.content.split('\n').slice(0, 2).join('\n')}
        textWrap={true}
      />
      <gridLayout row="2" columns="auto, *">
        <stackLayout col="0" orientation="horizontal" className="mr-2">
          {note.tags.map((tag, index) => (
            <label
              key={index}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2"
              text={`#${tag}`}
            />
          ))}
        </stackLayout>
        <label
          col="1"
          className="text-right text-xs text-gray-500"
          text={formatDistanceToNow(note.lastModified, { addSuffix: true })}
        />
      </gridLayout>
    </gridLayout>
  );
}