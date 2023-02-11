import { useEffect } from "react";
import { useQueryClient } from "react-query";
import { AthleteDTO } from "../../../types/athlete";

export function MainPage() {
  const queryClient = useQueryClient();
  const data: AthleteDTO | undefined = queryClient.getQueryData("athleteData");

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div>{`Hello ${data?.athlete.firstname}`}</div>
    </>
  );
}
