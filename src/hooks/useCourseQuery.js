import { graphql, useStaticQuery } from "gatsby";

export const useCourseQuery = () => {
  const { allS2025Csv } = useStaticQuery(
    graphql`
      query allCourses {
        allS2025Csv {
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
  return allS2025Csv;
};
