import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import {IBike} from "./components/BikeList/BikeList";


// This middleware checks if the movie requested in /movies/:id exists.
// If not, it returns a redirect to /movies
export async function middleware (request: NextRequest) {
  const urlItems = request.nextUrl.pathname.split('/').filter((item) => item !== '');

  if (urlItems[0] === 'bikes' && urlItems.length === 2) {
    const bikeid = urlItems[1];

    // TODO: Improve perfomance. Fetching movies every time we make this check
    //  is too expensive.
    const bikes: IBike[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bikes`)
      .then((res) => res.json())
      .then((data: IBike[]) => data.slice(0, 6))
      .catch((error) => console.error(error)) as IBike[];

    if (!bikes.some((bike) => bike.id === Number(bikeid))) {
      return NextResponse.redirect(new URL('/bikes', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [ '/bikes/:id*' ]
};
