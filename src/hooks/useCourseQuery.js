import { graphql, useStaticQuery } from "gatsby";

export const useCourseQuery = () => {
  const { allS2026Csv } = useStaticQuery(
    graphql`
      query allCourses {
        allS2026Csv {
          nodes {
            id
            Course_Code
            Course_Title
            Instructor
            Cr_Hrs
            Day_and_Time
          }
        }
      }
    `
  );
  return allS2026Csv;
};
