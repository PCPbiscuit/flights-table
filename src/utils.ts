import qs, { ParsedQs } from 'qs';

import { FlightsCollection } from './features/flights/hooks';

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

export function convertMsToHM(milliseconds: number) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = seconds >= 30 ? minutes + 1 : minutes;
  minutes = minutes % 60;
  hours = hours % 24;

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
}

export function converUnixToDate(unix: number) {
  const date = new Date(unix);
  return `${padTo2Digits(date.getHours())}:${padTo2Digits(date.getMinutes())}`;
}

export function pluralize(count: number, words: string[], withCount = true) {
  const cases = [2, 0, 1, 1, 1, 2];

  const word =
    words[
      count % 100 > 4 && count % 100 < 20 ? 2 : cases[Math.min(count % 10, 5)]
    ];

  if (!withCount) return word;

  return (
    count +
    ' ' +
    (count > 0 && count < 1
      ? words[0]
      : words[
          Math.floor(count) % 100 > 4 && Math.floor(count) % 100 < 20
            ? 2
            : cases[Math.min(Math.floor(count) % 10, 5)]
        ])
  );
}

export function parseSearch(search: URLSearchParams) {
  const string = search.toString();
  const parsedString = qs.parse(string, {
    ignoreQueryPrefix: true,
  });
  return parsedString;
}

export function stringifyParams(params: ParsedQs) {
  const string = qs.stringify(params, {
    addQueryPrefix: true,
    arrayFormat: 'brackets',
    skipNulls: true,
    encode: false,
  });
  return string;
}

export function filterData(
  data: FlightsCollection,
  filters: { [key: string]: string | string[] },
) {
  if (!filters) return data;
  const filtered = data
    .filter(flight =>
      filters.companyId ? flight.companyId === filters.companyId : flight,
    )
    .filter(flight =>
      filters.stops
        ? filters.stops.includes(flight.info.stops.length.toString())
        : flight,
    )
    .filter(flight =>
      filters.origin ? flight.info.origin == filters.origin : flight,
    )
    .filter(flight =>
      filters.destination
        ? flight.info.destination == filters.destination
        : flight,
    );
  return filtered;
}
