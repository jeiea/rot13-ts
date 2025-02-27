import { assertEquals } from "jsr:@std/assert/equals";
import { decode, encode } from "./mod.ts";

Deno.test(
  "encode('The quick brown fox jumps over the lazy dog 0123456789.') == 'Gur dhvpx oebja sbk whzcf bire gur ynml qbt 3456789012.'",
  () => {
    assertEquals(
      encode("The quick brown fox jumps over the lazy dog 0123456789."),
      "Gur dhvpx oebja sbk whzcf bire gur ynml qbt 3456789012.",
    );
  },
);

Deno.test(
  "decode('Gur dhvpx oebja sbk whzcf bire gur ynml qbt 3456789012.') == 'The quick brown fox jumps over the lazy dog 0123456789.'",
  () => {
    assertEquals(
      decode("Gur dhvpx oebja sbk whzcf bire gur ynml qbt 3456789012."),
      "The quick brown fox jumps over the lazy dog 0123456789.",
    );
  },
);
