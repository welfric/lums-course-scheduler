import { graphql, useStaticQuery } from "gatsby";

export const useCourseQuery = () => {
  const { allS2026UCsv } = useStaticQuery(
    graphql`
      query allCourses {
        allS2026UCsv {
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
  return allS2026UCsv;
};
