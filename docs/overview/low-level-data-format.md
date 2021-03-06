---
title: "Low-level Data Format"
---
Substrate encodes data in the "Simple Concatenated Aggregate Little-Endian" (SCALE) data format, as implemented by the `parity-codec` crate and several Javascript modules.

It is an extremely light-weight encoding format designed for high-performance, copy-free encoding and decoding of data in resource-constrained execution contexts like the Substrate runtime. It is not self-describing in any way and assumes the decoding context has all type knowledge about the encoded data. 

The encoded representation is defined thus:
[block:api-header]
{
  "title": "Fixed-width Integers"
}
[/block]
Basic integers are encoded using a fixed-width little endian format. E.g.
- `signed 8-bit integer 69`: `0x45` 
- `unsigned 16-bit integer 42`: `0x2a00`
- `unsigned 32-bit integer 16777215`: `0xffffff00`
[block:api-header]
{
  "title": "Boolean"
}
[/block]
Boolean values are encoded using the LSB of a single byte:
- `boolean false`: `0x00`
- `boolean true`: `0x01`
[block:api-header]
{
  "title": "Compact/General Integers"
}
[/block]
A "compact" or general integer encoding is sufficient for encoding large integers (up to 2**536) and is more efficient at encoding most values than the fixed-width version. (Though for single-byte values, the fixed-width integer is never worse.)

It is encoded with the two least significant bits denoting the mode:

- `0b00`: single-byte mode; upper six bits are LE encoding of the value (valid only for values of 0-63).
- `0x01`: two-byte mode: upper six bits and following byte is the LE encoding of the value (valid only for values `64-(2**14-1)`).
- `0x02`: four-byte mode: upper six bits and following three bytes is the LE encoding of the value (valid only for values `(2**14-1)-(2**30-1)`).
- `0x03`: Big-integer mode: The upper six bits is the number of bytes following less four. The value is contained, LE encoded, in the bytes following. The final (most significant) byte must be non-zero. Valid only for values `(2**30-1)-(2**536-1)`.

Examples:
- unsigned integer 0: `0x00`
- unsigned integer 1: `0x04`
- unsigned integer 42: `0xa8`
- unsigned integer 69: `0x1501`

Error examples:
- ~`0x0100`: Zero encoded in mode 1~
[block:api-header]
{
  "title": "Options"
}
[/block]
One or zero values of a particular type. Encoded as:

- `0x00` if it is `None` ("empty" or "null").
- `0x01` followed by the encoded value if it is `Some`.

As an exception, in the case that the type is a boolean, then it is always one byte:

- `0x00` if it is `None` ("empty" or "null").
- `0x01` if it is the `false` value.
- `0x02` if it is the `true` value.
[block:api-header]
{
  "title": "Vectors (lists, series, sets)"
}
[/block]
A collection of same-typed values is encoded prefixed with a *compact* encoding of the number of items, followed by each item's encoding concatenated in turn.
[block:api-header]
{
  "title": "Tuples and Structures"
}
[/block]
A fixed-size series of values, each with a possibly different but predetermined and fixed type. This is simply the concatenation of each encoded value. For structures, the values are named, but that is irrelevant for the encoding (names are ignored - only order matters).
[block:api-header]
{
  "title": "Enumerations (tagged-unions)"
}
[/block]
A fixed number of variants, each mutually exclusive and potentially implying a further value or series of values.

Encoded as the first byte identifying the index of the variant that the value is. Any further bytes are used to encode any data that the variant implies.

Example (Rust):

```
enum IntOrBool {
  Int(u8),
  Bool(bool),
}
```

- `Int(42)`: `0x002a`
- `Bool(true)`: `0x0101`