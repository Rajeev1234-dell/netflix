import { getCastDirector, getSingle, getTrailer } from "@/Services/Service";
import { MovieData, castDirector } from "@/type/type";
import Detail from "@/Components/MovieDetail/Detail";

type movieProps = MovieData | null;
type directorProps = castDirector | null;

type Trailer = {
  key: string;
  name: string;
  site: string;
  type: string;
};

type TrailerResponse = Trailer[];

type ParamsProps = {
  params: {
    id: string;
  };
};

async function Page({ params }: ParamsProps) {
  
  let res1: movieProps = await getSingle(params.id);

  let res2: directorProps = await getCastDirector(params.id);

  let res = await getTrailer(params.id);

  let { results } = res;

  return <Detail movieData={res1} director={res2} trialer={results} />;
}

export default Page;
