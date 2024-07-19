import { graphql, useStaticQuery } from "gatsby";

export const useCourseQuery = () => {
  const { allF2024Csv } = useStaticQuery(
    graphql`
      query allCourses {
        allF2024Csv {
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
  return allF2024Csv;
};
