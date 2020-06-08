import { AsyncStorage } from 'react-native';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type RequestHeaders = {
  Authorization?: string | null;
  'Content-type'?: string;
};

type FetchRequestOptions = {
  method?: RequestMethod;
  headers?: RequestHeaders;
  body?: Object;
};

const getHeaders = (method: RequestMethod | undefined, useOAuth: boolean): Headers => {
  const headers: RequestHeaders = {};

  switch (method) {
    case 'POST':
      headers['Content-type'] = 'application/json; charset=utf-8';
      break;
  }

  if (useOAuth) {
    headers.Authorization = `Bearer ${AsyncStorage.getItem('Authorization')}`;
  }

  return headers as Headers;
};

export const fetchRequest = async (
  url: string,
  options: FetchRequestOptions | null,
  useOAuth = true
): Promise<any | never> => {
  const response = await fetch(
    url,
    options
      ? {
          method: options.method ? options.method : 'GET',
          headers: options.headers
            ? (options.headers as Headers)
            : getHeaders(options.method, useOAuth),
          body: options.body && JSON.stringify(options.body)
        }
      : undefined
  );

  if (!response.ok) {
    const contentType = response.headers.get('content-type');

    if (contentType === 'application/json; charset=utf-8') {
      const errors = await response.json();
      throw new Error(JSON.stringify(errors));
    } else {
      const error = await response.text();
      throw new Error(error);
    }
  }

  return await response.json();
};
