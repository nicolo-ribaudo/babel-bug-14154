import "core-js/stable";

const symbol = Symbol("desc");

const fn = ({ [symbol]: alias = {}, ...rest }) => {
  return {
    ...rest,
    [symbol]: alias
  };
};

const res = fn({ a: 1, b: 2 });

document.getElementById("app").innerHTML = `
<pre>
${JSON.stringify(res, null, 2)}
</pre>
`;
