const flat = headers => {
  const r = [];
  const f = header => {
    if (header.subheaders) return r.push(...flat(header.subheaders));
    r.push({ ...header });
  };
  for (let i = 0; i < headers.length; i++) {
    f(headers[i]);
  }
  return r;
};

export default flat;
