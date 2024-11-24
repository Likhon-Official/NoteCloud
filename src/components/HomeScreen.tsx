import * as React from "react";
import { StackNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { Note } from "../types/Note";

interface HomeScreenProps {
  navigation: StackNavigationProp<MainStackParamList, "home">;
}

const mockNotes: Note[] = [
  {
    id: "1",
    title: "Welcome to NoteCloud",
    content: "This is your first note. Tap the + button to create more notes and start organizing your thoughts.",
    lastModified: new Date(),
    tags: ["welcome", "getting-started"]
  },
  {
    id: "2",
    title: "Meeting Notes",
    content: "1. Discuss project timeline\n2. Review budget\n3. Assign tasks to team members",
    lastModified: new Date(Date.now() - 86400000),
    tags: ["work", "meetings"]
  }
];

export function HomeScreen({ navigation }: HomeScreenProps) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredNotes = mockNotes.filter(note => {
    const query = searchQuery.toLowerCase();
    return (
      note.title.toLowerCase().includes(query) ||
      note.content.toLowerCase().includes(query) ||
      note.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  return (
    <gridLayout rows="auto, *" className="bg-gray-50">
      <gridLayout row="0" className="bg-white p-4 elevation-4">
        <textField
          hint="Search notes..."
          text={searchQuery}
          className="bg-gray-100 rounded-full p-4"
          onTextChange={(args) => setSearchQuery(args.value)}
        />
      </gridLayout>

      <scrollView row="1" className="p-4">
        <stackLayout>
          {filteredNotes.map((note) => (
            <gridLayout
              key={note.id}
              className="bg-white rounded-lg p-4 mb-4 elevation-2"
              rows="auto, auto, auto"
              onTap={() => navigation.navigate('noteDetail', { noteId: note.id })}
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
                  text={`${note.lastModified.toLocaleDateString()}`}
                />
              </gridLayout>
            </gridLayout>
          ))}
        </stackLayout>
      </scrollView>

      <button
        className="bg-blue-600 text-white text-2xl w-16 h-16 rounded-full elevation-8"
        text="+"
        onTap={() => navigation.navigate('newNote')}
        horizontalAlignment="right"
        verticalAlignment="bottom"
        margin="0 16 16 0"
      />
    </gridLayout>
  );
}