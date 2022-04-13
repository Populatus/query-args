import { test, expect } from "vitest";
import { parseArgs } from "./index";

//需求 -l -p 8080 -d /usr/logs

test("-l return boolean true", () => {
  const options = {
    l: Boolean,
  };
  const args = parseArgs(["-l"], options);
  expect(args).toEqual({
    l: true,
  });
});

test("-p return number 8080", () => {
  const options = {
    p: Number,
  };
  const args = parseArgs(["-p", 8080], options);
  expect(args).toEqual({
    p: 8080,
  });
});

test("-d return string /usr/logs", () => {
  const options = {
    d: String,
  };
  const args = parseArgs(["-d", "/usr/logs"], options);
  expect(args).toEqual({
    d: "/usr/logs",
  });
});

test("full path test", () => {
  const options = {
    l: Boolean,
    p: Number,
    d: String,
  };
  const args = parseArgs(["-l", "-p", 8080, "-d", "/usr/logs"], options);
  expect(args).toEqual({
    l: true,
    p: 8080,
    d: "/usr/logs",
  });
});

//需求 -g this,is,a,list -d 1,2,-3,5
