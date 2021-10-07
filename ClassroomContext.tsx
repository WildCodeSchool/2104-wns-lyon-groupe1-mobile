import React from "react";
export const ClassroomContext = React.createContext<any>({
  classroomId: null,
  setClassroomId: (classroomId: string) => {},
});
