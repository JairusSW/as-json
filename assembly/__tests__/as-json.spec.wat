(module
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_=>_none (func (param i32)))
 (type $none_=>_none (func))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $i64_i32_=>_i32 (func (param i64 i32) (result i32)))
 (type $i32_i32_=>_i64 (func (param i32 i32) (result i64)))
 (type $i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32) (result i32)))
 (type $i32_=>_f64 (func (param i32) (result f64)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $i64_=>_i32 (func (param i64) (result i32)))
 (type $i32_i64_i32_=>_none (func (param i32 i64 i32)))
 (type $i32_=>_i64 (func (param i32) (result i64)))
 (type $i32_f64_=>_i32 (func (param i32 f64) (result i32)))
 (type $f64_=>_i32 (func (param f64) (result i32)))
 (type $i32_i64_=>_i32 (func (param i32 i64) (result i32)))
 (type $i64_=>_none (func (param i64)))
 (type $none_=>_i32 (func (result i32)))
 (type $i32_i64_i32_i32_=>_none (func (param i32 i64 i32 i32)))
 (type $i32_i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32 i32) (result i32)))
 (type $i32_i32_i32_i32_i32_i32_i32_i32_i32_i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) (result i32)))
 (type $i32_i64_i32_i64_i32_i64_i32_=>_i32 (func (param i32 i64 i32 i64 i32 i64 i32) (result i32)))
 (type $f64_i32_=>_i32 (func (param f64 i32) (result i32)))
 (type $f64_i32_=>_f64 (func (param f64 i32) (result f64)))
 (type $i32_i32_=>_f64 (func (param i32 i32) (result f64)))
 (type $f64_=>_none (func (param f64)))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (import "__aspect" "createReflectedValue" (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/createReflectedValue (param i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) (result i32)))
 (import "__aspect" "attachStackTraceToReflectedValue" (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/attachStackTraceToReflectedValue (param i32)))
 (import "__aspect" "reportActualReflectedValue" (func $node_modules/@as-pect/assembly/assembly/internal/Actual/reportActualReflectedValue (param i32)))
 (import "__aspect" "reportExpectedReflectedValue" (func $node_modules/@as-pect/assembly/assembly/internal/Expected/reportExpectedReflectedValue (param i32 i32)))
 (import "__aspect" "clearActual" (func $node_modules/@as-pect/assembly/assembly/internal/Actual/clearActual))
 (import "__aspect" "clearExpected" (func $node_modules/@as-pect/assembly/assembly/internal/Expected/clearExpected))
 (import "__aspect" "reportTestTypeNode" (func $node_modules/@as-pect/assembly/assembly/internal/Test/it (param i32 i32)))
 (import "__aspect" "reportGroupTypeNode" (func $node_modules/@as-pect/assembly/assembly/internal/Test/describe (param i32 i32)))
 (global $~lib/as-string-sink/assembly/index/MIN_BUFFER_LEN i32 (i32.const 32))
 (global $~lib/as-string-sink/assembly/index/MIN_BUFFER_SIZE i32 (i32.const 64))
 (global $~lib/as-string-sink/assembly/index/NEW_LINE_CHAR i32 (i32.const 10))
 (global $~lib/rt/itcms/total (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/threshold (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/state (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/visitCount (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/pinSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/iter (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/toSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/white (mut i32) (i32.const 0))
 (global $~lib/shared/runtime/Runtime.Stub i32 (i32.const 0))
 (global $~lib/shared/runtime/Runtime.Minimal i32 (i32.const 1))
 (global $~lib/shared/runtime/Runtime.Incremental i32 (i32.const 2))
 (global $~lib/rt/itcms/fromSpace (mut i32) (i32.const 0))
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $~lib/native/ASC_LOW_MEMORY_LIMIT i32 (i32.const 0))
 (global $~lib/native/ASC_RUNTIME i32 (i32.const 2))
 (global $~lib/as-console/assembly/index/counts (mut i32) (i32.const 0))
 (global $~lib/as-console/assembly/index/timers (mut i32) (i32.const 0))
 (global $~lib/as-console/assembly/index/indent (mut i32) (i32.const 544))
 (global $assembly/chars/commaCode (mut i32) (i32.const 0))
 (global $assembly/chars/quoteCode (mut i32) (i32.const 0))
 (global $assembly/chars/backSlashCode (mut i32) (i32.const 0))
 (global $assembly/chars/forwardSlashCode (mut i32) (i32.const 0))
 (global $assembly/chars/leftBraceCode (mut i32) (i32.const 0))
 (global $assembly/chars/rightBraceCode (mut i32) (i32.const 0))
 (global $assembly/chars/leftBracketCode (mut i32) (i32.const 0))
 (global $assembly/chars/rightBracketCode (mut i32) (i32.const 0))
 (global $assembly/chars/colonCode (mut i32) (i32.const 0))
 (global $assembly/chars/tCode (mut i32) (i32.const 0))
 (global $assembly/chars/rCode (mut i32) (i32.const 0))
 (global $assembly/chars/uCode (mut i32) (i32.const 0))
 (global $assembly/chars/eCode (mut i32) (i32.const 0))
 (global $assembly/chars/fCode (mut i32) (i32.const 0))
 (global $assembly/chars/aCode (mut i32) (i32.const 0))
 (global $assembly/chars/lCode (mut i32) (i32.const 0))
 (global $assembly/chars/sCode (mut i32) (i32.const 0))
 (global $~lib/native/ASC_SHRINK_LEVEL i32 (i32.const 0))
 (global $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.FAILED_MATCH i32 (i32.const 0))
 (global $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.SUCCESSFUL_MATCH i32 (i32.const 1))
 (global $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.DEFER_MATCH i32 (i32.const 2))
 (global $~argumentsLength (mut i32) (i32.const 0))
 (global $~lib/builtins/u32.MAX_VALUE i32 (i32.const -1))
 (global $~lib/util/number/_frc_plus (mut i64) (i64.const 0))
 (global $~lib/util/number/_frc_minus (mut i64) (i64.const 0))
 (global $~lib/util/number/_exp (mut i32) (i32.const 0))
 (global $~lib/util/number/_K (mut i32) (i32.const 0))
 (global $~lib/util/number/_frc_pow (mut i64) (i64.const 0))
 (global $~lib/util/number/_exp_pow (mut i32) (i32.const 0))
 (global $~lib/util/string/__fixmulShift (mut i64) (i64.const 0))
 (global $~lib/builtins/i32.MAX_VALUE i32 (i32.const 2147483647))
 (global $node_modules/@as-pect/assembly/assembly/internal/noOp/noOp i32 (i32.const 8192))
 (global $node_modules/@as-pect/assembly/assembly/internal/log/ignoreLogs (mut i32) (i32.const 0))
 (global $~lib/rt/__rtti_base i32 (i32.const 8336))
 (global $~lib/memory/__data_end i32 (i32.const 8524))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 24908))
 (global $~lib/memory/__heap_base i32 (i32.const 24908))
 (global $~started (mut i32) (i32.const 0))
 (memory $0 1)
 (data (i32.const 12) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00(\00\00\00A\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e\00\00\00\00\00")
 (data (i32.const 76) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00 \00\00\00~\00l\00i\00b\00/\00r\00t\00/\00i\00t\00c\00m\00s\00.\00t\00s\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 144) "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 176) "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 204) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e\00\00\00\00\00\00\00\00\00")
 (data (i32.const 268) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\14\00\00\00~\00l\00i\00b\00/\00r\00t\00.\00t\00s\00\00\00\00\00\00\00\00\00")
 (data (i32.const 320) "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 348) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 412) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h\00")
 (data (i32.const 460) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s\00\00\00\00\00\00\00")
 (data (i32.const 524) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 556) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00,\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 588) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00\"\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 620) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00\\\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 652) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00/\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 684) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00{\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 716) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00}\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 748) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00[\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 780) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00]\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 812) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00:\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 844) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00t\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 876) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00r\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 908) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00u\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 940) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00e\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 972) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00f\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 1004) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00a\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 1036) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00l\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 1068) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00s\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 1100) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\1c\00\00\00S\00e\00r\00/\00d\00e\00 \00N\00u\00m\00b\00e\00r\00s\00")
 (data (i32.const 1148) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00,\00\00\00s\00h\00o\00u\00l\00d\00 \00s\00e\00r\00/\00d\00e\00 \00i\00n\00t\00e\00g\00e\00r\00s\00")
 (data (i32.const 1212) "|\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00d\00\00\00t\00o\00S\00t\00r\00i\00n\00g\00(\00)\00 \00r\00a\00d\00i\00x\00 \00a\00r\00g\00u\00m\00e\00n\00t\00 \00m\00u\00s\00t\00 \00b\00e\00 \00b\00e\00t\00w\00e\00e\00n\00 \002\00 \00a\00n\00d\00 \003\006\00\00\00\00\00\00\00\00\00")
 (data (i32.const 1340) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00u\00t\00i\00l\00/\00n\00u\00m\00b\00e\00r\00.\00t\00s\00\00\00\00\00\00\00")
 (data (i32.const 1404) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\000\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 1436) "0\000\000\001\000\002\000\003\000\004\000\005\000\006\000\007\000\008\000\009\001\000\001\001\001\002\001\003\001\004\001\005\001\006\001\007\001\008\001\009\002\000\002\001\002\002\002\003\002\004\002\005\002\006\002\007\002\008\002\009\003\000\003\001\003\002\003\003\003\004\003\005\003\006\003\007\003\008\003\009\004\000\004\001\004\002\004\003\004\004\004\005\004\006\004\007\004\008\004\009\005\000\005\001\005\002\005\003\005\004\005\005\005\006\005\007\005\008\005\009\006\000\006\001\006\002\006\003\006\004\006\005\006\006\006\007\006\008\006\009\007\000\007\001\007\002\007\003\007\004\007\005\007\006\007\007\007\008\007\009\008\000\008\001\008\002\008\003\008\004\008\005\008\006\008\007\008\008\008\009\009\000\009\001\009\002\009\003\009\004\009\005\009\006\009\007\009\008\009\009\00")
 (data (i32.const 1836) "\1c\04\00\00\00\00\00\00\00\00\00\00\01\00\00\00\00\04\00\000\000\000\001\000\002\000\003\000\004\000\005\000\006\000\007\000\008\000\009\000\00a\000\00b\000\00c\000\00d\000\00e\000\00f\001\000\001\001\001\002\001\003\001\004\001\005\001\006\001\007\001\008\001\009\001\00a\001\00b\001\00c\001\00d\001\00e\001\00f\002\000\002\001\002\002\002\003\002\004\002\005\002\006\002\007\002\008\002\009\002\00a\002\00b\002\00c\002\00d\002\00e\002\00f\003\000\003\001\003\002\003\003\003\004\003\005\003\006\003\007\003\008\003\009\003\00a\003\00b\003\00c\003\00d\003\00e\003\00f\004\000\004\001\004\002\004\003\004\004\004\005\004\006\004\007\004\008\004\009\004\00a\004\00b\004\00c\004\00d\004\00e\004\00f\005\000\005\001\005\002\005\003\005\004\005\005\005\006\005\007\005\008\005\009\005\00a\005\00b\005\00c\005\00d\005\00e\005\00f\006\000\006\001\006\002\006\003\006\004\006\005\006\006\006\007\006\008\006\009\006\00a\006\00b\006\00c\006\00d\006\00e\006\00f\007\000\007\001\007\002\007\003\007\004\007\005\007\006\007\007\007\008\007\009\007\00a\007\00b\007\00c\007\00d\007\00e\007\00f\008\000\008\001\008\002\008\003\008\004\008\005\008\006\008\007\008\008\008\009\008\00a\008\00b\008\00c\008\00d\008\00e\008\00f\009\000\009\001\009\002\009\003\009\004\009\005\009\006\009\007\009\008\009\009\009\00a\009\00b\009\00c\009\00d\009\00e\009\00f\00a\000\00a\001\00a\002\00a\003\00a\004\00a\005\00a\006\00a\007\00a\008\00a\009\00a\00a\00a\00b\00a\00c\00a\00d\00a\00e\00a\00f\00b\000\00b\001\00b\002\00b\003\00b\004\00b\005\00b\006\00b\007\00b\008\00b\009\00b\00a\00b\00b\00b\00c\00b\00d\00b\00e\00b\00f\00c\000\00c\001\00c\002\00c\003\00c\004\00c\005\00c\006\00c\007\00c\008\00c\009\00c\00a\00c\00b\00c\00c\00c\00d\00c\00e\00c\00f\00d\000\00d\001\00d\002\00d\003\00d\004\00d\005\00d\006\00d\007\00d\008\00d\009\00d\00a\00d\00b\00d\00c\00d\00d\00d\00e\00d\00f\00e\000\00e\001\00e\002\00e\003\00e\004\00e\005\00e\006\00e\007\00e\008\00e\009\00e\00a\00e\00b\00e\00c\00e\00d\00e\00e\00e\00f\00f\000\00f\001\00f\002\00f\003\00f\004\00f\005\00f\006\00f\007\00f\008\00f\009\00f\00a\00f\00b\00f\00c\00f\00d\00f\00e\00f\00f\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 2892) "\\\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00H\00\00\000\001\002\003\004\005\006\007\008\009\00a\00b\00c\00d\00e\00f\00g\00h\00i\00j\00k\00l\00m\00n\00o\00p\00q\00r\00s\00t\00u\00v\00w\00x\00y\00z\00\00\00\00\00")
 (data (i32.const 2988) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00S\00t\00r\00i\00n\00g\00")
 (data (i32.const 3020) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00$\00\00\00K\00e\00y\00 \00d\00o\00e\00s\00 \00n\00o\00t\00 \00e\00x\00i\00s\00t\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3084) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\16\00\00\00~\00l\00i\00b\00/\00m\00a\00p\00.\00t\00s\00\00\00\00\00\00\00")
 (data (i32.const 3132) "L\00\00\00\00\00\00\00\00\00\00\00\01\00\00\004\00\00\00c\00a\00c\00h\00e\00L\00e\00n\00g\00t\00h\00 \00s\00h\00o\00u\00l\00d\00 \00b\00e\00 \00e\00v\00e\00n\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3212) "\8c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00t\00\00\00n\00o\00d\00e\00_\00m\00o\00d\00u\00l\00e\00s\00/\00@\00a\00s\00-\00p\00e\00c\00t\00/\00a\00s\00s\00e\00m\00b\00l\00y\00/\00a\00s\00s\00e\00m\00b\00l\00y\00/\00i\00n\00t\00e\00r\00n\00a\00l\00/\00a\00s\00s\00e\00r\00t\00.\00t\00s\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3356) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3388) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3420) "L\00\00\00\00\00\00\00\00\00\00\00\01\00\00\002\00\00\00S\00e\00r\00i\00a\00l\00i\00z\00e\00s\00 \00t\00o\00 \00s\00a\00m\00e\00 \00v\00a\00l\00u\00e\00.\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3500) "\1c\00\00\00\00\00\00\00\00\00\00\00\n\00\00\00\08\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3532) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00(\00\00\00s\00h\00o\00u\00l\00d\00 \00s\00e\00r\00/\00d\00e\00 \00f\00l\00o\00a\00t\00s\00\00\00\00\00")
 (data (i32.const 3596) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\06\00\00\000\00.\000\00\00\00\00\00\00\00")
 (data (i32.const 3628) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\06\00\00\00N\00a\00N\00\00\00\00\00\00\00")
 (data (i32.const 3660) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\12\00\00\00-\00I\00n\00f\00i\00n\00i\00t\00y\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3708) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\10\00\00\00I\00n\00f\00i\00n\00i\00t\00y\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3760) "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3816) "\88\02\1c\08\a0\d5\8f\fav\bf>\a2\7f\e1\ae\bav\acU0 \fb\16\8b\ea5\ce]J\89B\cf-;eU\aa\b0k\9a\dfE\1a=\03\cf\1a\e6\ca\c6\9a\c7\17\fep\abO\dc\bc\be\fc\b1w\ff\0c\d6kA\ef\91V\be<\fc\7f\90\ad\1f\d0\8d\83\9aU1(\\Q\d3\b5\c9\a6\ad\8f\acq\9d\cb\8b\ee#w\"\9c\eamSx@\91I\cc\aeW\ce\b6]y\12<\827V\fbM6\94\10\c2O\98H8o\ea\96\90\c7:\82%\cb\85t\d7\f4\97\bf\97\cd\cf\86\a0\e5\ac*\17\98\n4\ef\8e\b25*\fbg8\b2;?\c6\d2\df\d4\c8\84\ba\cd\d3\1a\'D\dd\c5\96\c9%\bb\ce\9fk\93\84\a5b}$l\ac\db\f6\da_\0dXf\ab\a3&\f1\c3\de\93\f8\e2\f3\b8\80\ff\aa\a8\ad\b5\b5\8bJ|l\05_b\87S0\c14`\ff\bc\c9U&\ba\91\8c\85N\96\bd~)p$w\f9\df\8f\b8\e5\b8\9f\bd\df\a6\94}t\88\cf_\a9\f8\cf\9b\a8\8f\93pD\b9k\15\0f\bf\f8\f0\08\8a\b611eU%\b0\cd\ac\7f{\d0\c6\e2?\99\06;+*\c4\10\\\e4\d3\92si\99$$\aa\0e\ca\00\83\f2\b5\87\fd\eb\1a\11\92d\08\e5\bc\cc\88Po\t\cc\bc\8c,e\19\e2X\17\b7\d1\00\00\00\00\00\00@\9c\00\00\00\00\10\a5\d4\e8\00\00b\ac\c5\ebx\ad\84\t\94\f8x9?\81\b3\15\07\c9{\ce\97\c0p\\\ea{\ce2~\8fh\80\e9\ab\a48\d2\d5E\"\9a\17&\'O\9f\'\fb\c4\d41\a2c\ed\a8\ad\c8\8c8e\de\b0\dbe\ab\1a\8e\08\c7\83\9a\1dqB\f9\1d]\c4X\e7\1b\a6,iM\92\ea\8dp\1ad\ee\01\daJw\ef\9a\99\a3m\a2\85k}\b4{x\t\f2w\18\ddy\a1\e4T\b4\c2\c5\9b[\92\86[\86=]\96\c8\c5S5\c8\b3\a0\97\fa\\\b4*\95\e3_\a0\99\bd\9fF\de%\8c9\db4\c2\9b\a5\\\9f\98\a3r\9a\c6\f6\ce\be\e9TS\bf\dc\b7\e2A\"\f2\17\f3\fc\88\a5x\\\d3\9b\ce \cc\dfS!{\f3Z\16\98:0\1f\97\dc\b5\a0\e2\96\b3\e3\\S\d1\d9\a8<D\a7\a4\d9|\9b\fb\10D\a4\a7LLv\bb\1a\9c@\b6\ef\8e\ab\8b,\84W\a6\10\ef\1f\d0)1\91\e9\e5\a4\10\9b\9d\0c\9c\a1\fb\9b\10\e7)\f4;b\d9 (\ac\85\cf\a7z^KD\80-\dd\ac\03@\e4!\bf\8f\ffD^/\9cg\8eA\b8\8c\9c\9d\173\d4\a9\1b\e3\b4\92\db\19\9e\d9w\df\ban\bf\96\ebk\ee\f0\9b;\02\87\af")
 (data (i32.const 4512) "<\fbW\fbr\fb\8c\fb\a7\fb\c1\fb\dc\fb\f6\fb\11\fc,\fcF\fca\fc{\fc\96\fc\b1\fc\cb\fc\e6\fc\00\fd\1b\fd5\fdP\fdk\fd\85\fd\a0\fd\ba\fd\d5\fd\ef\fd\n\fe%\fe?\feZ\fet\fe\8f\fe\a9\fe\c4\fe\df\fe\f9\fe\14\ff.\ffI\ffc\ff~\ff\99\ff\b3\ff\ce\ff\e8\ff\03\00\1e\008\00S\00m\00\88\00\a2\00\bd\00\d8\00\f2\00\0d\01\'\01B\01\\\01w\01\92\01\ac\01\c7\01\e1\01\fc\01\16\021\02L\02f\02\81\02\9b\02\b6\02\d0\02\eb\02\06\03 \03;\03U\03p\03\8b\03\a5\03\c0\03\da\03\f5\03\0f\04*\04")
 (data (i32.const 4688) "\01\00\00\00\n\00\00\00d\00\00\00\e8\03\00\00\10\'\00\00\a0\86\01\00@B\0f\00\80\96\98\00\00\e1\f5\05\00\ca\9a;")
 (data (i32.const 4732) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00n\00u\00l\00l\00\00\00\00\00")
 (data (i32.const 4768) "\00\00\00\00\00\00\f0?\00\00\00\00\00\00$@\00\00\00\00\00\00Y@\00\00\00\00\00@\8f@\00\00\00\00\00\88\c3@\00\00\00\00\00j\f8@\00\00\00\00\80\84.A\00\00\00\00\d0\12cA\00\00\00\00\84\d7\97A\00\00\00\00e\cd\cdA\00\00\00 _\a0\02B\00\00\00\e8vH7B\00\00\00\a2\94\1amB\00\00@\e5\9c0\a2B\00\00\90\1e\c4\bc\d6B\00\004&\f5k\0cC\00\80\e07y\c3AC\00\a0\d8\85W4vC\00\c8Ngm\c1\abC\00=\91`\e4X\e1C@\8c\b5x\1d\af\15DP\ef\e2\d6\e4\1aKD\92\d5M\06\cf\f0\80D")
 (data (i32.const 4956) "\1c\00\00\00\00\00\00\00\00\00\00\00\n\00\00\00\08\00\00\00\02\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 4988) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00,\00\00\00s\00h\00o\00u\00l\00d\00 \00s\00e\00r\00/\00d\00e\00 \00b\00o\00o\00l\00e\00a\00n\00s\00")
 (data (i32.const 5052) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00t\00r\00u\00e\00\00\00\00\00")
 (data (i32.const 5084) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00f\00a\00l\00s\00e\00\00\00")
 (data (i32.const 5116) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00(\00\00\00J\00S\00O\00N\00:\00 \00C\00a\00n\00n\00o\00t\00 \00p\00a\00r\00s\00e\00 \00\"\00\00\00\00\00")
 (data (i32.const 5180) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\18\00\00\00\"\00 \00a\00s\00 \00b\00o\00o\00l\00e\00a\00n\00\00\00\00\00")
 (data (i32.const 5228) "\1c\00\00\00\03\00\00\00\00\00\00\00\0b\00\00\00\0c\00\00\00\10\14\00\00\00\00\00\00P\14\00\00")
 (data (i32.const 5260) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\"\00\00\00a\00s\00s\00e\00m\00b\00l\00y\00/\00i\00n\00d\00e\00x\00.\00t\00s\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 5324) "\1c\00\00\00\00\00\00\00\00\00\00\00\n\00\00\00\08\00\00\00\03\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 5356) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00*\00\00\00s\00h\00o\00u\00l\00d\00 \00s\00e\00r\00/\00d\00e\00 \00s\00t\00r\00i\00n\00g\00s\00\00\00")
 (data (i32.const 5420) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0e\00\00\00a\00b\00c\00d\00e\00f\00g\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 5468) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\04\00\00\00\\\00\"\00\00\00\00\00\00\00\00\00")
 (data (i32.const 5500) "L\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00.\00\00\00s\00t\00\"\00r\00i\00n\00g\00\"\00 \00w\00\"\00\"\00i\00t\00h\00 \00q\00u\00o\00t\00e\00s\00\"\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 5580) "|\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00`\00\00\00s\00t\00r\00i\00n\00g\00 \00\t\00\0d\00\\\00\"\00w\00i\00t\00h\00 \00r\00a\00n\00\t\00d\00o\00m\00 \00s\00p\00a\00\n\00c\00e\00s\00 \00a\00n\00d\00 \00\n\00n\00e\00w\00l\00i\00n\00e\00s\00\n\00\n\00\n\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 5708) "\bc\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\a0\00\00\00s\00t\00r\00i\00n\00g\00 \00w\00i\00t\00h\00 \00c\00o\00l\00o\00n\00 \00:\00 \00c\00o\00m\00m\00a\00 \00,\00 \00b\00r\00a\00c\00e\00 \00[\00 \00]\00 \00b\00r\00a\00c\00k\00e\00t\00 \00{\00 \00}\00 \00a\00n\00d\00 \00q\00u\00o\00t\00e\00 \00\"\00 \00a\00n\00d\00 \00o\00t\00h\00e\00r\00 \00q\00u\00o\00t\00e\00 \00\\\00\"\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 5900) "\1c\00\00\00\00\00\00\00\00\00\00\00\n\00\00\00\08\00\00\00\04\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 5932) "\1c\00\00\00\00\00\00\00\00\00\00\00\n\00\00\00\08\00\00\00\05\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 5964) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\18\00\00\00S\00e\00r\00/\00d\00e\00 \00A\00r\00r\00a\00y\00\00\00\00\00")
 (data (i32.const 6012) "L\00\00\00\00\00\00\00\00\00\00\00\01\00\00\008\00\00\00s\00h\00o\00u\00l\00d\00 \00s\00e\00r\00/\00d\00e\00 \00i\00n\00t\00e\00g\00e\00r\00 \00a\00r\00r\00a\00y\00s\00\00\00\00\00")
 (data (i32.const 6092) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\0c\00\00\00\00\00\00\00d\00\00\00e\00\00\00")
 (data (i32.const 6124) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\04\00\00\00[\00]\00\00\00\00\00\00\00\00\00")
 (data (i32.const 6156) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\1a\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00.\00t\00s\00\00\00")
 (data (i32.const 6204) ",\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\18\00\00\00\00\00\00\00\00\00\00\00d\00\00\00\00\00\00\00e\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 6252) ",\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\14\00\00\00\00\00\00\00d\00\00\00e\00\00\00\9c\ff\ff\ff\9b\ff\ff\ff\00\00\00\00\00\00\00\00")
 (data (i32.const 6300) "<\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00(\00\00\00\00\00\00\00\00\00\00\00d\00\00\00\00\00\00\00e\00\00\00\00\00\00\00\9c\ff\ff\ff\ff\ff\ff\ff\9b\ff\ff\ff\ff\ff\ff\ff\00\00\00\00")
 (data (i32.const 6364) "\1c\00\00\00\00\00\00\00\00\00\00\00\n\00\00\00\08\00\00\00\06\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 6396) "L\00\00\00\00\00\00\00\00\00\00\00\01\00\00\004\00\00\00s\00h\00o\00u\00l\00d\00 \00s\00e\00r\00/\00d\00e\00 \00f\00l\00o\00a\00t\00 \00a\00r\00r\00a\00y\00s\00\00\00\00\00\00\00\00\00")
 (data (i32.const 6476) "L\00\00\00\00\00\00\00\00\00\00\00\00\00\00\008\00\00\00\ecQ\b8\1e\85\eb\1c@\00\00\00\00\00@\8f@\00\00\00\00\00@\8f@82\8f\fc\c1\c0\f3?82\8f\fc\c1\c0\f3?\00\00\00\00\00\00\00\00\ecQ\b8\1e\85\eb\1c@\00\00\00\00")
 (data (i32.const 6556) "\1c\00\00\00\00\00\00\00\00\00\00\00\n\00\00\00\08\00\00\00\07\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 6588) "L\00\00\00\00\00\00\00\00\00\00\00\01\00\00\008\00\00\00s\00h\00o\00u\00l\00d\00 \00s\00e\00r\00/\00d\00e\00 \00b\00o\00o\00l\00e\00a\00n\00 \00a\00r\00r\00a\00y\00s\00\00\00\00\00")
 (data (i32.const 6668) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 6700) "\1c\00\00\00\03\00\00\00\00\00\00\00\0b\00\00\00\0c\00\00\00\10\14\00\00\00\00\00\00P\14\00\00")
 (data (i32.const 6732) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 6764) "\1c\00\00\00\00\00\00\00\00\00\00\00\n\00\00\00\08\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 6796) "L\00\00\00\00\00\00\00\00\00\00\00\01\00\00\006\00\00\00s\00h\00o\00u\00l\00d\00 \00s\00e\00r\00/\00d\00e\00 \00s\00t\00r\00i\00n\00g\00 \00a\00r\00r\00a\00y\00s\00\00\00\00\00\00\00")
 (data (i32.const 6876) "|\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00^\00\00\00s\00t\00r\00i\00n\00g\00 \00\t\00\0d\00\"\00w\00i\00t\00h\00 \00r\00a\00n\00\t\00d\00o\00m\00 \00s\00p\00a\00\n\00c\00e\00s\00 \00a\00n\00d\00 \00\n\00n\00e\00w\00l\00i\00n\00e\00s\00\n\00\n\00\n\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7004) "\bc\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\9e\00\00\00s\00t\00r\00i\00n\00g\00 \00w\00i\00t\00h\00 \00c\00o\00l\00o\00n\00 \00:\00 \00c\00o\00m\00m\00a\00 \00,\00 \00b\00r\00a\00c\00e\00 \00[\00 \00]\00 \00b\00r\00a\00c\00k\00e\00t\00 \00{\00 \00}\00 \00a\00n\00d\00 \00q\00u\00o\00t\00e\00 \00\"\00 \00a\00n\00d\00 \00o\00t\00h\00e\00r\00 \00q\00u\00o\00t\00e\00 \00\"\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7196) ",\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\10\00\00\00@\15\00\00\90\15\00\00\f0\1a\00\00p\1b\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7244) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7276) "\1c\00\00\00\00\00\00\00\00\00\00\00\n\00\00\00\08\00\00\00\t\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7308) "\\\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00F\00\00\00s\00h\00o\00u\00l\00d\00 \00s\00e\00r\00/\00d\00e\00 \00n\00e\00s\00t\00e\00d\00 \00i\00n\00t\00e\00g\00e\00r\00 \00a\00r\00r\00a\00y\00s\00\00\00\00\00\00\00")
 (data (i32.const 7404) ",\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\10\00\00\00d\00\00\00\00\00\00\00e\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7452) ",\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\10\00\00\00\9c\ff\ff\ff\ff\ff\ff\ff\9b\ff\ff\ff\ff\ff\ff\ff\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7500) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7532) "\1c\00\00\00\00\00\00\00\00\00\00\00\n\00\00\00\08\00\00\00\n\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7564) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\ecQ\b8\1e\85\eb\1c@\00\00\00\00")
 (data (i32.const 7596) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00@\8f@\00\00\00\00")
 (data (i32.const 7628) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00@\8f@\00\00\00\00")
 (data (i32.const 7660) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\0082\8f\fc\c1\c0\f3?\00\00\00\00")
 (data (i32.const 7692) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\0082\8f\fc\c1\c0\f3?\00\00\00\00")
 (data (i32.const 7724) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7756) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\ecQ\b8\1e\85\eb\1c@\00\00\00\00")
 (data (i32.const 7788) "\1c\00\00\00\00\00\00\00\00\00\00\00\n\00\00\00\08\00\00\00\0b\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7820) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7852) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7884) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7916) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7948) "\1c\00\00\00\00\00\00\00\00\00\00\00\n\00\00\00\08\00\00\00\0c\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7980) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\04\00\00\00@\15\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 8012) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\04\00\00\00\90\15\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 8044) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\04\00\00\00\e0\15\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 8076) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\04\00\00\00`\16\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 8108) "\1c\00\00\00\00\00\00\00\00\00\00\00\n\00\00\00\08\00\00\00\0d\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 8140) "\1c\00\00\00\00\00\00\00\00\00\00\00\n\00\00\00\08\00\00\00\0e\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 8172) "\1c\00\00\00\00\00\00\00\00\00\00\00\n\00\00\00\08\00\00\00\0f\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 8204) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00*\00\00\00O\00b\00j\00e\00c\00t\00 \00a\00l\00r\00e\00a\00d\00y\00 \00p\00i\00n\00n\00e\00d\00\00\00")
 (data (i32.const 8268) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00(\00\00\00O\00b\00j\00e\00c\00t\00 \00i\00s\00 \00n\00o\00t\00 \00p\00i\00n\00n\00e\00d\00\00\00\00\00")
 (data (i32.const 8336) "\17\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\10\01\82\00\00\00\00\00\10\02\82\00\00\00\00\00\00\00\00\00\00\00\00\00\10\t\02\00\00\00\00\00\02\01\00\00\00\00\00\00\02\t\00\00\00\00\00\00\00\00\00\00\00\00\00\00\04A\00\00\00\00\00\00\02\01\00\00\00\00\00\00\00\00\00\00\00\00\00\00\02\02\00\00\00\00\00\00\02\n\00\00\00\00\00\00\02\1a\00\00\00\00\00\00B\00\00\00\00\00\00\00\02A\00\00\00\00\00\00\02A\00\00\00\00\00\00\02A\00\00\00\00\00\00\02A\00\00\00\00\00\00\02A\00\00\00\00\00\00")
 (table $0 16 funcref)
 (elem $0 (i32.const 1) $start:assembly/__tests__/as-json.spec~anonymous|0~anonymous|0 $start:assembly/__tests__/as-json.spec~anonymous|0~anonymous|1 $start:assembly/__tests__/as-json.spec~anonymous|0~anonymous|2 $start:assembly/__tests__/as-json.spec~anonymous|0~anonymous|3 $start:assembly/__tests__/as-json.spec~anonymous|0 $start:assembly/__tests__/as-json.spec~anonymous|1~anonymous|0 $start:assembly/__tests__/as-json.spec~anonymous|1~anonymous|1 $start:assembly/__tests__/as-json.spec~anonymous|1~anonymous|2 $start:assembly/__tests__/as-json.spec~anonymous|1~anonymous|3 $start:assembly/__tests__/as-json.spec~anonymous|1~anonymous|4 $start:assembly/__tests__/as-json.spec~anonymous|1~anonymous|5 $start:assembly/__tests__/as-json.spec~anonymous|1~anonymous|6 $start:assembly/__tests__/as-json.spec~anonymous|1~anonymous|7 $start:assembly/__tests__/as-json.spec~anonymous|1 $start:node_modules/@as-pect/assembly/assembly/internal/noOp~anonymous|0)
 (export "__ignoreLogs" (func $node_modules/@as-pect/assembly/assembly/internal/log/__ignoreLogs))
 (export "__new" (func $~lib/rt/itcms/__new))
 (export "__pin" (func $~lib/rt/itcms/__pin))
 (export "__unpin" (func $~lib/rt/itcms/__unpin))
 (export "__collect" (func $~lib/rt/itcms/__collect))
 (export "__rtti_base" (global $~lib/rt/__rtti_base))
 (export "memory" (memory $0))
 (export "table" (table $0))
 (export "_start" (func $~start))
 (export "__call" (func $export:node_modules/@as-pect/assembly/assembly/internal/call/__call))
 (func $~lib/rt/itcms/Object#set:nextWithColor (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/rt/itcms/Object#set:prev (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/rt/itcms/initLazy (param $0 i32) (result i32)
  local.get $0
  local.get $0
  call $~lib/rt/itcms/Object#set:nextWithColor
  local.get $0
  local.get $0
  call $~lib/rt/itcms/Object#set:prev
  local.get $0
 )
 (func $~lib/rt/itcms/Object#get:next (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
 )
 (func $~lib/rt/itcms/Object#get:color (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.const 3
  i32.and
 )
 (func $~lib/rt/itcms/visitRoots (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/__visit_globals
  global.get $~lib/rt/itcms/pinSpace
  local.set $1
  local.get $1
  call $~lib/rt/itcms/Object#get:next
  local.set $2
  loop $while-continue|0
   local.get $2
   local.get $1
   i32.ne
   local.set $3
   local.get $3
   if
    i32.const 1
    drop
    local.get $2
    call $~lib/rt/itcms/Object#get:color
    i32.const 3
    i32.eq
    i32.eqz
    if
     i32.const 0
     i32.const 96
     i32.const 159
     i32.const 16
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.const 20
    i32.add
    local.get $0
    call $~lib/rt/__visit_members
    local.get $2
    call $~lib/rt/itcms/Object#get:next
    local.set $2
    br $while-continue|0
   end
  end
 )
 (func $~lib/rt/itcms/Object#set:color (param $0 i32) (param $1 i32)
  local.get $0
  local.get $0
  i32.load offset=4
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.get $1
  i32.or
  call $~lib/rt/itcms/Object#set:nextWithColor
 )
 (func $~lib/rt/itcms/Object#set:next (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  local.get $0
  i32.load offset=4
  i32.const 3
  i32.and
  i32.or
  call $~lib/rt/itcms/Object#set:nextWithColor
 )
 (func $~lib/rt/itcms/Object#unlink (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/itcms/Object#get:next
  local.set $1
  local.get $1
  i32.const 0
  i32.eq
  if
   i32.const 1
   drop
   local.get $0
   i32.load offset=8
   i32.const 0
   i32.eq
   if (result i32)
    local.get $0
    global.get $~lib/memory/__heap_base
    i32.lt_u
   else
    i32.const 0
   end
   i32.eqz
   if
    i32.const 0
    i32.const 96
    i32.const 127
    i32.const 18
    call $~lib/builtins/abort
    unreachable
   end
   return
  end
  local.get $0
  i32.load offset=8
  local.set $2
  i32.const 1
  drop
  local.get $2
  i32.eqz
  if
   i32.const 0
   i32.const 96
   i32.const 131
   i32.const 16
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $2
  call $~lib/rt/itcms/Object#set:prev
  local.get $2
  local.get $1
  call $~lib/rt/itcms/Object#set:next
 )
 (func $~lib/rt/__typeinfo (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/rt/__rtti_base
  local.set $1
  local.get $0
  local.get $1
  i32.load
  i32.gt_u
  if
   i32.const 224
   i32.const 288
   i32.const 22
   i32.const 28
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.add
  local.get $0
  i32.const 8
  i32.mul
  i32.add
  i32.load
 )
 (func $~lib/rt/itcms/Object#get:isPointerfree (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=12
  local.set $1
  local.get $1
  i32.const 1
  i32.le_u
  if (result i32)
   i32.const 1
  else
   local.get $1
   call $~lib/rt/__typeinfo
   i32.const 32
   i32.and
   i32.const 0
   i32.ne
  end
 )
 (func $~lib/rt/itcms/Object#linkTo (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $1
  i32.load offset=8
  local.set $3
  local.get $0
  local.get $1
  local.get $2
  i32.or
  call $~lib/rt/itcms/Object#set:nextWithColor
  local.get $0
  local.get $3
  call $~lib/rt/itcms/Object#set:prev
  local.get $3
  local.get $0
  call $~lib/rt/itcms/Object#set:next
  local.get $1
  local.get $0
  call $~lib/rt/itcms/Object#set:prev
 )
 (func $~lib/rt/itcms/Object#makeGray (param $0 i32)
  (local $1 i32)
  local.get $0
  global.get $~lib/rt/itcms/iter
  i32.eq
  if
   local.get $0
   i32.load offset=8
   local.tee $1
   i32.eqz
   if (result i32)
    i32.const 0
    i32.const 96
    i32.const 147
    i32.const 30
    call $~lib/builtins/abort
    unreachable
   else
    local.get $1
   end
   global.set $~lib/rt/itcms/iter
  end
  local.get $0
  call $~lib/rt/itcms/Object#unlink
  local.get $0
  global.get $~lib/rt/itcms/toSpace
  local.get $0
  call $~lib/rt/itcms/Object#get:isPointerfree
  if (result i32)
   global.get $~lib/rt/itcms/white
   i32.eqz
  else
   i32.const 2
  end
  call $~lib/rt/itcms/Object#linkTo
 )
 (func $~lib/rt/itcms/__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  i32.eqz
  if
   return
  end
  local.get $0
  i32.const 20
  i32.sub
  local.set $2
  i32.const 0
  drop
  local.get $2
  call $~lib/rt/itcms/Object#get:color
  global.get $~lib/rt/itcms/white
  i32.eq
  if
   local.get $2
   call $~lib/rt/itcms/Object#makeGray
   global.get $~lib/rt/itcms/visitCount
   i32.const 1
   i32.add
   global.set $~lib/rt/itcms/visitCount
  end
 )
 (func $~lib/rt/itcms/visitStack (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  local.set $1
  loop $while-continue|0
   local.get $1
   global.get $~lib/memory/__heap_base
   i32.lt_u
   local.set $2
   local.get $2
   if
    local.get $1
    i32.load
    local.get $0
    call $~lib/rt/itcms/__visit
    local.get $1
    i32.const 4
    i32.add
    local.set $1
    br $while-continue|0
   end
  end
 )
 (func $~lib/rt/itcms/Object#get:size (param $0 i32) (result i32)
  i32.const 4
  local.get $0
  i32.load
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  i32.add
 )
 (func $~lib/rt/tlsf/Root#set:flMap (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $~lib/rt/common/BLOCK#set:mmInfo (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $~lib/rt/tlsf/Block#set:prev (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/Block#set:next (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  local.get $1
  i32.load
  local.set $2
  i32.const 1
  drop
  local.get $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 368
   i32.const 268
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.set $3
  i32.const 1
  drop
  local.get $3
  i32.const 12
  i32.ge_u
  i32.eqz
  if
   i32.const 0
   i32.const 368
   i32.const 270
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const 256
  i32.lt_u
  if
   i32.const 0
   local.set $4
   local.get $3
   i32.const 4
   i32.shr_u
   local.set $5
  else
   local.get $3
   local.tee $6
   i32.const 1073741820
   local.tee $7
   local.get $6
   local.get $7
   i32.lt_u
   select
   local.set $6
   i32.const 31
   local.get $6
   i32.clz
   i32.sub
   local.set $4
   local.get $6
   local.get $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 1
   i32.const 4
   i32.shl
   i32.xor
   local.set $5
   local.get $4
   i32.const 8
   i32.const 1
   i32.sub
   i32.sub
   local.set $4
  end
  i32.const 1
  drop
  local.get $4
  i32.const 23
  i32.lt_u
  if (result i32)
   local.get $5
   i32.const 16
   i32.lt_u
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 368
   i32.const 284
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load offset=4
  local.set $8
  local.get $1
  i32.load offset=8
  local.set $9
  local.get $8
  if
   local.get $8
   local.get $9
   call $~lib/rt/tlsf/Block#set:next
  end
  local.get $9
  if
   local.get $9
   local.get $8
   call $~lib/rt/tlsf/Block#set:prev
  end
  local.get $1
  local.get $0
  local.set $10
  local.get $4
  local.set $6
  local.get $5
  local.set $7
  local.get $10
  local.get $6
  i32.const 4
  i32.shl
  local.get $7
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  i32.eq
  if
   local.get $0
   local.set $11
   local.get $4
   local.set $10
   local.get $5
   local.set $6
   local.get $9
   local.set $7
   local.get $11
   local.get $10
   i32.const 4
   i32.shl
   local.get $6
   i32.add
   i32.const 2
   i32.shl
   i32.add
   local.get $7
   i32.store offset=96
   local.get $9
   i32.eqz
   if
    local.get $0
    local.set $6
    local.get $4
    local.set $7
    local.get $6
    local.get $7
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    local.set $6
    local.get $0
    local.set $7
    local.get $4
    local.set $11
    local.get $6
    i32.const 1
    local.get $5
    i32.shl
    i32.const -1
    i32.xor
    i32.and
    local.tee $6
    local.set $10
    local.get $7
    local.get $11
    i32.const 2
    i32.shl
    i32.add
    local.get $10
    i32.store offset=4
    local.get $6
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const 1
     local.get $4
     i32.shl
     i32.const -1
     i32.xor
     i32.and
     call $~lib/rt/tlsf/Root#set:flMap
    end
   end
  end
 )
 (func $~lib/rt/tlsf/insertBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  i32.const 1
  drop
  local.get $1
  i32.eqz
  if
   i32.const 0
   i32.const 368
   i32.const 201
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load
  local.set $2
  i32.const 1
  drop
  local.get $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 368
   i32.const 203
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.set $3
  local.get $3
  i32.const 4
  i32.add
  local.get $3
  i32.load
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  i32.add
  local.set $4
  local.get $4
  i32.load
  local.set $5
  local.get $5
  i32.const 1
  i32.and
  if
   local.get $0
   local.get $4
   call $~lib/rt/tlsf/removeBlock
   local.get $1
   local.get $2
   i32.const 4
   i32.add
   local.get $5
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.tee $2
   call $~lib/rt/common/BLOCK#set:mmInfo
   local.get $1
   local.set $3
   local.get $3
   i32.const 4
   i32.add
   local.get $3
   i32.load
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.set $4
   local.get $4
   i32.load
   local.set $5
  end
  local.get $2
  i32.const 2
  i32.and
  if
   local.get $1
   local.set $3
   local.get $3
   i32.const 4
   i32.sub
   i32.load
   local.set $3
   local.get $3
   i32.load
   local.set $6
   i32.const 1
   drop
   local.get $6
   i32.const 1
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 368
    i32.const 221
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   local.get $3
   call $~lib/rt/tlsf/removeBlock
   local.get $3
   local.set $1
   local.get $1
   local.get $6
   i32.const 4
   i32.add
   local.get $2
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.tee $2
   call $~lib/rt/common/BLOCK#set:mmInfo
  end
  local.get $4
  local.get $5
  i32.const 2
  i32.or
  call $~lib/rt/common/BLOCK#set:mmInfo
  local.get $2
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.set $7
  i32.const 1
  drop
  local.get $7
  i32.const 12
  i32.ge_u
  i32.eqz
  if
   i32.const 0
   i32.const 368
   i32.const 233
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 1
  drop
  local.get $1
  i32.const 4
  i32.add
  local.get $7
  i32.add
  local.get $4
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 368
   i32.const 234
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  i32.const 4
  i32.sub
  local.get $1
  i32.store
  local.get $7
  i32.const 256
  i32.lt_u
  if
   i32.const 0
   local.set $8
   local.get $7
   i32.const 4
   i32.shr_u
   local.set $9
  else
   local.get $7
   local.tee $3
   i32.const 1073741820
   local.tee $6
   local.get $3
   local.get $6
   i32.lt_u
   select
   local.set $3
   i32.const 31
   local.get $3
   i32.clz
   i32.sub
   local.set $8
   local.get $3
   local.get $8
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 1
   i32.const 4
   i32.shl
   i32.xor
   local.set $9
   local.get $8
   i32.const 8
   i32.const 1
   i32.sub
   i32.sub
   local.set $8
  end
  i32.const 1
  drop
  local.get $8
  i32.const 23
  i32.lt_u
  if (result i32)
   local.get $9
   i32.const 16
   i32.lt_u
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 368
   i32.const 251
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.set $10
  local.get $8
  local.set $3
  local.get $9
  local.set $6
  local.get $10
  local.get $3
  i32.const 4
  i32.shl
  local.get $6
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  local.set $11
  local.get $1
  i32.const 0
  call $~lib/rt/tlsf/Block#set:prev
  local.get $1
  local.get $11
  call $~lib/rt/tlsf/Block#set:next
  local.get $11
  if
   local.get $11
   local.get $1
   call $~lib/rt/tlsf/Block#set:prev
  end
  local.get $0
  local.set $12
  local.get $8
  local.set $10
  local.get $9
  local.set $3
  local.get $1
  local.set $6
  local.get $12
  local.get $10
  i32.const 4
  i32.shl
  local.get $3
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.get $6
  i32.store offset=96
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $8
  i32.shl
  i32.or
  call $~lib/rt/tlsf/Root#set:flMap
  local.get $0
  local.set $13
  local.get $8
  local.set $12
  local.get $0
  local.set $3
  local.get $8
  local.set $6
  local.get $3
  local.get $6
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
  i32.const 1
  local.get $9
  i32.shl
  i32.or
  local.set $10
  local.get $13
  local.get $12
  i32.const 2
  i32.shl
  i32.add
  local.get $10
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  i32.const 1
  drop
  local.get $1
  local.get $2
  i32.le_u
  i32.eqz
  if
   i32.const 0
   i32.const 368
   i32.const 377
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.add
  i32.const 15
  i32.add
  i32.const 15
  i32.const -1
  i32.xor
  i32.and
  i32.const 4
  i32.sub
  local.set $1
  local.get $2
  i32.const 15
  i32.const -1
  i32.xor
  i32.and
  local.set $2
  local.get $0
  local.set $3
  local.get $3
  i32.load offset=1568
  local.set $4
  i32.const 0
  local.set $5
  local.get $4
  if
   i32.const 1
   drop
   local.get $1
   local.get $4
   i32.const 4
   i32.add
   i32.ge_u
   i32.eqz
   if
    i32.const 0
    i32.const 368
    i32.const 384
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   i32.const 16
   i32.sub
   local.get $4
   i32.eq
   if
    local.get $1
    i32.const 16
    i32.sub
    local.set $1
    local.get $4
    i32.load
    local.set $5
   else
    nop
   end
  else
   i32.const 1
   drop
   local.get $1
   local.get $0
   i32.const 1572
   i32.add
   i32.ge_u
   i32.eqz
   if
    i32.const 0
    i32.const 368
    i32.const 397
    i32.const 5
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $2
  local.get $1
  i32.sub
  local.set $6
  local.get $6
  i32.const 4
  i32.const 12
  i32.add
  i32.const 4
  i32.add
  i32.lt_u
  if
   i32.const 0
   return
  end
  local.get $6
  i32.const 2
  i32.const 4
  i32.mul
  i32.sub
  local.set $7
  local.get $1
  local.set $8
  local.get $8
  local.get $7
  i32.const 1
  i32.or
  local.get $5
  i32.const 2
  i32.and
  i32.or
  call $~lib/rt/common/BLOCK#set:mmInfo
  local.get $8
  i32.const 0
  call $~lib/rt/tlsf/Block#set:prev
  local.get $8
  i32.const 0
  call $~lib/rt/tlsf/Block#set:next
  local.get $1
  i32.const 4
  i32.add
  local.get $7
  i32.add
  local.set $4
  local.get $4
  i32.const 0
  i32.const 2
  i32.or
  call $~lib/rt/common/BLOCK#set:mmInfo
  local.get $0
  local.set $9
  local.get $4
  local.set $3
  local.get $9
  local.get $3
  i32.store offset=1568
  local.get $0
  local.get $8
  call $~lib/rt/tlsf/insertBlock
  i32.const 1
 )
 (func $~lib/rt/tlsf/initialize
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  i32.const 0
  drop
  global.get $~lib/memory/__heap_base
  i32.const 15
  i32.add
  i32.const 15
  i32.const -1
  i32.xor
  i32.and
  local.set $0
  memory.size
  local.set $1
  local.get $0
  i32.const 1572
  i32.add
  i32.const 65535
  i32.add
  i32.const 65535
  i32.const -1
  i32.xor
  i32.and
  i32.const 16
  i32.shr_u
  local.set $2
  local.get $2
  local.get $1
  i32.gt_s
  if (result i32)
   local.get $2
   local.get $1
   i32.sub
   memory.grow
   i32.const 0
   i32.lt_s
  else
   i32.const 0
  end
  if
   unreachable
  end
  local.get $0
  local.set $3
  local.get $3
  i32.const 0
  call $~lib/rt/tlsf/Root#set:flMap
  local.get $3
  local.set $5
  i32.const 0
  local.set $4
  local.get $5
  local.get $4
  i32.store offset=1568
  i32.const 0
  local.set $5
  loop $for-loop|0
   local.get $5
   i32.const 23
   i32.lt_u
   local.set $4
   local.get $4
   if
    local.get $3
    local.set $8
    local.get $5
    local.set $7
    i32.const 0
    local.set $6
    local.get $8
    local.get $7
    i32.const 2
    i32.shl
    i32.add
    local.get $6
    i32.store offset=4
    i32.const 0
    local.set $8
    loop $for-loop|1
     local.get $8
     i32.const 16
     i32.lt_u
     local.set $7
     local.get $7
     if
      local.get $3
      local.set $11
      local.get $5
      local.set $10
      local.get $8
      local.set $9
      i32.const 0
      local.set $6
      local.get $11
      local.get $10
      i32.const 4
      i32.shl
      local.get $9
      i32.add
      i32.const 2
      i32.shl
      i32.add
      local.get $6
      i32.store offset=96
      local.get $8
      i32.const 1
      i32.add
      local.set $8
      br $for-loop|1
     end
    end
    local.get $5
    i32.const 1
    i32.add
    local.set $5
    br $for-loop|0
   end
  end
  local.get $0
  i32.const 1572
  i32.add
  local.set $12
  i32.const 0
  drop
  local.get $3
  local.get $12
  memory.size
  i32.const 16
  i32.shl
  call $~lib/rt/tlsf/addMemory
  drop
  local.get $3
  global.set $~lib/rt/tlsf/ROOT
 )
 (func $~lib/rt/tlsf/checkUsedBlock (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 4
  i32.sub
  local.set $1
  local.get $0
  i32.const 0
  i32.ne
  if (result i32)
   local.get $0
   i32.const 15
   i32.and
   i32.eqz
  else
   i32.const 0
  end
  if (result i32)
   local.get $1
   i32.load
   i32.const 1
   i32.and
   i32.eqz
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 368
   i32.const 559
   i32.const 3
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
 )
 (func $~lib/rt/tlsf/freeBlock (param $0 i32) (param $1 i32)
  i32.const 0
  drop
  local.get $1
  local.get $1
  i32.load
  i32.const 1
  i32.or
  call $~lib/rt/common/BLOCK#set:mmInfo
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/__free (param $0 i32)
  local.get $0
  global.get $~lib/memory/__heap_base
  i32.lt_u
  if
   return
  end
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.get $0
  call $~lib/rt/tlsf/checkUsedBlock
  call $~lib/rt/tlsf/freeBlock
 )
 (func $~lib/rt/itcms/free (param $0 i32)
  local.get $0
  global.get $~lib/memory/__heap_base
  i32.lt_u
  if
   local.get $0
   i32.const 0
   call $~lib/rt/itcms/Object#set:nextWithColor
   local.get $0
   i32.const 0
   call $~lib/rt/itcms/Object#set:prev
  else
   global.get $~lib/rt/itcms/total
   local.get $0
   call $~lib/rt/itcms/Object#get:size
   i32.sub
   global.set $~lib/rt/itcms/total
   i32.const 0
   drop
   local.get $0
   i32.const 4
   i32.add
   call $~lib/rt/tlsf/__free
  end
 )
 (func $~lib/rt/itcms/step (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  block $break|0
   block $case2|0
    block $case1|0
     block $case0|0
      global.get $~lib/rt/itcms/state
      local.set $1
      local.get $1
      i32.const 0
      i32.eq
      br_if $case0|0
      local.get $1
      i32.const 1
      i32.eq
      br_if $case1|0
      local.get $1
      i32.const 2
      i32.eq
      br_if $case2|0
      br $break|0
     end
     i32.const 1
     global.set $~lib/rt/itcms/state
     i32.const 0
     global.set $~lib/rt/itcms/visitCount
     i32.const 0
     call $~lib/rt/itcms/visitRoots
     global.get $~lib/rt/itcms/toSpace
     global.set $~lib/rt/itcms/iter
     global.get $~lib/rt/itcms/visitCount
     i32.const 1
     i32.mul
     return
    end
    global.get $~lib/rt/itcms/white
    i32.eqz
    local.set $1
    global.get $~lib/rt/itcms/iter
    call $~lib/rt/itcms/Object#get:next
    local.set $0
    loop $while-continue|1
     local.get $0
     global.get $~lib/rt/itcms/toSpace
     i32.ne
     local.set $2
     local.get $2
     if
      local.get $0
      global.set $~lib/rt/itcms/iter
      local.get $0
      call $~lib/rt/itcms/Object#get:color
      local.get $1
      i32.ne
      if
       local.get $0
       local.get $1
       call $~lib/rt/itcms/Object#set:color
       i32.const 0
       global.set $~lib/rt/itcms/visitCount
       local.get $0
       i32.const 20
       i32.add
       i32.const 0
       call $~lib/rt/__visit_members
       global.get $~lib/rt/itcms/visitCount
       i32.const 1
       i32.mul
       return
      end
      local.get $0
      call $~lib/rt/itcms/Object#get:next
      local.set $0
      br $while-continue|1
     end
    end
    i32.const 0
    global.set $~lib/rt/itcms/visitCount
    i32.const 0
    call $~lib/rt/itcms/visitRoots
    global.get $~lib/rt/itcms/iter
    call $~lib/rt/itcms/Object#get:next
    local.set $0
    local.get $0
    global.get $~lib/rt/itcms/toSpace
    i32.eq
    if
     i32.const 0
     call $~lib/rt/itcms/visitStack
     global.get $~lib/rt/itcms/iter
     call $~lib/rt/itcms/Object#get:next
     local.set $0
     loop $while-continue|2
      local.get $0
      global.get $~lib/rt/itcms/toSpace
      i32.ne
      local.set $2
      local.get $2
      if
       local.get $0
       call $~lib/rt/itcms/Object#get:color
       local.get $1
       i32.ne
       if
        local.get $0
        local.get $1
        call $~lib/rt/itcms/Object#set:color
        local.get $0
        i32.const 20
        i32.add
        i32.const 0
        call $~lib/rt/__visit_members
       end
       local.get $0
       call $~lib/rt/itcms/Object#get:next
       local.set $0
       br $while-continue|2
      end
     end
     global.get $~lib/rt/itcms/fromSpace
     local.set $2
     global.get $~lib/rt/itcms/toSpace
     global.set $~lib/rt/itcms/fromSpace
     local.get $2
     global.set $~lib/rt/itcms/toSpace
     local.get $1
     global.set $~lib/rt/itcms/white
     local.get $2
     call $~lib/rt/itcms/Object#get:next
     global.set $~lib/rt/itcms/iter
     i32.const 2
     global.set $~lib/rt/itcms/state
    end
    global.get $~lib/rt/itcms/visitCount
    i32.const 1
    i32.mul
    return
   end
   global.get $~lib/rt/itcms/iter
   local.set $0
   local.get $0
   global.get $~lib/rt/itcms/toSpace
   i32.ne
   if
    local.get $0
    call $~lib/rt/itcms/Object#get:next
    global.set $~lib/rt/itcms/iter
    i32.const 1
    drop
    local.get $0
    call $~lib/rt/itcms/Object#get:color
    global.get $~lib/rt/itcms/white
    i32.eqz
    i32.eq
    i32.eqz
    if
     i32.const 0
     i32.const 96
     i32.const 228
     i32.const 20
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    call $~lib/rt/itcms/free
    i32.const 10
    return
   end
   global.get $~lib/rt/itcms/toSpace
   global.get $~lib/rt/itcms/toSpace
   call $~lib/rt/itcms/Object#set:nextWithColor
   global.get $~lib/rt/itcms/toSpace
   global.get $~lib/rt/itcms/toSpace
   call $~lib/rt/itcms/Object#set:prev
   i32.const 0
   global.set $~lib/rt/itcms/state
   br $break|0
  end
  i32.const 0
 )
 (func $~lib/rt/itcms/interrupt
  (local $0 i32)
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1024
  i32.const 200
  i32.mul
  i32.const 100
  i32.div_u
  local.set $0
  loop $do-loop|0
   local.get $0
   call $~lib/rt/itcms/step
   i32.sub
   local.set $0
   global.get $~lib/rt/itcms/state
   i32.const 0
   i32.eq
   if
    i32.const 0
    drop
    global.get $~lib/rt/itcms/total
    i64.extend_i32_u
    i32.const 200
    i64.extend_i32_u
    i64.mul
    i64.const 100
    i64.div_u
    i32.wrap_i64
    i32.const 1024
    i32.add
    global.set $~lib/rt/itcms/threshold
    i32.const 0
    drop
    return
   end
   local.get $0
   i32.const 0
   i32.gt_s
   br_if $do-loop|0
  end
  i32.const 0
  drop
  global.get $~lib/rt/itcms/total
  i32.const 1024
  global.get $~lib/rt/itcms/total
  global.get $~lib/rt/itcms/threshold
  i32.sub
  i32.const 1024
  i32.lt_u
  i32.mul
  i32.add
  global.set $~lib/rt/itcms/threshold
  i32.const 0
  drop
 )
 (func $~lib/rt/tlsf/computeSize (param $0 i32) (result i32)
  local.get $0
  i32.const 12
  i32.le_u
  if (result i32)
   i32.const 12
  else
   local.get $0
   i32.const 4
   i32.add
   i32.const 15
   i32.add
   i32.const 15
   i32.const -1
   i32.xor
   i32.and
   i32.const 4
   i32.sub
  end
 )
 (func $~lib/rt/tlsf/prepareSize (param $0 i32) (result i32)
  local.get $0
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 32
   i32.const 368
   i32.const 458
   i32.const 29
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  call $~lib/rt/tlsf/computeSize
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if
   i32.const 0
   local.set $2
   local.get $1
   i32.const 4
   i32.shr_u
   local.set $3
  else
   local.get $1
   i32.const 536870910
   i32.lt_u
   if (result i32)
    local.get $1
    i32.const 1
    i32.const 27
    local.get $1
    i32.clz
    i32.sub
    i32.shl
    i32.add
    i32.const 1
    i32.sub
   else
    local.get $1
   end
   local.set $4
   i32.const 31
   local.get $4
   i32.clz
   i32.sub
   local.set $2
   local.get $4
   local.get $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 1
   i32.const 4
   i32.shl
   i32.xor
   local.set $3
   local.get $2
   i32.const 8
   i32.const 1
   i32.sub
   i32.sub
   local.set $2
  end
  i32.const 1
  drop
  local.get $2
  i32.const 23
  i32.lt_u
  if (result i32)
   local.get $3
   i32.const 16
   i32.lt_u
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 368
   i32.const 330
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.set $5
  local.get $2
  local.set $4
  local.get $5
  local.get $4
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
  i32.const 0
  i32.const -1
  i32.xor
  local.get $3
  i32.shl
  i32.and
  local.set $6
  i32.const 0
  local.set $7
  local.get $6
  i32.eqz
  if
   local.get $0
   i32.load
   i32.const 0
   i32.const -1
   i32.xor
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.set $5
   local.get $5
   i32.eqz
   if
    i32.const 0
    local.set $7
   else
    local.get $5
    i32.ctz
    local.set $2
    local.get $0
    local.set $8
    local.get $2
    local.set $4
    local.get $8
    local.get $4
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    local.set $6
    i32.const 1
    drop
    local.get $6
    i32.eqz
    if
     i32.const 0
     i32.const 368
     i32.const 343
     i32.const 18
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    local.set $9
    local.get $2
    local.set $8
    local.get $6
    i32.ctz
    local.set $4
    local.get $9
    local.get $8
    i32.const 4
    i32.shl
    local.get $4
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
    local.set $7
   end
  else
   local.get $0
   local.set $9
   local.get $2
   local.set $8
   local.get $6
   i32.ctz
   local.set $4
   local.get $9
   local.get $8
   i32.const 4
   i32.shl
   local.get $4
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=96
   local.set $7
  end
  local.get $7
 )
 (func $~lib/rt/tlsf/growMemory (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  i32.const 0
  drop
  local.get $1
  i32.const 536870910
  i32.lt_u
  if
   local.get $1
   i32.const 1
   i32.const 27
   local.get $1
   i32.clz
   i32.sub
   i32.shl
   i32.const 1
   i32.sub
   i32.add
   local.set $1
  end
  memory.size
  local.set $2
  local.get $1
  i32.const 4
  local.get $2
  i32.const 16
  i32.shl
  i32.const 4
  i32.sub
  local.get $0
  local.set $3
  local.get $3
  i32.load offset=1568
  i32.ne
  i32.shl
  i32.add
  local.set $1
  local.get $1
  i32.const 65535
  i32.add
  i32.const 65535
  i32.const -1
  i32.xor
  i32.and
  i32.const 16
  i32.shr_u
  local.set $4
  local.get $2
  local.tee $3
  local.get $4
  local.tee $5
  local.get $3
  local.get $5
  i32.gt_s
  select
  local.set $6
  local.get $6
  memory.grow
  i32.const 0
  i32.lt_s
  if
   local.get $4
   memory.grow
   i32.const 0
   i32.lt_s
   if
    unreachable
   end
  end
  memory.size
  local.set $7
  local.get $0
  local.get $2
  i32.const 16
  i32.shl
  local.get $7
  i32.const 16
  i32.shl
  call $~lib/rt/tlsf/addMemory
  drop
 )
 (func $~lib/rt/tlsf/prepareBlock (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.load
  local.set $3
  i32.const 1
  drop
  local.get $2
  i32.const 4
  i32.add
  i32.const 15
  i32.and
  i32.eqz
  i32.eqz
  if
   i32.const 0
   i32.const 368
   i32.const 357
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.get $2
  i32.sub
  local.set $4
  local.get $4
  i32.const 4
  i32.const 12
  i32.add
  i32.ge_u
  if
   local.get $1
   local.get $2
   local.get $3
   i32.const 2
   i32.and
   i32.or
   call $~lib/rt/common/BLOCK#set:mmInfo
   local.get $1
   i32.const 4
   i32.add
   local.get $2
   i32.add
   local.set $5
   local.get $5
   local.get $4
   i32.const 4
   i32.sub
   i32.const 1
   i32.or
   call $~lib/rt/common/BLOCK#set:mmInfo
   local.get $0
   local.get $5
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $1
   local.get $3
   i32.const 1
   i32.const -1
   i32.xor
   i32.and
   call $~lib/rt/common/BLOCK#set:mmInfo
   local.get $1
   local.set $5
   local.get $5
   i32.const 4
   i32.add
   local.get $5
   i32.load
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.get $1
   local.set $5
   local.get $5
   i32.const 4
   i32.add
   local.get $5
   i32.load
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   i32.load
   i32.const 2
   i32.const -1
   i32.xor
   i32.and
   call $~lib/rt/common/BLOCK#set:mmInfo
  end
 )
 (func $~lib/rt/tlsf/allocateBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/tlsf/prepareSize
  local.set $2
  local.get $0
  local.get $2
  call $~lib/rt/tlsf/searchBlock
  local.set $3
  local.get $3
  i32.eqz
  if
   local.get $0
   local.get $2
   call $~lib/rt/tlsf/growMemory
   local.get $0
   local.get $2
   call $~lib/rt/tlsf/searchBlock
   local.set $3
   i32.const 1
   drop
   local.get $3
   i32.eqz
   if
    i32.const 0
    i32.const 368
    i32.const 496
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
  end
  i32.const 1
  drop
  local.get $3
  i32.load
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.get $2
  i32.ge_u
  i32.eqz
  if
   i32.const 0
   i32.const 368
   i32.const 498
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $3
  call $~lib/rt/tlsf/removeBlock
  local.get $0
  local.get $3
  local.get $2
  call $~lib/rt/tlsf/prepareBlock
  i32.const 0
  drop
  local.get $3
 )
 (func $~lib/rt/tlsf/__alloc (param $0 i32) (result i32)
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.get $0
  call $~lib/rt/tlsf/allocateBlock
  i32.const 4
  i32.add
 )
 (func $~lib/rt/itcms/Object#set:rtId (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/rt/itcms/Object#set:rtSize (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
 )
 (func $~lib/rt/itcms/__new (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.const 1073741804
  i32.ge_u
  if
   i32.const 32
   i32.const 96
   i32.const 260
   i32.const 31
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/total
  global.get $~lib/rt/itcms/threshold
  i32.ge_u
  if
   call $~lib/rt/itcms/interrupt
  end
  i32.const 16
  local.get $0
  i32.add
  call $~lib/rt/tlsf/__alloc
  i32.const 4
  i32.sub
  local.set $2
  local.get $2
  local.get $1
  call $~lib/rt/itcms/Object#set:rtId
  local.get $2
  local.get $0
  call $~lib/rt/itcms/Object#set:rtSize
  local.get $2
  global.get $~lib/rt/itcms/fromSpace
  global.get $~lib/rt/itcms/white
  call $~lib/rt/itcms/Object#linkTo
  global.get $~lib/rt/itcms/total
  local.get $2
  call $~lib/rt/itcms/Object#get:size
  i32.add
  global.set $~lib/rt/itcms/total
  local.get $2
  i32.const 20
  i32.add
  local.set $3
  local.get $3
  i32.const 0
  local.get $0
  memory.fill
  local.get $3
 )
 (func $~lib/rt/itcms/__link (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.eqz
  if
   return
  end
  i32.const 1
  drop
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 96
   i32.const 294
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 20
  i32.sub
  local.set $3
  local.get $3
  call $~lib/rt/itcms/Object#get:color
  global.get $~lib/rt/itcms/white
  i32.eq
  if
   local.get $0
   i32.const 20
   i32.sub
   local.set $4
   local.get $4
   call $~lib/rt/itcms/Object#get:color
   local.set $5
   local.get $5
   global.get $~lib/rt/itcms/white
   i32.eqz
   i32.eq
   if
    local.get $2
    if
     local.get $4
     call $~lib/rt/itcms/Object#makeGray
    else
     local.get $3
     call $~lib/rt/itcms/Object#makeGray
    end
   else
    local.get $5
    i32.const 3
    i32.eq
    if (result i32)
     global.get $~lib/rt/itcms/state
     i32.const 1
     i32.eq
    else
     i32.const 0
    end
    if
     local.get $3
     call $~lib/rt/itcms/Object#makeGray
    end
   end
  end
 )
 (func $~lib/map/Map<~lib/string/String,u32>#set:buckets (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/map/Map<~lib/string/String,u32>#set:bucketsMask (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/map/Map<~lib/string/String,u32>#set:entries (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/map/Map<~lib/string/String,u32>#set:entriesCapacity (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/map/Map<~lib/string/String,u32>#set:entriesOffset (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
 )
 (func $~lib/map/Map<~lib/string/String,u32>#set:entriesCount (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=20
 )
 (func $~lib/map/Map<~lib/string/String,u64>#set:buckets (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/map/Map<~lib/string/String,u64>#set:bucketsMask (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/map/Map<~lib/string/String,u64>#set:entries (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/map/Map<~lib/string/String,u64>#set:entriesCapacity (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/map/Map<~lib/string/String,u64>#set:entriesOffset (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
 )
 (func $~lib/map/Map<~lib/string/String,u64>#set:entriesCount (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=20
 )
 (func $start:~lib/as-console/assembly/index
  memory.size
  i32.const 16
  i32.shl
  global.get $~lib/memory/__heap_base
  i32.sub
  i32.const 1
  i32.shr_u
  global.set $~lib/rt/itcms/threshold
  i32.const 144
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/pinSpace
  i32.const 176
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/toSpace
  i32.const 320
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/fromSpace
  i32.const 0
  call $~lib/map/Map<~lib/string/String,u32>#constructor
  global.set $~lib/as-console/assembly/index/counts
  i32.const 0
  call $~lib/map/Map<~lib/string/String,u64>#constructor
  global.set $~lib/as-console/assembly/index/timers
 )
 (func $~lib/string/String#get:length (param $0 i32) (result i32)
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
 )
 (func $~lib/string/String#charCodeAt (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  call $~lib/string/String#get:length
  i32.ge_u
  if
   i32.const -1
   return
  end
  local.get $0
  local.get $1
  i32.const 1
  i32.shl
  i32.add
  i32.load16_u
 )
 (func $start:assembly/index
  call $start:~lib/as-console/assembly/index
  call $start:assembly/chars
 )
 (func $~lib/util/number/decimalCount32 (param $0 i32) (result i32)
  local.get $0
  i32.const 100000
  i32.lt_u
  if
   local.get $0
   i32.const 100
   i32.lt_u
   if
    i32.const 1
    local.get $0
    i32.const 10
    i32.ge_u
    i32.add
    return
   else
    i32.const 3
    local.get $0
    i32.const 10000
    i32.ge_u
    i32.add
    local.get $0
    i32.const 1000
    i32.ge_u
    i32.add
    return
   end
   unreachable
  else
   local.get $0
   i32.const 10000000
   i32.lt_u
   if
    i32.const 6
    local.get $0
    i32.const 1000000
    i32.ge_u
    i32.add
    return
   else
    i32.const 8
    local.get $0
    i32.const 1000000000
    i32.ge_u
    i32.add
    local.get $0
    i32.const 100000000
    i32.ge_u
    i32.add
    return
   end
   unreachable
  end
  unreachable
 )
 (func $~lib/util/number/utoa32_dec_lut (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i64)
  (local $9 i64)
  (local $10 i32)
  (local $11 i32)
  loop $while-continue|0
   local.get $1
   i32.const 10000
   i32.ge_u
   local.set $3
   local.get $3
   if
    local.get $1
    i32.const 10000
    i32.div_u
    local.set $4
    local.get $1
    i32.const 10000
    i32.rem_u
    local.set $5
    local.get $4
    local.set $1
    local.get $5
    i32.const 100
    i32.div_u
    local.set $6
    local.get $5
    i32.const 100
    i32.rem_u
    local.set $7
    i32.const 1436
    local.get $6
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $8
    i32.const 1436
    local.get $7
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $9
    local.get $2
    i32.const 4
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    local.get $8
    local.get $9
    i64.const 32
    i64.shl
    i64.or
    i64.store
    br $while-continue|0
   end
  end
  local.get $1
  i32.const 100
  i32.ge_u
  if
   local.get $1
   i32.const 100
   i32.div_u
   local.set $3
   local.get $1
   i32.const 100
   i32.rem_u
   local.set $10
   local.get $3
   local.set $1
   local.get $2
   i32.const 2
   i32.sub
   local.set $2
   i32.const 1436
   local.get $10
   i32.const 2
   i32.shl
   i32.add
   i32.load
   local.set $11
   local.get $0
   local.get $2
   i32.const 1
   i32.shl
   i32.add
   local.get $11
   i32.store
  end
  local.get $1
  i32.const 10
  i32.ge_u
  if
   local.get $2
   i32.const 2
   i32.sub
   local.set $2
   i32.const 1436
   local.get $1
   i32.const 2
   i32.shl
   i32.add
   i32.load
   local.set $11
   local.get $0
   local.get $2
   i32.const 1
   i32.shl
   i32.add
   local.get $11
   i32.store
  else
   local.get $2
   i32.const 1
   i32.sub
   local.set $2
   i32.const 48
   local.get $1
   i32.add
   local.set $11
   local.get $0
   local.get $2
   i32.const 1
   i32.shl
   i32.add
   local.get $11
   i32.store16
  end
 )
 (func $~lib/util/number/utoa_hex_lut (param $0 i32) (param $1 i64) (param $2 i32)
  (local $3 i32)
  loop $while-continue|0
   local.get $2
   i32.const 2
   i32.ge_u
   local.set $3
   local.get $3
   if
    local.get $2
    i32.const 2
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    i32.const 1856
    local.get $1
    i32.wrap_i64
    i32.const 255
    i32.and
    i32.const 2
    i32.shl
    i32.add
    i32.load
    i32.store
    local.get $1
    i64.const 8
    i64.shr_u
    local.set $1
    br $while-continue|0
   end
  end
  local.get $2
  i32.const 1
  i32.and
  if
   local.get $0
   i32.const 1856
   local.get $1
   i32.wrap_i64
   i32.const 6
   i32.shl
   i32.add
   i32.load16_u
   i32.store16
  end
 )
 (func $~lib/util/number/ulog_base (param $0 i64) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i64)
  (local $4 i64)
  (local $5 i32)
  local.get $1
  local.set $2
  local.get $2
  i32.popcnt
  i32.const 1
  i32.eq
  if
   i32.const 63
   local.get $0
   i64.clz
   i32.wrap_i64
   i32.sub
   i32.const 31
   local.get $1
   i32.clz
   i32.sub
   i32.div_u
   i32.const 1
   i32.add
   return
  end
  local.get $1
  i64.extend_i32_s
  local.set $3
  local.get $3
  local.set $4
  i32.const 1
  local.set $5
  loop $while-continue|0
   local.get $0
   local.get $4
   i64.ge_u
   local.set $2
   local.get $2
   if
    local.get $0
    local.get $4
    i64.div_u
    local.set $0
    local.get $4
    local.get $4
    i64.mul
    local.set $4
    local.get $5
    i32.const 1
    i32.shl
    local.set $5
    br $while-continue|0
   end
  end
  loop $while-continue|1
   local.get $0
   i64.const 1
   i64.ge_u
   local.set $2
   local.get $2
   if
    local.get $0
    local.get $3
    i64.div_u
    local.set $0
    local.get $5
    i32.const 1
    i32.add
    local.set $5
    br $while-continue|1
   end
  end
  local.get $5
  i32.const 1
  i32.sub
 )
 (func $~lib/util/number/utoa64_any_core (param $0 i32) (param $1 i64) (param $2 i32) (param $3 i32)
  (local $4 i64)
  (local $5 i64)
  (local $6 i64)
  local.get $3
  i64.extend_i32_s
  local.set $4
  local.get $3
  local.get $3
  i32.const 1
  i32.sub
  i32.and
  i32.const 0
  i32.eq
  if
   local.get $3
   i32.ctz
   i32.const 7
   i32.and
   i64.extend_i32_s
   local.set $5
   local.get $4
   i64.const 1
   i64.sub
   local.set $6
   loop $do-loop|0
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    i32.const 2912
    local.get $1
    local.get $6
    i64.and
    i32.wrap_i64
    i32.const 1
    i32.shl
    i32.add
    i32.load16_u
    i32.store16
    local.get $1
    local.get $5
    i64.shr_u
    local.set $1
    local.get $1
    i64.const 0
    i64.ne
    br_if $do-loop|0
   end
  else
   loop $do-loop|1
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    local.get $1
    local.get $4
    i64.div_u
    local.set $6
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    i32.const 2912
    local.get $1
    local.get $6
    local.get $4
    i64.mul
    i64.sub
    i32.wrap_i64
    i32.const 1
    i32.shl
    i32.add
    i32.load16_u
    i32.store16
    local.get $6
    local.set $1
    local.get $1
    i64.const 0
    i64.ne
    br_if $do-loop|1
   end
  end
 )
 (func $~lib/number/I32#toString (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  call $~lib/util/number/itoa32
 )
 (func $assembly/index/JSON.stringify<i32> (param $0 i32) (result i32)
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  local.get $0
  i32.const 10
  call $~lib/number/I32#toString
  return
 )
 (func $~lib/util/string/isSpace (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 5760
  i32.lt_u
  if
   local.get $0
   i32.const 128
   i32.or
   i32.const 160
   i32.eq
   if (result i32)
    i32.const 1
   else
    local.get $0
    i32.const 9
    i32.sub
    i32.const 13
    i32.const 9
    i32.sub
    i32.le_u
   end
   return
  end
  local.get $0
  i32.const 8192
  i32.sub
  i32.const 8202
  i32.const 8192
  i32.sub
  i32.le_u
  if
   i32.const 1
   return
  end
  block $break|0
   block $case6|0
    block $case5|0
     block $case4|0
      block $case3|0
       block $case2|0
        block $case1|0
         block $case0|0
          local.get $0
          local.set $1
          local.get $1
          i32.const 5760
          i32.eq
          br_if $case0|0
          local.get $1
          i32.const 8232
          i32.eq
          br_if $case1|0
          local.get $1
          i32.const 8233
          i32.eq
          br_if $case2|0
          local.get $1
          i32.const 8239
          i32.eq
          br_if $case3|0
          local.get $1
          i32.const 8287
          i32.eq
          br_if $case4|0
          local.get $1
          i32.const 12288
          i32.eq
          br_if $case5|0
          local.get $1
          i32.const 65279
          i32.eq
          br_if $case6|0
          br $break|0
         end
        end
       end
      end
     end
    end
   end
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/util/string/strtol<i32> (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $0
  call $~lib/string/String#get:length
  local.set $2
  local.get $2
  i32.eqz
  if
   i32.const 0
   drop
   i32.const 0
   return
  end
  local.get $0
  local.set $3
  local.get $3
  i32.load16_u
  local.set $4
  loop $while-continue|0
   local.get $4
   call $~lib/util/string/isSpace
   local.set $5
   local.get $5
   if
    local.get $3
    i32.const 2
    i32.add
    local.tee $3
    i32.load16_u
    local.set $4
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    br $while-continue|0
   end
  end
  i32.const 1
  local.set $6
  local.get $4
  i32.const 45
  i32.eq
  if (result i32)
   i32.const 1
  else
   local.get $4
   i32.const 43
   i32.eq
  end
  if
   local.get $2
   i32.const 1
   i32.sub
   local.tee $2
   i32.eqz
   if
    i32.const 0
    drop
    i32.const 0
    return
   end
   local.get $4
   i32.const 45
   i32.eq
   if
    i32.const -1
    local.set $6
   end
   local.get $3
   i32.const 2
   i32.add
   local.tee $3
   i32.load16_u
   local.set $4
  end
  local.get $1
  if
   local.get $1
   i32.const 2
   i32.lt_s
   if (result i32)
    i32.const 1
   else
    local.get $1
    i32.const 36
    i32.gt_s
   end
   if
    i32.const 0
    drop
    i32.const 0
    return
   end
   local.get $1
   i32.const 16
   i32.eq
   if
    local.get $2
    i32.const 2
    i32.gt_s
    if (result i32)
     local.get $4
     i32.const 48
     i32.eq
    else
     i32.const 0
    end
    if (result i32)
     local.get $3
     i32.load16_u offset=2
     i32.const 32
     i32.or
     i32.const 120
     i32.eq
    else
     i32.const 0
    end
    if
     local.get $3
     i32.const 4
     i32.add
     local.set $3
     local.get $2
     i32.const 2
     i32.sub
     local.set $2
    end
   end
  else
   local.get $4
   i32.const 48
   i32.eq
   if (result i32)
    local.get $2
    i32.const 2
    i32.gt_s
   else
    i32.const 0
   end
   if
    block $break|1
     block $case2|1
      block $case1|1
       block $case0|1
        local.get $3
        i32.load16_u offset=2
        i32.const 32
        i32.or
        local.set $5
        local.get $5
        i32.const 98
        i32.eq
        br_if $case0|1
        local.get $5
        i32.const 111
        i32.eq
        br_if $case1|1
        local.get $5
        i32.const 120
        i32.eq
        br_if $case2|1
        br $break|1
       end
       local.get $3
       i32.const 4
       i32.add
       local.set $3
       local.get $2
       i32.const 2
       i32.sub
       local.set $2
       i32.const 2
       local.set $1
       br $break|1
      end
      local.get $3
      i32.const 4
      i32.add
      local.set $3
      local.get $2
      i32.const 2
      i32.sub
      local.set $2
      i32.const 8
      local.set $1
      br $break|1
     end
     local.get $3
     i32.const 4
     i32.add
     local.set $3
     local.get $2
     i32.const 2
     i32.sub
     local.set $2
     i32.const 16
     local.set $1
     br $break|1
    end
   end
   local.get $1
   i32.eqz
   if
    i32.const 10
    local.set $1
   end
  end
  i32.const 0
  local.set $7
  local.get $2
  i32.const 1
  i32.sub
  local.set $8
  block $while-break|2
   loop $while-continue|2
    local.get $2
    local.tee $5
    i32.const 1
    i32.sub
    local.set $2
    local.get $5
    local.set $5
    local.get $5
    if
     local.get $3
     i32.load16_u
     local.set $4
     local.get $4
     i32.const 48
     i32.sub
     i32.const 10
     i32.lt_u
     if
      local.get $4
      i32.const 48
      i32.sub
      local.set $4
     else
      local.get $4
      i32.const 65
      i32.sub
      i32.const 90
      i32.const 65
      i32.sub
      i32.le_u
      if
       local.get $4
       i32.const 65
       i32.const 10
       i32.sub
       i32.sub
       local.set $4
      else
       local.get $4
       i32.const 97
       i32.sub
       i32.const 122
       i32.const 97
       i32.sub
       i32.le_u
       if
        local.get $4
        i32.const 97
        i32.const 10
        i32.sub
        i32.sub
        local.set $4
       end
      end
     end
     local.get $4
     local.get $1
     i32.ge_u
     if
      local.get $8
      local.get $2
      i32.eq
      if
       i32.const 0
       drop
       i32.const 0
       return
      end
      br $while-break|2
     end
     local.get $7
     local.get $1
     i32.mul
     local.get $4
     i32.add
     local.set $7
     local.get $3
     i32.const 2
     i32.add
     local.set $3
     br $while-continue|2
    end
   end
  end
  local.get $6
  local.get $7
  i32.mul
 )
 (func $~lib/number/I32.parseInt (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  call $~lib/util/string/strtol<i32>
 )
 (func $assembly/index/JSON.parse<i32> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  block $assembly/index/parseNumber<i32>|inlined.0 (result i32)
   local.get $0
   local.set $2
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 1
   drop
   local.get $2
   i32.const 0
   call $~lib/number/I32.parseInt
   br $assembly/index/parseNumber<i32>|inlined.0
  end
  return
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#set:actual (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#set:_not (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/string/String> (param $0 i32) (result i32)
  i32.const 0
  local.get $0
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#constructor
 )
 (func $~lib/util/string/compareImpl (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  local.get $0
  local.get $1
  i32.const 1
  i32.shl
  i32.add
  local.set $5
  local.get $2
  local.get $3
  i32.const 1
  i32.shl
  i32.add
  local.set $6
  i32.const 0
  i32.const 2
  i32.lt_s
  drop
  local.get $4
  i32.const 4
  i32.ge_u
  if (result i32)
   local.get $5
   i32.const 7
   i32.and
   local.get $6
   i32.const 7
   i32.and
   i32.or
   i32.eqz
  else
   i32.const 0
  end
  if
   block $do-break|0
    loop $do-loop|0
     local.get $5
     i64.load
     local.get $6
     i64.load
     i64.ne
     if
      br $do-break|0
     end
     local.get $5
     i32.const 8
     i32.add
     local.set $5
     local.get $6
     i32.const 8
     i32.add
     local.set $6
     local.get $4
     i32.const 4
     i32.sub
     local.set $4
     local.get $4
     i32.const 4
     i32.ge_u
     br_if $do-loop|0
    end
   end
  end
  loop $while-continue|1
   local.get $4
   local.tee $7
   i32.const 1
   i32.sub
   local.set $4
   local.get $7
   local.set $7
   local.get $7
   if
    local.get $5
    i32.load16_u
    local.set $8
    local.get $6
    i32.load16_u
    local.set $9
    local.get $8
    local.get $9
    i32.ne
    if
     local.get $8
     local.get $9
     i32.sub
     return
    end
    local.get $5
    i32.const 2
    i32.add
    local.set $5
    local.get $6
    i32.const 2
    i32.add
    local.set $6
    br $while-continue|1
   end
  end
  i32.const 0
 )
 (func $~lib/string/String.__eq (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  local.get $1
  i32.eq
  if
   i32.const 1
   return
  end
  local.get $0
  i32.const 0
  i32.eq
  if (result i32)
   i32.const 1
  else
   local.get $1
   i32.const 0
   i32.eq
  end
  if
   i32.const 0
   return
  end
  local.get $0
  call $~lib/string/String#get:length
  local.set $2
  local.get $2
  local.get $1
  call $~lib/string/String#get:length
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.const 0
  local.get $1
  i32.const 0
  local.get $2
  call $~lib/util/string/compareImpl
  i32.eqz
 )
 (func $~lib/util/hash/HASH<usize> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 4
  i32.const 4
  i32.le_u
  drop
  local.get $0
  local.set $2
  i32.const 4
  local.set $1
  i32.const 0
  i32.const 374761393
  i32.add
  local.get $1
  i32.add
  local.set $3
  local.get $3
  local.get $2
  i32.const -1028477379
  i32.mul
  i32.add
  local.set $3
  local.get $3
  i32.const 17
  i32.rotl
  i32.const 668265263
  i32.mul
  local.set $3
  local.get $3
  local.get $3
  i32.const 15
  i32.shr_u
  i32.xor
  local.set $3
  local.get $3
  i32.const -2048144777
  i32.mul
  local.set $3
  local.get $3
  local.get $3
  i32.const 13
  i32.shr_u
  i32.xor
  local.set $3
  local.get $3
  i32.const -1028477379
  i32.mul
  local.set $3
  local.get $3
  local.get $3
  i32.const 16
  i32.shr_u
  i32.xor
  local.set $3
  local.get $3
  return
 )
 (func $~lib/map/Map<usize,i32>#find (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  i32.load
  local.get $2
  local.get $0
  i32.load offset=4
  i32.and
  i32.const 4
  i32.mul
  i32.add
  i32.load
  local.set $3
  loop $while-continue|0
   local.get $3
   local.set $4
   local.get $4
   if
    local.get $3
    i32.load offset=8
    local.set $5
    local.get $5
    i32.const 1
    i32.and
    i32.eqz
    if (result i32)
     local.get $3
     i32.load
     local.get $1
     i32.eq
    else
     i32.const 0
    end
    if
     local.get $3
     return
    end
    local.get $5
    i32.const 1
    i32.const -1
    i32.xor
    i32.and
    local.set $3
    br $while-continue|0
   end
  end
  i32.const 0
 )
 (func $~lib/map/Map<usize,i32>#has (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  local.get $1
  call $~lib/util/hash/HASH<usize>
  call $~lib/map/Map<usize,i32>#find
  i32.const 0
  i32.ne
 )
 (func $~lib/map/Map<usize,i32>#get (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  local.get $1
  local.get $1
  call $~lib/util/hash/HASH<usize>
  call $~lib/map/Map<usize,i32>#find
  local.set $2
  local.get $2
  i32.eqz
  if
   i32.const 3040
   i32.const 3104
   i32.const 105
   i32.const 17
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.load offset=4
 )
 (func $~lib/map/MapEntry<usize,i32>#set:value (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/map/MapEntry<usize,i32>#set:key (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $~lib/map/MapEntry<usize,i32>#set:taggedNext (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/map/Map<usize,i32>#set:buckets (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/map/Map<usize,i32>#set:bucketsMask (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/map/Map<usize,i32>#set:entries (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/map/Map<usize,i32>#set:entriesCapacity (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/map/Map<usize,i32>#set:entriesOffset (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
 )
 (func $~lib/map/Map<usize,i32>#rehash (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $1
  i32.const 1
  i32.add
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  local.get $2
  i32.const 4
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $3
  i32.store
  local.get $2
  i32.const 8
  i32.mul
  i32.const 3
  i32.div_s
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  local.get $4
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $5
  i32.store offset=4
  local.get $0
  i32.load offset=8
  local.set $6
  local.get $6
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  i32.add
  local.set $7
  local.get $5
  local.set $8
  loop $while-continue|0
   local.get $6
   local.get $7
   i32.ne
   local.set $9
   local.get $9
   if
    local.get $6
    local.set $10
    local.get $10
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $8
     local.set $11
     local.get $10
     i32.load
     local.set $12
     local.get $11
     local.get $12
     call $~lib/map/MapEntry<usize,i32>#set:key
     local.get $11
     local.get $10
     i32.load offset=4
     call $~lib/map/MapEntry<usize,i32>#set:value
     local.get $12
     call $~lib/util/hash/HASH<usize>
     local.get $1
     i32.and
     local.set $13
     local.get $3
     local.get $13
     i32.const 4
     i32.mul
     i32.add
     local.set $14
     local.get $11
     local.get $14
     i32.load
     call $~lib/map/MapEntry<usize,i32>#set:taggedNext
     local.get $14
     local.get $8
     i32.store
     local.get $8
     i32.const 12
     i32.add
     local.set $8
    end
    local.get $6
    i32.const 12
    i32.add
    local.set $6
    br $while-continue|0
   end
  end
  local.get $0
  local.get $3
  call $~lib/map/Map<usize,i32>#set:buckets
  local.get $0
  local.get $1
  call $~lib/map/Map<usize,i32>#set:bucketsMask
  local.get $0
  local.get $5
  call $~lib/map/Map<usize,i32>#set:entries
  local.get $0
  local.get $4
  call $~lib/map/Map<usize,i32>#set:entriesCapacity
  local.get $0
  local.get $0
  i32.load offset=20
  call $~lib/map/Map<usize,i32>#set:entriesOffset
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/map/Map<usize,i32>#set:entriesCount (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=20
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.attachStackTrace (param $0 i32)
  local.get $0
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/attachStackTraceToReflectedValue
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Actual/Actual.report<~lib/string/String> (param $0 i32)
  (local $1 i32)
  local.get $0
  i32.const 1
  global.set $~argumentsLength
  i32.const 0
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<~lib/string/String>@varargs
  local.set $1
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.attachStackTrace
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Actual/reportActualReflectedValue
 )
 (func $~lib/array/Array<usize>#get:length (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/assert/assert (param $0 i32) (param $1 i32)
  local.get $0
  i32.eqz
  if
   local.get $1
   i32.const 3232
   i32.const 2
   i32.const 19
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.equals<~lib/string/String> (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  i32.const 1
  drop
  local.get $0
  local.get $1
  i32.eq
  if
   global.get $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.SUCCESSFUL_MATCH
   return
  end
  i32.const 0
  drop
  local.get $0
  local.get $1
  call $~lib/string/String.__eq
  if
   global.get $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.SUCCESSFUL_MATCH
   return
  end
  i32.const 0
  drop
  i32.const 1
  drop
  local.get $0
  i32.const 0
  i32.eq
  local.get $1
  i32.const 0
  i32.eq
  i32.xor
  if
   global.get $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.FAILED_MATCH
   return
  end
  i32.const 1
  drop
  i32.const 0
  i32.eqz
  drop
  i32.const 0
  drop
  local.get $0
  local.get $1
  local.get $2
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/referencesEqual<~lib/string/String>
  return
 )
 (func $~lib/rt/__newBuffer (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  local.get $0
  local.get $1
  call $~lib/rt/itcms/__new
  local.set $3
  local.get $2
  if
   local.get $3
   local.get $2
   local.get $0
   memory.copy
  end
  local.get $3
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Expected/Expected.report<~lib/string/String> (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  i32.const 1
  global.set $~argumentsLength
  i32.const 0
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<~lib/string/String>@varargs
  local.set $2
  local.get $2
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.attachStackTrace
  local.get $2
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Expected/reportExpectedReflectedValue
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Actual/Actual.clear
  call $node_modules/@as-pect/assembly/assembly/internal/Actual/clearActual
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Expected/Expected.clear
  call $node_modules/@as-pect/assembly/assembly/internal/Expected/clearExpected
 )
 (func $~lib/number/U32#toString (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  call $~lib/util/number/utoa32
 )
 (func $assembly/index/JSON.stringify<u32> (param $0 i32) (result i32)
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  local.get $0
  i32.const 10
  call $~lib/number/U32#toString
  return
 )
 (func $~lib/number/U32.parseInt (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  call $~lib/util/string/strtol<i32>
 )
 (func $assembly/index/JSON.parse<u32> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  block $assembly/index/parseNumber<u32>|inlined.0 (result i32)
   local.get $0
   local.set $2
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 1
   drop
   local.get $2
   i32.const 0
   call $~lib/number/U32.parseInt
   br $assembly/index/parseNumber<u32>|inlined.0
  end
  return
 )
 (func $~lib/util/number/decimalCount64High (param $0 i64) (result i32)
  local.get $0
  i64.const 1000000000000000
  i64.lt_u
  if
   local.get $0
   i64.const 1000000000000
   i64.lt_u
   if
    i32.const 10
    local.get $0
    i64.const 100000000000
    i64.ge_u
    i32.add
    local.get $0
    i64.const 10000000000
    i64.ge_u
    i32.add
    return
   else
    i32.const 13
    local.get $0
    i64.const 100000000000000
    i64.ge_u
    i32.add
    local.get $0
    i64.const 10000000000000
    i64.ge_u
    i32.add
    return
   end
   unreachable
  else
   local.get $0
   i64.const 100000000000000000
   i64.lt_u
   if
    i32.const 16
    local.get $0
    i64.const 10000000000000000
    i64.ge_u
    i32.add
    return
   else
    i32.const 18
    local.get $0
    i64.const -8446744073709551616
    i64.ge_u
    i32.add
    local.get $0
    i64.const 1000000000000000000
    i64.ge_u
    i32.add
    return
   end
   unreachable
  end
  unreachable
 )
 (func $~lib/util/number/utoa64_dec_lut (param $0 i32) (param $1 i64) (param $2 i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i64)
  (local $13 i64)
  loop $while-continue|0
   local.get $1
   i64.const 100000000
   i64.ge_u
   local.set $3
   local.get $3
   if
    local.get $1
    i64.const 100000000
    i64.div_u
    local.set $4
    local.get $1
    local.get $4
    i64.const 100000000
    i64.mul
    i64.sub
    i32.wrap_i64
    local.set $5
    local.get $4
    local.set $1
    local.get $5
    i32.const 10000
    i32.div_u
    local.set $6
    local.get $5
    i32.const 10000
    i32.rem_u
    local.set $7
    local.get $6
    i32.const 100
    i32.div_u
    local.set $8
    local.get $6
    i32.const 100
    i32.rem_u
    local.set $9
    local.get $7
    i32.const 100
    i32.div_u
    local.set $10
    local.get $7
    i32.const 100
    i32.rem_u
    local.set $11
    i32.const 1436
    local.get $10
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $12
    i32.const 1436
    local.get $11
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $13
    local.get $2
    i32.const 4
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    local.get $12
    local.get $13
    i64.const 32
    i64.shl
    i64.or
    i64.store
    i32.const 1436
    local.get $8
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $12
    i32.const 1436
    local.get $9
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $13
    local.get $2
    i32.const 4
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    local.get $12
    local.get $13
    i64.const 32
    i64.shl
    i64.or
    i64.store
    br $while-continue|0
   end
  end
  local.get $0
  local.get $1
  i32.wrap_i64
  local.get $2
  call $~lib/util/number/utoa32_dec_lut
 )
 (func $~lib/number/U64#toString (param $0 i64) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  call $~lib/util/number/utoa64
 )
 (func $assembly/index/JSON.stringify<u64> (param $0 i64) (result i32)
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  local.get $0
  i32.const 10
  call $~lib/number/U64#toString
  return
 )
 (func $~lib/util/string/strtol<i64> (param $0 i32) (param $1 i32) (result i64)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i64)
  (local $7 i64)
  (local $8 i32)
  local.get $0
  call $~lib/string/String#get:length
  local.set $2
  local.get $2
  i32.eqz
  if
   i32.const 0
   drop
   i64.const 0
   return
  end
  local.get $0
  local.set $3
  local.get $3
  i32.load16_u
  local.set $4
  loop $while-continue|0
   local.get $4
   call $~lib/util/string/isSpace
   local.set $5
   local.get $5
   if
    local.get $3
    i32.const 2
    i32.add
    local.tee $3
    i32.load16_u
    local.set $4
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    br $while-continue|0
   end
  end
  i64.const 1
  local.set $6
  local.get $4
  i32.const 45
  i32.eq
  if (result i32)
   i32.const 1
  else
   local.get $4
   i32.const 43
   i32.eq
  end
  if
   local.get $2
   i32.const 1
   i32.sub
   local.tee $2
   i32.eqz
   if
    i32.const 0
    drop
    i64.const 0
    return
   end
   local.get $4
   i32.const 45
   i32.eq
   if
    i64.const -1
    local.set $6
   end
   local.get $3
   i32.const 2
   i32.add
   local.tee $3
   i32.load16_u
   local.set $4
  end
  local.get $1
  if
   local.get $1
   i32.const 2
   i32.lt_s
   if (result i32)
    i32.const 1
   else
    local.get $1
    i32.const 36
    i32.gt_s
   end
   if
    i32.const 0
    drop
    i64.const 0
    return
   end
   local.get $1
   i32.const 16
   i32.eq
   if
    local.get $2
    i32.const 2
    i32.gt_s
    if (result i32)
     local.get $4
     i32.const 48
     i32.eq
    else
     i32.const 0
    end
    if (result i32)
     local.get $3
     i32.load16_u offset=2
     i32.const 32
     i32.or
     i32.const 120
     i32.eq
    else
     i32.const 0
    end
    if
     local.get $3
     i32.const 4
     i32.add
     local.set $3
     local.get $2
     i32.const 2
     i32.sub
     local.set $2
    end
   end
  else
   local.get $4
   i32.const 48
   i32.eq
   if (result i32)
    local.get $2
    i32.const 2
    i32.gt_s
   else
    i32.const 0
   end
   if
    block $break|1
     block $case2|1
      block $case1|1
       block $case0|1
        local.get $3
        i32.load16_u offset=2
        i32.const 32
        i32.or
        local.set $5
        local.get $5
        i32.const 98
        i32.eq
        br_if $case0|1
        local.get $5
        i32.const 111
        i32.eq
        br_if $case1|1
        local.get $5
        i32.const 120
        i32.eq
        br_if $case2|1
        br $break|1
       end
       local.get $3
       i32.const 4
       i32.add
       local.set $3
       local.get $2
       i32.const 2
       i32.sub
       local.set $2
       i32.const 2
       local.set $1
       br $break|1
      end
      local.get $3
      i32.const 4
      i32.add
      local.set $3
      local.get $2
      i32.const 2
      i32.sub
      local.set $2
      i32.const 8
      local.set $1
      br $break|1
     end
     local.get $3
     i32.const 4
     i32.add
     local.set $3
     local.get $2
     i32.const 2
     i32.sub
     local.set $2
     i32.const 16
     local.set $1
     br $break|1
    end
   end
   local.get $1
   i32.eqz
   if
    i32.const 10
    local.set $1
   end
  end
  i64.const 0
  local.set $7
  local.get $2
  i32.const 1
  i32.sub
  local.set $8
  block $while-break|2
   loop $while-continue|2
    local.get $2
    local.tee $5
    i32.const 1
    i32.sub
    local.set $2
    local.get $5
    local.set $5
    local.get $5
    if
     local.get $3
     i32.load16_u
     local.set $4
     local.get $4
     i32.const 48
     i32.sub
     i32.const 10
     i32.lt_u
     if
      local.get $4
      i32.const 48
      i32.sub
      local.set $4
     else
      local.get $4
      i32.const 65
      i32.sub
      i32.const 90
      i32.const 65
      i32.sub
      i32.le_u
      if
       local.get $4
       i32.const 65
       i32.const 10
       i32.sub
       i32.sub
       local.set $4
      else
       local.get $4
       i32.const 97
       i32.sub
       i32.const 122
       i32.const 97
       i32.sub
       i32.le_u
       if
        local.get $4
        i32.const 97
        i32.const 10
        i32.sub
        i32.sub
        local.set $4
       end
      end
     end
     local.get $4
     local.get $1
     i32.ge_u
     if
      local.get $8
      local.get $2
      i32.eq
      if
       i32.const 0
       drop
       i64.const 0
       return
      end
      br $while-break|2
     end
     local.get $7
     local.get $1
     i64.extend_i32_s
     i64.mul
     local.get $4
     i64.extend_i32_u
     i64.add
     local.set $7
     local.get $3
     i32.const 2
     i32.add
     local.set $3
     br $while-continue|2
    end
   end
  end
  local.get $6
  local.get $7
  i64.mul
 )
 (func $~lib/number/U64.parseInt (param $0 i32) (param $1 i32) (result i64)
  local.get $0
  local.get $1
  call $~lib/util/string/strtol<i64>
 )
 (func $assembly/index/JSON.parse<u64> (param $0 i32) (result i64)
  (local $1 i64)
  (local $2 i32)
  (local $3 i64)
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  block $assembly/index/parseNumber<u64>|inlined.0 (result i64)
   local.get $0
   local.set $2
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 1
   drop
   local.get $2
   i32.const 0
   call $~lib/number/U64.parseInt
   br $assembly/index/parseNumber<u64>|inlined.0
  end
  return
 )
 (func $~lib/number/I64#toString (param $0 i64) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  call $~lib/util/number/itoa64
 )
 (func $assembly/index/JSON.stringify<i64> (param $0 i64) (result i32)
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  local.get $0
  i32.const 10
  call $~lib/number/I64#toString
  return
 )
 (func $~lib/number/I64.parseInt (param $0 i32) (param $1 i32) (result i64)
  local.get $0
  local.get $1
  call $~lib/util/string/strtol<i64>
 )
 (func $assembly/index/JSON.parse<i64> (param $0 i32) (result i64)
  (local $1 i64)
  (local $2 i32)
  (local $3 i64)
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  block $assembly/index/parseNumber<i64>|inlined.0 (result i64)
   local.get $0
   local.set $2
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 1
   drop
   local.get $2
   i32.const 0
   call $~lib/number/I64.parseInt
   br $assembly/index/parseNumber<i64>|inlined.0
  end
  return
 )
 (func $start:assembly/__tests__/as-json.spec~anonymous|0~anonymous|0
  i32.const 0
  call $assembly/__tests__/as-json.spec/canSerde<i32>
  i32.const 100
  call $assembly/__tests__/as-json.spec/canSerde<u32>
  i64.const 101
  call $assembly/__tests__/as-json.spec/canSerde<u64>
  i32.const -100
  call $assembly/__tests__/as-json.spec/canSerde<i32>
  i64.const -101
  call $assembly/__tests__/as-json.spec/canSerde<i64>
 )
 (func $~lib/util/number/genDigits (param $0 i32) (param $1 i64) (param $2 i32) (param $3 i64) (param $4 i32) (param $5 i64) (param $6 i32) (result i32)
  (local $7 i32)
  (local $8 i64)
  (local $9 i64)
  (local $10 i64)
  (local $11 i32)
  (local $12 i64)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  (local $17 i32)
  (local $18 i64)
  (local $19 i64)
  (local $20 i64)
  (local $21 i64)
  (local $22 i64)
  (local $23 i32)
  (local $24 i32)
  (local $25 i32)
  (local $26 i32)
  (local $27 i64)
  i32.const 0
  local.get $4
  i32.sub
  local.set $7
  i64.const 1
  local.get $7
  i64.extend_i32_s
  i64.shl
  local.set $8
  local.get $8
  i64.const 1
  i64.sub
  local.set $9
  local.get $3
  local.get $1
  i64.sub
  local.set $10
  local.get $3
  local.get $7
  i64.extend_i32_s
  i64.shr_u
  i32.wrap_i64
  local.set $11
  local.get $3
  local.get $9
  i64.and
  local.set $12
  local.get $11
  call $~lib/util/number/decimalCount32
  local.set $13
  local.get $6
  local.set $14
  loop $while-continue|0
   local.get $13
   i32.const 0
   i32.gt_s
   local.set $15
   local.get $15
   if
    block $break|1
     block $case10|1
      block $case9|1
       block $case8|1
        block $case7|1
         block $case6|1
          block $case5|1
           block $case4|1
            block $case3|1
             block $case2|1
              block $case1|1
               block $case0|1
                local.get $13
                local.set $17
                local.get $17
                i32.const 10
                i32.eq
                br_if $case0|1
                local.get $17
                i32.const 9
                i32.eq
                br_if $case1|1
                local.get $17
                i32.const 8
                i32.eq
                br_if $case2|1
                local.get $17
                i32.const 7
                i32.eq
                br_if $case3|1
                local.get $17
                i32.const 6
                i32.eq
                br_if $case4|1
                local.get $17
                i32.const 5
                i32.eq
                br_if $case5|1
                local.get $17
                i32.const 4
                i32.eq
                br_if $case6|1
                local.get $17
                i32.const 3
                i32.eq
                br_if $case7|1
                local.get $17
                i32.const 2
                i32.eq
                br_if $case8|1
                local.get $17
                i32.const 1
                i32.eq
                br_if $case9|1
                br $case10|1
               end
               local.get $11
               i32.const 1000000000
               i32.div_u
               local.set $16
               local.get $11
               i32.const 1000000000
               i32.rem_u
               local.set $11
               br $break|1
              end
              local.get $11
              i32.const 100000000
              i32.div_u
              local.set $16
              local.get $11
              i32.const 100000000
              i32.rem_u
              local.set $11
              br $break|1
             end
             local.get $11
             i32.const 10000000
             i32.div_u
             local.set $16
             local.get $11
             i32.const 10000000
             i32.rem_u
             local.set $11
             br $break|1
            end
            local.get $11
            i32.const 1000000
            i32.div_u
            local.set $16
            local.get $11
            i32.const 1000000
            i32.rem_u
            local.set $11
            br $break|1
           end
           local.get $11
           i32.const 100000
           i32.div_u
           local.set $16
           local.get $11
           i32.const 100000
           i32.rem_u
           local.set $11
           br $break|1
          end
          local.get $11
          i32.const 10000
          i32.div_u
          local.set $16
          local.get $11
          i32.const 10000
          i32.rem_u
          local.set $11
          br $break|1
         end
         local.get $11
         i32.const 1000
         i32.div_u
         local.set $16
         local.get $11
         i32.const 1000
         i32.rem_u
         local.set $11
         br $break|1
        end
        local.get $11
        i32.const 100
        i32.div_u
        local.set $16
        local.get $11
        i32.const 100
        i32.rem_u
        local.set $11
        br $break|1
       end
       local.get $11
       i32.const 10
       i32.div_u
       local.set $16
       local.get $11
       i32.const 10
       i32.rem_u
       local.set $11
       br $break|1
      end
      local.get $11
      local.set $16
      i32.const 0
      local.set $11
      br $break|1
     end
     i32.const 0
     local.set $16
     br $break|1
    end
    local.get $16
    local.get $14
    i32.or
    if
     local.get $0
     local.get $14
     local.tee $17
     i32.const 1
     i32.add
     local.set $14
     local.get $17
     i32.const 1
     i32.shl
     i32.add
     i32.const 48
     local.get $16
     i32.const 65535
     i32.and
     i32.add
     i32.store16
    end
    local.get $13
    i32.const 1
    i32.sub
    local.set $13
    local.get $11
    i64.extend_i32_u
    local.get $7
    i64.extend_i32_s
    i64.shl
    local.get $12
    i64.add
    local.set $18
    local.get $18
    local.get $5
    i64.le_u
    if
     global.get $~lib/util/number/_K
     local.get $13
     i32.add
     global.set $~lib/util/number/_K
     local.get $0
     local.set $23
     local.get $14
     local.set $17
     local.get $5
     local.set $22
     local.get $18
     local.set $21
     i32.const 4688
     local.get $13
     i32.const 2
     i32.shl
     i32.add
     i64.load32_u
     local.get $7
     i64.extend_i32_s
     i64.shl
     local.set $20
     local.get $10
     local.set $19
     local.get $23
     local.get $17
     i32.const 1
     i32.sub
     i32.const 1
     i32.shl
     i32.add
     local.set $24
     local.get $24
     i32.load16_u
     local.set $25
     loop $while-continue|3
      local.get $21
      local.get $19
      i64.lt_u
      if (result i32)
       local.get $22
       local.get $21
       i64.sub
       local.get $20
       i64.ge_u
      else
       i32.const 0
      end
      if (result i32)
       local.get $21
       local.get $20
       i64.add
       local.get $19
       i64.lt_u
       if (result i32)
        i32.const 1
       else
        local.get $19
        local.get $21
        i64.sub
        local.get $21
        local.get $20
        i64.add
        local.get $19
        i64.sub
        i64.gt_u
       end
      else
       i32.const 0
      end
      local.set $26
      local.get $26
      if
       local.get $25
       i32.const 1
       i32.sub
       local.set $25
       local.get $21
       local.get $20
       i64.add
       local.set $21
       br $while-continue|3
      end
     end
     local.get $24
     local.get $25
     i32.store16
     local.get $14
     return
    end
    br $while-continue|0
   end
  end
  loop $while-continue|4
   i32.const 1
   local.set $15
   local.get $15
   if
    local.get $12
    i64.const 10
    i64.mul
    local.set $12
    local.get $5
    i64.const 10
    i64.mul
    local.set $5
    local.get $12
    local.get $7
    i64.extend_i32_s
    i64.shr_u
    local.set $22
    local.get $22
    local.get $14
    i64.extend_i32_s
    i64.or
    i64.const 0
    i64.ne
    if
     local.get $0
     local.get $14
     local.tee $25
     i32.const 1
     i32.add
     local.set $14
     local.get $25
     i32.const 1
     i32.shl
     i32.add
     i32.const 48
     local.get $22
     i32.wrap_i64
     i32.const 65535
     i32.and
     i32.add
     i32.store16
    end
    local.get $12
    local.get $9
    i64.and
    local.set $12
    local.get $13
    i32.const 1
    i32.sub
    local.set $13
    local.get $12
    local.get $5
    i64.lt_u
    if
     global.get $~lib/util/number/_K
     local.get $13
     i32.add
     global.set $~lib/util/number/_K
     local.get $10
     i32.const 4688
     i32.const 0
     local.get $13
     i32.sub
     i32.const 2
     i32.shl
     i32.add
     i64.load32_u
     i64.mul
     local.set $10
     local.get $0
     local.set $17
     local.get $14
     local.set $26
     local.get $5
     local.set $27
     local.get $12
     local.set $21
     local.get $8
     local.set $20
     local.get $10
     local.set $19
     local.get $17
     local.get $26
     i32.const 1
     i32.sub
     i32.const 1
     i32.shl
     i32.add
     local.set $25
     local.get $25
     i32.load16_u
     local.set $24
     loop $while-continue|6
      local.get $21
      local.get $19
      i64.lt_u
      if (result i32)
       local.get $27
       local.get $21
       i64.sub
       local.get $20
       i64.ge_u
      else
       i32.const 0
      end
      if (result i32)
       local.get $21
       local.get $20
       i64.add
       local.get $19
       i64.lt_u
       if (result i32)
        i32.const 1
       else
        local.get $19
        local.get $21
        i64.sub
        local.get $21
        local.get $20
        i64.add
        local.get $19
        i64.sub
        i64.gt_u
       end
      else
       i32.const 0
      end
      local.set $23
      local.get $23
      if
       local.get $24
       i32.const 1
       i32.sub
       local.set $24
       local.get $21
       local.get $20
       i64.add
       local.set $21
       br $while-continue|6
      end
     end
     local.get $25
     local.get $24
     i32.store16
     local.get $14
     return
    end
    br $while-continue|4
   end
  end
  unreachable
 )
 (func $~lib/util/number/prettify (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  local.get $2
  i32.eqz
  if
   local.get $0
   local.get $1
   i32.const 1
   i32.shl
   i32.add
   i32.const 46
   i32.const 48
   i32.const 16
   i32.shl
   i32.or
   i32.store
   local.get $1
   i32.const 2
   i32.add
   return
  end
  local.get $1
  local.get $2
  i32.add
  local.set $3
  local.get $1
  local.get $3
  i32.le_s
  if (result i32)
   local.get $3
   i32.const 21
   i32.le_s
  else
   i32.const 0
  end
  if
   local.get $1
   local.set $4
   loop $for-loop|0
    local.get $4
    local.get $3
    i32.lt_s
    local.set $5
    local.get $5
    if
     local.get $0
     local.get $4
     i32.const 1
     i32.shl
     i32.add
     i32.const 48
     i32.store16
     local.get $4
     i32.const 1
     i32.add
     local.set $4
     br $for-loop|0
    end
   end
   local.get $0
   local.get $3
   i32.const 1
   i32.shl
   i32.add
   i32.const 46
   i32.const 48
   i32.const 16
   i32.shl
   i32.or
   i32.store
   local.get $3
   i32.const 2
   i32.add
   return
  else
   local.get $3
   i32.const 0
   i32.gt_s
   if (result i32)
    local.get $3
    i32.const 21
    i32.le_s
   else
    i32.const 0
   end
   if
    local.get $0
    local.get $3
    i32.const 1
    i32.shl
    i32.add
    local.set $4
    local.get $4
    i32.const 2
    i32.add
    local.get $4
    i32.const 0
    local.get $2
    i32.sub
    i32.const 1
    i32.shl
    memory.copy
    local.get $0
    local.get $3
    i32.const 1
    i32.shl
    i32.add
    i32.const 46
    i32.store16
    local.get $1
    i32.const 1
    i32.add
    return
   else
    i32.const -6
    local.get $3
    i32.lt_s
    if (result i32)
     local.get $3
     i32.const 0
     i32.le_s
    else
     i32.const 0
    end
    if
     i32.const 2
     local.get $3
     i32.sub
     local.set $4
     local.get $0
     local.get $4
     i32.const 1
     i32.shl
     i32.add
     local.get $0
     local.get $1
     i32.const 1
     i32.shl
     memory.copy
     local.get $0
     i32.const 48
     i32.const 46
     i32.const 16
     i32.shl
     i32.or
     i32.store
     i32.const 2
     local.set $5
     loop $for-loop|1
      local.get $5
      local.get $4
      i32.lt_s
      local.set $6
      local.get $6
      if
       local.get $0
       local.get $5
       i32.const 1
       i32.shl
       i32.add
       i32.const 48
       i32.store16
       local.get $5
       i32.const 1
       i32.add
       local.set $5
       br $for-loop|1
      end
     end
     local.get $1
     local.get $4
     i32.add
     return
    else
     local.get $1
     i32.const 1
     i32.eq
     if
      local.get $0
      i32.const 101
      i32.store16 offset=2
      local.get $0
      i32.const 4
      i32.add
      local.set $5
      local.get $3
      i32.const 1
      i32.sub
      local.set $6
      local.get $6
      i32.const 0
      i32.lt_s
      local.set $4
      local.get $4
      if
       i32.const 0
       local.get $6
       i32.sub
       local.set $6
      end
      local.get $6
      call $~lib/util/number/decimalCount32
      i32.const 1
      i32.add
      local.set $7
      local.get $5
      local.set $10
      local.get $6
      local.set $9
      local.get $7
      local.set $8
      i32.const 0
      i32.const 1
      i32.ge_s
      drop
      local.get $10
      local.get $9
      local.get $8
      call $~lib/util/number/utoa32_dec_lut
      local.get $5
      i32.const 45
      i32.const 43
      local.get $4
      select
      i32.store16
      local.get $7
      local.set $1
      local.get $1
      i32.const 2
      i32.add
      return
     else
      local.get $1
      i32.const 1
      i32.shl
      local.set $7
      local.get $0
      i32.const 4
      i32.add
      local.get $0
      i32.const 2
      i32.add
      local.get $7
      i32.const 2
      i32.sub
      memory.copy
      local.get $0
      i32.const 46
      i32.store16 offset=2
      local.get $0
      local.get $7
      i32.add
      i32.const 101
      i32.store16 offset=2
      local.get $1
      local.get $0
      local.get $7
      i32.add
      i32.const 4
      i32.add
      local.set $9
      local.get $3
      i32.const 1
      i32.sub
      local.set $8
      local.get $8
      i32.const 0
      i32.lt_s
      local.set $4
      local.get $4
      if
       i32.const 0
       local.get $8
       i32.sub
       local.set $8
      end
      local.get $8
      call $~lib/util/number/decimalCount32
      i32.const 1
      i32.add
      local.set $5
      local.get $9
      local.set $11
      local.get $8
      local.set $6
      local.get $5
      local.set $10
      i32.const 0
      i32.const 1
      i32.ge_s
      drop
      local.get $11
      local.get $6
      local.get $10
      call $~lib/util/number/utoa32_dec_lut
      local.get $9
      i32.const 45
      i32.const 43
      local.get $4
      select
      i32.store16
      local.get $5
      i32.add
      local.set $1
      local.get $1
      i32.const 2
      i32.add
      return
     end
     unreachable
    end
    unreachable
   end
   unreachable
  end
  unreachable
 )
 (func $~lib/util/number/dtoa_core (param $0 i32) (param $1 f64) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 f64)
  (local $6 i64)
  (local $7 i32)
  (local $8 i64)
  (local $9 i64)
  (local $10 i32)
  (local $11 i64)
  (local $12 i64)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 f64)
  (local $17 i64)
  (local $18 i64)
  (local $19 i64)
  (local $20 i64)
  (local $21 i64)
  (local $22 i64)
  (local $23 i64)
  (local $24 i64)
  (local $25 i64)
  (local $26 i32)
  (local $27 i64)
  (local $28 i32)
  local.get $1
  f64.const 0
  f64.lt
  local.set $2
  local.get $2
  if
   local.get $1
   f64.neg
   local.set $1
   local.get $0
   i32.const 45
   i32.store16
  end
  local.get $1
  local.set $5
  local.get $0
  local.set $4
  local.get $2
  local.set $3
  local.get $5
  i64.reinterpret_f64
  local.set $6
  local.get $6
  i64.const 9218868437227405312
  i64.and
  i64.const 52
  i64.shr_u
  i32.wrap_i64
  local.set $7
  local.get $6
  i64.const 4503599627370495
  i64.and
  local.set $8
  local.get $7
  i32.const 0
  i32.ne
  i64.extend_i32_u
  i64.const 52
  i64.shl
  local.get $8
  i64.add
  local.set $9
  local.get $7
  i32.const 1
  local.get $7
  select
  i32.const 1023
  i32.const 52
  i32.add
  i32.sub
  local.set $7
  local.get $9
  local.set $11
  local.get $7
  local.set $10
  local.get $11
  i64.const 1
  i64.shl
  i64.const 1
  i64.add
  local.set $12
  local.get $10
  i32.const 1
  i32.sub
  local.set $13
  local.get $12
  i64.clz
  i32.wrap_i64
  local.set $14
  local.get $12
  local.get $14
  i64.extend_i32_s
  i64.shl
  local.set $12
  local.get $13
  local.get $14
  i32.sub
  local.set $13
  i32.const 1
  local.get $11
  i64.const 4503599627370496
  i64.eq
  i32.add
  local.set $15
  local.get $12
  global.set $~lib/util/number/_frc_plus
  local.get $11
  local.get $15
  i64.extend_i32_s
  i64.shl
  i64.const 1
  i64.sub
  local.get $10
  local.get $15
  i32.sub
  local.get $13
  i32.sub
  i64.extend_i32_s
  i64.shl
  global.set $~lib/util/number/_frc_minus
  local.get $13
  global.set $~lib/util/number/_exp
  global.get $~lib/util/number/_exp
  local.set $10
  i32.const -61
  local.get $10
  i32.sub
  f64.convert_i32_s
  f64.const 0.30102999566398114
  f64.mul
  f64.const 347
  f64.add
  local.set $16
  local.get $16
  i32.trunc_sat_f64_s
  local.set $15
  local.get $15
  local.get $15
  f64.convert_i32_s
  local.get $16
  f64.ne
  i32.add
  local.set $15
  local.get $15
  i32.const 3
  i32.shr_s
  i32.const 1
  i32.add
  local.set $14
  i32.const 348
  local.get $14
  i32.const 3
  i32.shl
  i32.sub
  global.set $~lib/util/number/_K
  i32.const 3816
  local.get $14
  i32.const 3
  i32.shl
  i32.add
  i64.load
  global.set $~lib/util/number/_frc_pow
  i32.const 4512
  local.get $14
  i32.const 1
  i32.shl
  i32.add
  i32.load16_s
  global.set $~lib/util/number/_exp_pow
  local.get $9
  i64.clz
  i32.wrap_i64
  local.set $14
  local.get $9
  local.get $14
  i64.extend_i32_s
  i64.shl
  local.set $9
  local.get $7
  local.get $14
  i32.sub
  local.set $7
  global.get $~lib/util/number/_frc_pow
  local.set $12
  global.get $~lib/util/number/_exp_pow
  local.set $15
  local.get $9
  local.set $17
  local.get $12
  local.set $11
  local.get $17
  i64.const 4294967295
  i64.and
  local.set $18
  local.get $11
  i64.const 4294967295
  i64.and
  local.set $19
  local.get $17
  i64.const 32
  i64.shr_u
  local.set $20
  local.get $11
  i64.const 32
  i64.shr_u
  local.set $21
  local.get $18
  local.get $19
  i64.mul
  local.set $22
  local.get $20
  local.get $19
  i64.mul
  local.get $22
  i64.const 32
  i64.shr_u
  i64.add
  local.set $23
  local.get $18
  local.get $21
  i64.mul
  local.get $23
  i64.const 4294967295
  i64.and
  i64.add
  local.set $24
  local.get $24
  i64.const 2147483647
  i64.add
  local.set $24
  local.get $23
  i64.const 32
  i64.shr_u
  local.set $23
  local.get $24
  i64.const 32
  i64.shr_u
  local.set $24
  local.get $20
  local.get $21
  i64.mul
  local.get $23
  i64.add
  local.get $24
  i64.add
  local.set $24
  local.get $7
  local.set $10
  local.get $15
  local.set $13
  local.get $10
  local.get $13
  i32.add
  i32.const 64
  i32.add
  local.set $10
  global.get $~lib/util/number/_frc_plus
  local.set $17
  local.get $12
  local.set $11
  local.get $17
  i64.const 4294967295
  i64.and
  local.set $23
  local.get $11
  i64.const 4294967295
  i64.and
  local.set $22
  local.get $17
  i64.const 32
  i64.shr_u
  local.set $21
  local.get $11
  i64.const 32
  i64.shr_u
  local.set $20
  local.get $23
  local.get $22
  i64.mul
  local.set $19
  local.get $21
  local.get $22
  i64.mul
  local.get $19
  i64.const 32
  i64.shr_u
  i64.add
  local.set $18
  local.get $23
  local.get $20
  i64.mul
  local.get $18
  i64.const 4294967295
  i64.and
  i64.add
  local.set $25
  local.get $25
  i64.const 2147483647
  i64.add
  local.set $25
  local.get $18
  i64.const 32
  i64.shr_u
  local.set $18
  local.get $25
  i64.const 32
  i64.shr_u
  local.set $25
  local.get $21
  local.get $20
  i64.mul
  local.get $18
  i64.add
  local.get $25
  i64.add
  i64.const 1
  i64.sub
  local.set $25
  global.get $~lib/util/number/_exp
  local.set $26
  local.get $15
  local.set $13
  local.get $26
  local.get $13
  i32.add
  i32.const 64
  i32.add
  local.set $26
  global.get $~lib/util/number/_frc_minus
  local.set $17
  local.get $12
  local.set $11
  local.get $17
  i64.const 4294967295
  i64.and
  local.set $18
  local.get $11
  i64.const 4294967295
  i64.and
  local.set $19
  local.get $17
  i64.const 32
  i64.shr_u
  local.set $20
  local.get $11
  i64.const 32
  i64.shr_u
  local.set $21
  local.get $18
  local.get $19
  i64.mul
  local.set $22
  local.get $20
  local.get $19
  i64.mul
  local.get $22
  i64.const 32
  i64.shr_u
  i64.add
  local.set $23
  local.get $18
  local.get $21
  i64.mul
  local.get $23
  i64.const 4294967295
  i64.and
  i64.add
  local.set $27
  local.get $27
  i64.const 2147483647
  i64.add
  local.set $27
  local.get $23
  i64.const 32
  i64.shr_u
  local.set $23
  local.get $27
  i64.const 32
  i64.shr_u
  local.set $27
  local.get $20
  local.get $21
  i64.mul
  local.get $23
  i64.add
  local.get $27
  i64.add
  i64.const 1
  i64.add
  local.set $27
  local.get $25
  local.get $27
  i64.sub
  local.set $23
  local.get $4
  local.get $24
  local.get $10
  local.get $25
  local.get $26
  local.get $23
  local.get $3
  call $~lib/util/number/genDigits
  local.set $28
  local.get $0
  local.get $2
  i32.const 1
  i32.shl
  i32.add
  local.get $28
  local.get $2
  i32.sub
  global.get $~lib/util/number/_K
  call $~lib/util/number/prettify
  local.set $28
  local.get $28
  local.get $2
  i32.add
 )
 (func $~lib/number/F64#toString (param $0 f64) (param $1 i32) (result i32)
  local.get $0
  call $~lib/util/number/dtoa
 )
 (func $assembly/index/JSON.stringify<f64> (param $0 f64) (result i32)
  i32.const 0
  drop
  i32.const 0
  drop
  local.get $0
  local.get $0
  f64.sub
  f64.const 0
  f64.eq
  if
   local.get $0
   i32.const 0
   call $~lib/number/F64#toString
   return
  else
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 4752
   return
  end
  unreachable
 )
 (func $~lib/math/ipow32 (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  i32.const 1
  local.set $2
  i32.const 0
  i32.const 1
  i32.lt_s
  drop
  local.get $0
  i32.const 2
  i32.eq
  if
   i32.const 1
   local.get $1
   i32.shl
   i32.const 0
   local.get $1
   i32.const 32
   i32.lt_u
   select
   return
  end
  local.get $1
  i32.const 0
  i32.le_s
  if
   local.get $0
   i32.const -1
   i32.eq
   if
    i32.const -1
    i32.const 1
    local.get $1
    i32.const 1
    i32.and
    select
    return
   end
   local.get $1
   i32.const 0
   i32.eq
   local.get $0
   i32.const 1
   i32.eq
   i32.or
   return
  else
   local.get $1
   i32.const 1
   i32.eq
   if
    local.get $0
    return
   else
    local.get $1
    i32.const 2
    i32.eq
    if
     local.get $0
     local.get $0
     i32.mul
     return
    else
     local.get $1
     i32.const 32
     i32.lt_s
     if
      i32.const 32
      local.get $1
      i32.clz
      i32.sub
      local.set $3
      block $break|0
       block $case4|0
        block $case3|0
         block $case2|0
          block $case1|0
           block $case0|0
            local.get $3
            local.set $4
            local.get $4
            i32.const 5
            i32.eq
            br_if $case0|0
            local.get $4
            i32.const 4
            i32.eq
            br_if $case1|0
            local.get $4
            i32.const 3
            i32.eq
            br_if $case2|0
            local.get $4
            i32.const 2
            i32.eq
            br_if $case3|0
            local.get $4
            i32.const 1
            i32.eq
            br_if $case4|0
            br $break|0
           end
           local.get $1
           i32.const 1
           i32.and
           if
            local.get $2
            local.get $0
            i32.mul
            local.set $2
           end
           local.get $1
           i32.const 1
           i32.shr_u
           local.set $1
           local.get $0
           local.get $0
           i32.mul
           local.set $0
          end
          local.get $1
          i32.const 1
          i32.and
          if
           local.get $2
           local.get $0
           i32.mul
           local.set $2
          end
          local.get $1
          i32.const 1
          i32.shr_u
          local.set $1
          local.get $0
          local.get $0
          i32.mul
          local.set $0
         end
         local.get $1
         i32.const 1
         i32.and
         if
          local.get $2
          local.get $0
          i32.mul
          local.set $2
         end
         local.get $1
         i32.const 1
         i32.shr_u
         local.set $1
         local.get $0
         local.get $0
         i32.mul
         local.set $0
        end
        local.get $1
        i32.const 1
        i32.and
        if
         local.get $2
         local.get $0
         i32.mul
         local.set $2
        end
        local.get $1
        i32.const 1
        i32.shr_u
        local.set $1
        local.get $0
        local.get $0
        i32.mul
        local.set $0
       end
       local.get $1
       i32.const 1
       i32.and
       if
        local.get $2
        local.get $0
        i32.mul
        local.set $2
       end
      end
      local.get $2
      return
     end
    end
   end
  end
  loop $while-continue|1
   local.get $1
   local.set $3
   local.get $3
   if
    local.get $1
    i32.const 1
    i32.and
    if
     local.get $2
     local.get $0
     i32.mul
     local.set $2
    end
    local.get $1
    i32.const 1
    i32.shr_u
    local.set $1
    local.get $0
    local.get $0
    i32.mul
    local.set $0
    br $while-continue|1
   end
  end
  local.get $2
 )
 (func $~lib/math/NativeMath.scalbn (param $0 f64) (param $1 i32) (result f64)
  (local $2 f64)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  local.set $2
  local.get $1
  i32.const 1023
  i32.gt_s
  if
   local.get $2
   f64.const 8988465674311579538646525e283
   f64.mul
   local.set $2
   local.get $1
   i32.const 1023
   i32.sub
   local.set $1
   local.get $1
   i32.const 1023
   i32.gt_s
   if
    local.get $2
    f64.const 8988465674311579538646525e283
    f64.mul
    local.set $2
    local.get $1
    i32.const 1023
    i32.sub
    local.tee $3
    i32.const 1023
    local.tee $4
    local.get $3
    local.get $4
    i32.lt_s
    select
    local.set $1
   end
  else
   local.get $1
   i32.const -1022
   i32.lt_s
   if
    local.get $2
    f64.const 2.2250738585072014e-308
    f64.const 9007199254740992
    f64.mul
    f64.mul
    local.set $2
    local.get $1
    i32.const 1022
    i32.const 53
    i32.sub
    i32.add
    local.set $1
    local.get $1
    i32.const -1022
    i32.lt_s
    if
     local.get $2
     f64.const 2.2250738585072014e-308
     f64.const 9007199254740992
     f64.mul
     f64.mul
     local.set $2
     local.get $1
     i32.const 1022
     i32.add
     i32.const 53
     i32.sub
     local.tee $4
     i32.const -1022
     local.tee $3
     local.get $4
     local.get $3
     i32.gt_s
     select
     local.set $1
    end
   end
  end
  local.get $2
  i64.const 1023
  local.get $1
  i64.extend_i32_s
  i64.add
  i64.const 52
  i64.shl
  f64.reinterpret_i64
  f64.mul
 )
 (func $~lib/util/string/strtod (param $0 i32) (result f64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 f64)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i64)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  (local $17 i64)
  (local $18 f64)
  (local $19 i64)
  (local $20 i64)
  (local $21 i64)
  (local $22 i64)
  (local $23 i64)
  (local $24 i64)
  local.get $0
  call $~lib/string/String#get:length
  local.set $1
  local.get $1
  i32.eqz
  if
   f64.const nan:0x8000000000000
   return
  end
  local.get $0
  local.set $2
  local.get $2
  i32.load16_u
  local.set $3
  f64.const 1
  local.set $4
  loop $while-continue|0
   local.get $1
   if (result i32)
    local.get $3
    call $~lib/util/string/isSpace
   else
    i32.const 0
   end
   local.set $5
   local.get $5
   if
    local.get $2
    i32.const 2
    i32.add
    local.tee $2
    i32.load16_u
    local.set $3
    local.get $1
    i32.const 1
    i32.sub
    local.set $1
    br $while-continue|0
   end
  end
  local.get $1
  i32.eqz
  if
   f64.const nan:0x8000000000000
   return
  end
  local.get $3
  i32.const 45
  i32.eq
  if
   local.get $1
   i32.const 1
   i32.sub
   local.tee $1
   i32.eqz
   if
    f64.const nan:0x8000000000000
    return
   end
   local.get $2
   i32.const 2
   i32.add
   local.tee $2
   i32.load16_u
   local.set $3
   f64.const -1
   local.set $4
  else
   local.get $3
   i32.const 43
   i32.eq
   if
    local.get $1
    i32.const 1
    i32.sub
    local.tee $1
    i32.eqz
    if
     f64.const nan:0x8000000000000
     return
    end
    local.get $2
    i32.const 2
    i32.add
    local.tee $2
    i32.load16_u
    local.set $3
   end
  end
  local.get $1
  i32.const 8
  i32.ge_s
  if (result i32)
   local.get $3
   i32.const 73
   i32.eq
  else
   i32.const 0
  end
  if
   local.get $2
   i64.load
   i64.const 29555310648492105
   i64.eq
   if (result i32)
    local.get $2
    i64.load offset=8
    i64.const 34058970405077102
    i64.eq
   else
    i32.const 0
   end
   if
    f64.const inf
    local.get $4
    f64.mul
    return
   end
   f64.const nan:0x8000000000000
   return
  end
  local.get $3
  i32.const 46
  i32.ne
  if (result i32)
   local.get $3
   i32.const 48
   i32.sub
   i32.const 10
   i32.ge_u
  else
   i32.const 0
  end
  if
   f64.const nan:0x8000000000000
   return
  end
  local.get $2
  local.set $6
  loop $while-continue|1
   local.get $3
   i32.const 48
   i32.eq
   local.set $5
   local.get $5
   if
    local.get $2
    i32.const 2
    i32.add
    local.tee $2
    i32.load16_u
    local.set $3
    local.get $1
    i32.const 1
    i32.sub
    local.set $1
    br $while-continue|1
   end
  end
  local.get $1
  i32.const 0
  i32.le_s
  if
   f64.const 0
   return
  end
  i32.const 0
  local.set $7
  i32.const 0
  local.set $8
  i32.const 0
  local.set $9
  i64.const 0
  local.set $10
  local.get $3
  i32.const 46
  i32.eq
  if
   local.get $6
   local.get $2
   i32.sub
   i32.eqz
   local.set $5
   local.get $2
   i32.const 2
   i32.add
   local.set $2
   local.get $1
   i32.const 1
   i32.sub
   local.set $1
   local.get $1
   i32.eqz
   if (result i32)
    local.get $5
   else
    i32.const 0
   end
   if
    f64.const nan:0x8000000000000
    return
   end
   i32.const 1
   local.set $7
   loop $for-loop|2
    local.get $2
    i32.load16_u
    local.tee $3
    i32.const 48
    i32.eq
    local.set $11
    local.get $11
    if
     local.get $1
     i32.const 1
     i32.sub
     local.set $1
     local.get $9
     i32.const 1
     i32.sub
     local.set $9
     local.get $2
     i32.const 2
     i32.add
     local.set $2
     br $for-loop|2
    end
   end
   local.get $1
   i32.const 0
   i32.le_s
   if
    f64.const 0
    return
   end
   local.get $9
   i32.eqz
   if (result i32)
    local.get $5
   else
    i32.const 0
   end
   if (result i32)
    local.get $3
    i32.const 48
    i32.sub
    i32.const 10
    i32.ge_u
   else
    i32.const 0
   end
   if
    f64.const nan:0x8000000000000
    return
   end
  end
  local.get $3
  i32.const 48
  i32.sub
  local.set $5
  block $for-break3
   loop $for-loop|3
    local.get $5
    i32.const 10
    i32.lt_u
    if (result i32)
     i32.const 1
    else
     local.get $3
     i32.const 46
     i32.eq
     if (result i32)
      local.get $7
      i32.eqz
     else
      i32.const 0
     end
    end
    local.set $11
    local.get $11
    if
     local.get $5
     i32.const 10
     i32.lt_u
     if
      local.get $8
      i32.const 19
      i32.lt_s
      if (result i64)
       i64.const 10
       local.get $10
       i64.mul
       local.get $5
       i64.extend_i32_u
       i64.add
      else
       local.get $10
       local.get $5
       i32.eqz
       i32.eqz
       i64.extend_i32_u
       i64.or
      end
      local.set $10
      local.get $8
      i32.const 1
      i32.add
      local.set $8
     else
      local.get $8
      local.set $9
      i32.const 1
      local.set $7
     end
     local.get $1
     i32.const 1
     i32.sub
     local.tee $1
     i32.eqz
     if
      br $for-break3
     end
     local.get $2
     i32.const 2
     i32.add
     local.tee $2
     i32.load16_u
     local.set $3
     local.get $3
     i32.const 48
     i32.sub
     local.set $5
     br $for-loop|3
    end
   end
  end
  local.get $7
  i32.eqz
  if
   local.get $8
   local.set $9
  end
  block $~lib/util/string/scientific|inlined.0 (result f64)
   local.get $10
   local.set $17
   local.get $9
   i32.const 19
   local.tee $11
   local.get $8
   local.tee $5
   local.get $11
   local.get $5
   i32.lt_s
   select
   i32.sub
   block $~lib/util/string/parseExp|inlined.0 (result i32)
    local.get $2
    local.set $11
    local.get $1
    local.set $5
    i32.const 1
    local.set $12
    i32.const 0
    local.set $13
    local.get $11
    i32.load16_u
    local.set $14
    local.get $14
    i32.const 32
    i32.or
    i32.const 101
    i32.ne
    if
     i32.const 0
     br $~lib/util/string/parseExp|inlined.0
    end
    local.get $5
    i32.const 1
    i32.sub
    local.tee $5
    i32.eqz
    if
     i32.const 0
     br $~lib/util/string/parseExp|inlined.0
    end
    local.get $11
    i32.const 2
    i32.add
    local.tee $11
    i32.load16_u
    local.set $14
    local.get $14
    i32.const 45
    i32.eq
    if
     local.get $5
     i32.const 1
     i32.sub
     local.tee $5
     i32.eqz
     if
      i32.const 0
      br $~lib/util/string/parseExp|inlined.0
     end
     local.get $11
     i32.const 2
     i32.add
     local.tee $11
     i32.load16_u
     local.set $14
     i32.const -1
     local.set $12
    else
     local.get $14
     i32.const 43
     i32.eq
     if
      local.get $5
      i32.const 1
      i32.sub
      local.tee $5
      i32.eqz
      if
       i32.const 0
       br $~lib/util/string/parseExp|inlined.0
      end
      local.get $11
      i32.const 2
      i32.add
      local.tee $11
      i32.load16_u
      local.set $14
     end
    end
    loop $while-continue|4
     local.get $14
     i32.const 48
     i32.eq
     local.set $15
     local.get $15
     if
      local.get $5
      i32.const 1
      i32.sub
      local.tee $5
      i32.eqz
      if
       i32.const 0
       br $~lib/util/string/parseExp|inlined.0
      end
      local.get $11
      i32.const 2
      i32.add
      local.tee $11
      i32.load16_u
      local.set $14
      br $while-continue|4
     end
    end
    local.get $14
    i32.const 48
    i32.sub
    local.set $15
    loop $for-loop|5
     local.get $5
     if (result i32)
      local.get $15
      i32.const 10
      i32.lt_u
     else
      i32.const 0
     end
     local.set $16
     local.get $16
     if
      local.get $13
      i32.const 3200
      i32.ge_s
      if
       local.get $12
       i32.const 3200
       i32.mul
       br $~lib/util/string/parseExp|inlined.0
      end
      i32.const 10
      local.get $13
      i32.mul
      local.get $15
      i32.add
      local.set $13
      local.get $11
      i32.const 2
      i32.add
      local.tee $11
      i32.load16_u
      local.set $14
      local.get $5
      i32.const 1
      i32.sub
      local.set $5
      local.get $14
      i32.const 48
      i32.sub
      local.set $15
      br $for-loop|5
     end
    end
    local.get $12
    local.get $13
    i32.mul
   end
   i32.add
   local.set $16
   local.get $17
   i64.const 0
   i64.ne
   i32.eqz
   if (result i32)
    i32.const 1
   else
    local.get $16
    i32.const -342
    i32.lt_s
   end
   if
    f64.const 0
    br $~lib/util/string/scientific|inlined.0
   end
   local.get $16
   i32.const 308
   i32.gt_s
   if
    f64.const inf
    br $~lib/util/string/scientific|inlined.0
   end
   local.get $17
   f64.convert_i64_u
   local.set $18
   local.get $16
   i32.eqz
   if
    local.get $18
    br $~lib/util/string/scientific|inlined.0
   end
   local.get $16
   i32.const 22
   i32.gt_s
   if (result i32)
    local.get $16
    i32.const 22
    i32.const 15
    i32.add
    i32.le_s
   else
    i32.const 0
   end
   if
    local.get $18
    local.get $16
    i32.const 22
    i32.sub
    local.set $15
    i32.const 4768
    local.get $15
    i32.const 3
    i32.shl
    i32.add
    f64.load
    f64.mul
    local.set $18
    i32.const 22
    local.set $16
   end
   local.get $17
   i64.const 9007199254740991
   i64.le_u
   if (result i32)
    local.get $16
    local.tee $15
    i32.const 31
    i32.shr_s
    local.tee $14
    local.get $15
    i32.add
    local.get $14
    i32.xor
    i32.const 22
    i32.le_s
   else
    i32.const 0
   end
   if
    local.get $16
    i32.const 0
    i32.gt_s
    if
     local.get $18
     local.get $16
     local.set $5
     i32.const 4768
     local.get $5
     i32.const 3
     i32.shl
     i32.add
     f64.load
     f64.mul
     br $~lib/util/string/scientific|inlined.0
    end
    local.get $18
    i32.const 0
    local.get $16
    i32.sub
    local.set $11
    i32.const 4768
    local.get $11
    i32.const 3
    i32.shl
    i32.add
    f64.load
    f64.div
    br $~lib/util/string/scientific|inlined.0
   else
    local.get $16
    i32.const 0
    i32.lt_s
    if
     local.get $17
     local.set $19
     local.get $16
     local.set $12
     local.get $19
     i64.clz
     local.set $20
     local.get $19
     local.get $20
     i64.shl
     local.set $19
     local.get $12
     i64.extend_i32_s
     local.get $20
     i64.sub
     local.set $20
     loop $for-loop|6
      local.get $12
      i32.const -14
      i32.le_s
      local.set $11
      local.get $11
      if
       local.get $19
       i64.const 6103515625
       i64.div_u
       local.set $21
       local.get $19
       i64.const 6103515625
       i64.rem_u
       local.set $22
       local.get $21
       i64.clz
       local.set $23
       local.get $21
       local.get $23
       i64.shl
       f64.const 0.00004294967296
       local.get $22
       local.get $23
       i64.const 18
       i64.sub
       i64.shl
       f64.convert_i64_u
       f64.mul
       f64.nearest
       i64.trunc_sat_f64_u
       i64.add
       local.set $19
       local.get $20
       local.get $23
       i64.sub
       local.set $20
       local.get $12
       i32.const 14
       i32.add
       local.set $12
       br $for-loop|6
      end
     end
     i32.const 5
     i32.const 0
     local.get $12
     i32.sub
     call $~lib/math/ipow32
     i64.extend_i32_s
     local.set $23
     local.get $19
     local.get $23
     i64.div_u
     local.set $22
     local.get $19
     local.get $23
     i64.rem_u
     local.set $21
     local.get $22
     i64.clz
     local.set $24
     local.get $22
     local.get $24
     i64.shl
     local.get $21
     f64.convert_i64_u
     i64.reinterpret_f64
     local.get $24
     i64.const 52
     i64.shl
     i64.add
     f64.reinterpret_i64
     local.get $23
     f64.convert_i64_u
     f64.div
     i64.trunc_sat_f64_u
     i64.add
     local.set $19
     local.get $20
     local.get $24
     i64.sub
     local.set $20
     local.get $19
     f64.convert_i64_u
     local.get $20
     i32.wrap_i64
     call $~lib/math/NativeMath.scalbn
     br $~lib/util/string/scientific|inlined.0
    else
     local.get $17
     local.set $19
     local.get $16
     local.set $13
     local.get $19
     i64.ctz
     local.set $24
     local.get $19
     local.get $24
     i64.shr_u
     local.set $19
     local.get $24
     local.get $13
     i64.extend_i32_s
     i64.add
     local.set $24
     local.get $24
     global.set $~lib/util/string/__fixmulShift
     loop $for-loop|7
      local.get $13
      i32.const 13
      i32.ge_s
      local.set $12
      local.get $12
      if
       local.get $19
       local.set $20
       i32.const 1220703125
       local.set $14
       local.get $20
       i64.const 4294967295
       i64.and
       local.get $14
       i64.extend_i32_u
       i64.mul
       local.set $21
       local.get $20
       i64.const 32
       i64.shr_u
       local.get $14
       i64.extend_i32_u
       i64.mul
       local.get $21
       i64.const 32
       i64.shr_u
       i64.add
       local.set $22
       local.get $22
       i64.const 32
       i64.shr_u
       i32.wrap_i64
       local.set $11
       local.get $11
       i32.clz
       local.set $5
       i64.const 32
       local.get $5
       i64.extend_i32_u
       i64.sub
       local.set $23
       global.get $~lib/util/string/__fixmulShift
       local.get $23
       i64.add
       global.set $~lib/util/string/__fixmulShift
       local.get $22
       local.get $5
       i64.extend_i32_u
       i64.shl
       local.get $21
       i64.const 4294967295
       i64.and
       local.get $23
       i64.shr_u
       i64.or
       local.get $21
       local.get $5
       i64.extend_i32_u
       i64.shl
       i64.const 31
       i64.shr_u
       i64.const 1
       i64.and
       i64.add
       local.set $19
       local.get $13
       i32.const 13
       i32.sub
       local.set $13
       br $for-loop|7
      end
     end
     local.get $19
     local.set $20
     i32.const 5
     local.get $13
     call $~lib/math/ipow32
     local.set $15
     local.get $20
     i64.const 4294967295
     i64.and
     local.get $15
     i64.extend_i32_u
     i64.mul
     local.set $23
     local.get $20
     i64.const 32
     i64.shr_u
     local.get $15
     i64.extend_i32_u
     i64.mul
     local.get $23
     i64.const 32
     i64.shr_u
     i64.add
     local.set $22
     local.get $22
     i64.const 32
     i64.shr_u
     i32.wrap_i64
     local.set $12
     local.get $12
     i32.clz
     local.set $5
     i64.const 32
     local.get $5
     i64.extend_i32_u
     i64.sub
     local.set $21
     global.get $~lib/util/string/__fixmulShift
     local.get $21
     i64.add
     global.set $~lib/util/string/__fixmulShift
     local.get $22
     local.get $5
     i64.extend_i32_u
     i64.shl
     local.get $23
     i64.const 4294967295
     i64.and
     local.get $21
     i64.shr_u
     i64.or
     local.get $23
     local.get $5
     i64.extend_i32_u
     i64.shl
     i64.const 31
     i64.shr_u
     i64.const 1
     i64.and
     i64.add
     local.set $19
     global.get $~lib/util/string/__fixmulShift
     local.set $24
     local.get $19
     f64.convert_i64_u
     local.get $24
     i32.wrap_i64
     call $~lib/math/NativeMath.scalbn
     br $~lib/util/string/scientific|inlined.0
    end
    unreachable
   end
   unreachable
  end
  local.get $4
  f64.copysign
 )
 (func $~lib/string/parseFloat (param $0 i32) (result f64)
  local.get $0
  call $~lib/util/string/strtod
 )
 (func $~lib/number/F64.parseFloat (param $0 i32) (result f64)
  local.get $0
  call $~lib/string/parseFloat
 )
 (func $assembly/index/JSON.parse<f64> (param $0 i32) (result f64)
  (local $1 f64)
  (local $2 i32)
  (local $3 f64)
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  block $assembly/index/parseNumber<f64>|inlined.0 (result f64)
   local.get $0
   local.set $2
   i32.const 1
   drop
   local.get $2
   call $~lib/number/F64.parseFloat
   br $assembly/index/parseNumber<f64>|inlined.0
  end
  return
 )
 (func $start:assembly/__tests__/as-json.spec~anonymous|0~anonymous|1
  f64.const 7.23
  call $assembly/__tests__/as-json.spec/canSerde<f64>
  f64.const 1e3
  call $assembly/__tests__/as-json.spec/canSerde<f64>
  f64.const 1e3
  call $assembly/__tests__/as-json.spec/canSerde<f64>
  f64.const 1.23456
  call $assembly/__tests__/as-json.spec/canSerde<f64>
  f64.const 1.23456
  call $assembly/__tests__/as-json.spec/canSerde<f64>
  f64.const 0
  call $assembly/__tests__/as-json.spec/canSerde<f64>
  f64.const 7.23
  call $assembly/__tests__/as-json.spec/canSerde<f64>
 )
 (func $assembly/index/JSON.stringify<bool> (param $0 i32) (result i32)
  i32.const 0
  drop
  i32.const 1
  drop
  local.get $0
  if (result i32)
   i32.const 5072
  else
   i32.const 5104
  end
  return
 )
 (func $~lib/string/String#startsWith (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $0
  call $~lib/string/String#get:length
  local.set $3
  local.get $2
  local.tee $4
  i32.const 0
  local.tee $5
  local.get $4
  local.get $5
  i32.gt_s
  select
  local.tee $5
  local.get $3
  local.tee $4
  local.get $5
  local.get $4
  i32.lt_s
  select
  local.set $6
  local.get $1
  call $~lib/string/String#get:length
  local.set $7
  local.get $7
  local.get $6
  i32.add
  local.get $3
  i32.gt_s
  if
   i32.const 0
   return
  end
  local.get $0
  local.get $6
  local.get $1
  i32.const 0
  local.get $7
  call $~lib/util/string/compareImpl
  i32.eqz
 )
 (func $~lib/staticarray/StaticArray<~lib/string/String>#__uset (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $0
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
  i32.const 1
  drop
  local.get $0
  local.get $2
  i32.const 1
  call $~lib/rt/itcms/__link
 )
 (func $~lib/staticarray/StaticArray<~lib/string/String>#get:length (param $0 i32) (result i32)
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 2
  i32.shr_u
 )
 (func $~lib/staticarray/StaticArray<~lib/string/String>#join (param $0 i32) (param $1 i32) (result i32)
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  i32.const 1
  i32.lt_s
  drop
  i32.const 1
  drop
  local.get $0
  local.get $0
  call $~lib/staticarray/StaticArray<~lib/string/String>#get:length
  local.get $1
  call $~lib/util/string/joinStringArray
  return
 )
 (func $start:assembly/__tests__/as-json.spec~anonymous|0~anonymous|2
  i32.const 1
  call $assembly/__tests__/as-json.spec/canSerde<bool>
  i32.const 0
  call $assembly/__tests__/as-json.spec/canSerde<bool>
  i32.const 1
  call $assembly/__tests__/as-json.spec/canSerde<bool>
  i32.const 0
  call $assembly/__tests__/as-json.spec/canSerde<bool>
 )
 (func $~lib/string/String#indexOf (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $1
  call $~lib/string/String#get:length
  local.set $3
  local.get $3
  i32.eqz
  if
   i32.const 0
   return
  end
  local.get $0
  call $~lib/string/String#get:length
  local.set $4
  local.get $4
  i32.eqz
  if
   i32.const -1
   return
  end
  local.get $2
  local.tee $5
  i32.const 0
  local.tee $6
  local.get $5
  local.get $6
  i32.gt_s
  select
  local.tee $6
  local.get $4
  local.tee $5
  local.get $6
  local.get $5
  i32.lt_s
  select
  local.set $7
  local.get $4
  local.get $3
  i32.sub
  local.set $4
  loop $for-loop|0
   local.get $7
   local.get $4
   i32.le_s
   local.set $6
   local.get $6
   if
    local.get $0
    local.get $7
    local.get $1
    i32.const 0
    local.get $3
    call $~lib/util/string/compareImpl
    i32.eqz
    if
     local.get $7
     return
    end
    local.get $7
    i32.const 1
    i32.add
    local.set $7
    br $for-loop|0
   end
  end
  i32.const -1
 )
 (func $~lib/string/String.__not (param $0 i32) (result i32)
  local.get $0
  i32.const 0
  i32.eq
  if (result i32)
   i32.const 1
  else
   local.get $0
   call $~lib/string/String#get:length
   i32.eqz
  end
 )
 (func $~lib/rt/itcms/__renew (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  i32.const 20
  i32.sub
  local.set $2
  local.get $1
  local.get $2
  i32.load
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  i32.const 16
  i32.sub
  i32.le_u
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/Object#set:rtSize
   local.get $0
   return
  end
  local.get $1
  local.get $2
  i32.load offset=12
  call $~lib/rt/itcms/__new
  local.set $3
  local.get $3
  local.get $0
  local.get $1
  local.tee $4
  local.get $2
  i32.load offset=16
  local.tee $5
  local.get $4
  local.get $5
  i32.lt_u
  select
  memory.copy
  local.get $3
 )
 (func $~lib/string/String.__concat (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  call $~lib/string/String#concat
 )
 (func $~lib/as-string-sink/assembly/index/StringSink#set:buffer (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/as-string-sink/assembly/index/StringSink#set:offset (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/array/Array<u32>#get:length (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array<u32>#__uget (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
 )
 (func $~lib/arraybuffer/ArrayBuffer#get:byteLength (param $0 i32) (result i32)
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
 )
 (func $~lib/as-string-sink/assembly/index/StringSink#write (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  call $~lib/string/String#get:length
  local.set $4
  local.get $2
  i32.const 0
  i32.ne
  if (result i32)
   i32.const 1
  else
   local.get $3
   global.get $~lib/builtins/i32.MAX_VALUE
   i32.ne
  end
  if
   local.get $2
   local.tee $6
   i32.const 0
   local.tee $7
   local.get $6
   local.get $7
   i32.gt_s
   select
   local.tee $7
   local.get $4
   local.tee $6
   local.get $7
   local.get $6
   i32.lt_s
   select
   local.set $5
   local.get $3
   local.tee $6
   i32.const 0
   local.tee $7
   local.get $6
   local.get $7
   i32.gt_s
   select
   local.tee $7
   local.get $4
   local.tee $6
   local.get $7
   local.get $6
   i32.lt_s
   select
   local.set $3
   local.get $5
   local.tee $6
   local.get $3
   local.tee $7
   local.get $6
   local.get $7
   i32.lt_s
   select
   local.set $2
   local.get $5
   local.tee $7
   local.get $3
   local.tee $6
   local.get $7
   local.get $6
   i32.gt_s
   select
   local.set $3
   local.get $3
   local.get $2
   i32.sub
   local.set $4
  end
  local.get $4
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  local.get $4
  i32.const 1
  i32.shl
  local.set $5
  local.get $0
  local.set $7
  local.get $5
  local.set $6
  global.get $~lib/memory/__stack_pointer
  local.get $7
  i32.load
  local.tee $8
  i32.store
  local.get $7
  i32.load offset=4
  local.get $6
  i32.add
  local.set $9
  local.get $9
  local.get $8
  call $~lib/arraybuffer/ArrayBuffer#get:byteLength
  i32.gt_u
  if
   local.get $7
   local.get $8
   local.get $9
   local.set $10
   i32.const 1
   i32.const 32
   local.get $10
   i32.const 1
   i32.sub
   i32.clz
   i32.sub
   i32.shl
   call $~lib/rt/itcms/__renew
   call $~lib/as-string-sink/assembly/index/StringSink#set:buffer
  end
  local.get $0
  i32.load offset=4
  local.set $9
  local.get $0
  i32.load
  local.get $9
  i32.add
  local.get $1
  local.get $2
  i32.const 1
  i32.shl
  i32.add
  local.get $5
  memory.copy
  local.get $0
  local.get $9
  local.get $5
  i32.add
  call $~lib/as-string-sink/assembly/index/StringSink#set:offset
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/array/Array<u32>#set:buffer (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/array/Array<u32>#set:dataStart (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/array/Array<u32>#set:byteLength (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/array/Array<u32>#set:length_ (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/assemblyscript/std/assembly/util/string/isSpace (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 5760
  i32.lt_u
  if
   local.get $0
   i32.const 128
   i32.or
   i32.const 160
   i32.eq
   if (result i32)
    i32.const 1
   else
    local.get $0
    i32.const 9
    i32.sub
    i32.const 13
    i32.const 9
    i32.sub
    i32.le_u
   end
   return
  end
  local.get $0
  i32.const 8192
  i32.sub
  i32.const 8202
  i32.const 8192
  i32.sub
  i32.le_u
  if
   i32.const 1
   return
  end
  block $break|0
   block $case6|0
    block $case5|0
     block $case4|0
      block $case3|0
       block $case2|0
        block $case1|0
         block $case0|0
          local.get $0
          local.set $1
          local.get $1
          i32.const 5760
          i32.eq
          br_if $case0|0
          local.get $1
          i32.const 8232
          i32.eq
          br_if $case1|0
          local.get $1
          i32.const 8233
          i32.eq
          br_if $case2|0
          local.get $1
          i32.const 8239
          i32.eq
          br_if $case3|0
          local.get $1
          i32.const 8287
          i32.eq
          br_if $case4|0
          local.get $1
          i32.const 12288
          i32.eq
          br_if $case5|0
          local.get $1
          i32.const 65279
          i32.eq
          br_if $case6|0
          br $break|0
         end
        end
       end
      end
     end
    end
   end
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/array/ensureCapacity (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $0
  i32.load offset=8
  local.set $4
  local.get $1
  local.get $4
  local.get $2
  i32.shr_u
  i32.gt_u
  if
   local.get $1
   i32.const 1073741820
   local.get $2
   i32.shr_u
   i32.gt_u
   if
    i32.const 432
    i32.const 6176
    i32.const 19
    i32.const 48
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.load
   local.set $5
   local.get $1
   local.tee $6
   i32.const 8
   local.tee $7
   local.get $6
   local.get $7
   i32.gt_u
   select
   local.get $2
   i32.shl
   local.set $6
   local.get $3
   if
    local.get $4
    i32.const 1
    i32.shl
    local.tee $7
    i32.const 1073741820
    local.tee $8
    local.get $7
    local.get $8
    i32.lt_u
    select
    local.tee $8
    local.get $6
    local.tee $7
    local.get $8
    local.get $7
    i32.gt_u
    select
    local.set $6
   end
   local.get $5
   local.get $6
   call $~lib/rt/itcms/__renew
   local.set $8
   i32.const 2
   global.get $~lib/shared/runtime/Runtime.Incremental
   i32.ne
   drop
   local.get $8
   local.get $5
   i32.ne
   if
    local.get $0
    local.get $8
    i32.store
    local.get $0
    local.get $8
    i32.store offset=4
    local.get $0
    local.get $8
    i32.const 0
    call $~lib/rt/itcms/__link
   end
   local.get $0
   local.get $6
   i32.store offset=8
  end
 )
 (func $~lib/array/Array<u32>#push (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.load offset=12
  local.set $2
  local.get $2
  i32.const 1
  i32.add
  local.set $3
  local.get $0
  local.get $3
  i32.const 2
  i32.const 1
  call $~lib/array/ensureCapacity
  i32.const 0
  drop
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store
  local.get $0
  local.get $3
  call $~lib/array/Array<u32>#set:length_
  local.get $3
 )
 (func $~lib/array/Array<u64>#get:length (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array<u64>#__uget (param $0 i32) (param $1 i32) (result i64)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 3
  i32.shl
  i32.add
  i64.load
 )
 (func $~lib/array/Array<u64>#set:buffer (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/array/Array<u64>#set:dataStart (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/array/Array<u64>#set:byteLength (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/array/Array<u64>#set:length_ (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/array/Array<u64>#push (param $0 i32) (param $1 i64) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.load offset=12
  local.set $2
  local.get $2
  i32.const 1
  i32.add
  local.set $3
  local.get $0
  local.get $3
  i32.const 3
  i32.const 1
  call $~lib/array/ensureCapacity
  i32.const 0
  drop
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 3
  i32.shl
  i32.add
  local.get $1
  i64.store
  local.get $0
  local.get $3
  call $~lib/array/Array<u64>#set:length_
  local.get $3
 )
 (func $~lib/array/Array<i32>#get:length (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array<i32>#__uget (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
 )
 (func $~lib/array/Array<i32>#set:buffer (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/array/Array<i32>#set:dataStart (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/array/Array<i32>#set:byteLength (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/array/Array<i32>#set:length_ (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/array/Array<i32>#push (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.load offset=12
  local.set $2
  local.get $2
  i32.const 1
  i32.add
  local.set $3
  local.get $0
  local.get $3
  i32.const 2
  i32.const 1
  call $~lib/array/ensureCapacity
  i32.const 0
  drop
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store
  local.get $0
  local.get $3
  call $~lib/array/Array<i32>#set:length_
  local.get $3
 )
 (func $~lib/array/Array<i64>#get:length (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array<i64>#__uget (param $0 i32) (param $1 i32) (result i64)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 3
  i32.shl
  i32.add
  i64.load
 )
 (func $~lib/array/Array<i64>#set:buffer (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/array/Array<i64>#set:dataStart (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/array/Array<i64>#set:byteLength (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/array/Array<i64>#set:length_ (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/array/Array<i64>#push (param $0 i32) (param $1 i64) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.load offset=12
  local.set $2
  local.get $2
  i32.const 1
  i32.add
  local.set $3
  local.get $0
  local.get $3
  i32.const 3
  i32.const 1
  call $~lib/array/ensureCapacity
  i32.const 0
  drop
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 3
  i32.shl
  i32.add
  local.get $1
  i64.store
  local.get $0
  local.get $3
  call $~lib/array/Array<i64>#set:length_
  local.get $3
 )
 (func $~lib/array/Array<f64>#get:length (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array<f64>#__uget (param $0 i32) (param $1 i32) (result f64)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 3
  i32.shl
  i32.add
  f64.load
 )
 (func $~lib/array/Array<f64>#set:buffer (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/array/Array<f64>#set:dataStart (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/array/Array<f64>#set:byteLength (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/array/Array<f64>#set:length_ (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/array/Array<f64>#push (param $0 i32) (param $1 f64) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.load offset=12
  local.set $2
  local.get $2
  i32.const 1
  i32.add
  local.set $3
  local.get $0
  local.get $3
  i32.const 3
  i32.const 1
  call $~lib/array/ensureCapacity
  i32.const 0
  drop
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 3
  i32.shl
  i32.add
  local.get $1
  f64.store
  local.get $0
  local.get $3
  call $~lib/array/Array<f64>#set:length_
  local.get $3
 )
 (func $~lib/array/Array<bool>#get:length (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array<bool>#__uget (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 0
  i32.shl
  i32.add
  i32.load8_u
 )
 (func $~lib/array/Array<bool>#set:buffer (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/array/Array<bool>#set:dataStart (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/array/Array<bool>#set:byteLength (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/array/Array<bool>#set:length_ (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/array/Array<bool>#push (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.load offset=12
  local.set $2
  local.get $2
  i32.const 1
  i32.add
  local.set $3
  local.get $0
  local.get $3
  i32.const 0
  i32.const 1
  call $~lib/array/ensureCapacity
  i32.const 0
  drop
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 0
  i32.shl
  i32.add
  local.get $1
  i32.store8
  local.get $0
  local.get $3
  call $~lib/array/Array<bool>#set:length_
  local.get $3
 )
 (func $~lib/array/Array<~lib/string/String>#get:length (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array<~lib/string/String>#__uget (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
 )
 (func $~lib/array/Array<~lib/string/String>#set:length_ (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/array/Array<~lib/string/String>#push (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.load offset=12
  local.set $2
  local.get $2
  i32.const 1
  i32.add
  local.set $3
  local.get $0
  local.get $3
  i32.const 2
  i32.const 1
  call $~lib/array/ensureCapacity
  i32.const 1
  drop
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 1
  call $~lib/rt/itcms/__link
  local.get $0
  local.get $3
  call $~lib/array/Array<~lib/string/String>#set:length_
  local.get $3
 )
 (func $~lib/array/Array<~lib/array/Array<i64>>#__uset (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
  i32.const 1
  drop
  local.get $0
  local.get $2
  i32.const 1
  call $~lib/rt/itcms/__link
 )
 (func $~lib/array/Array<~lib/array/Array<i64>>#get:length (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array<~lib/array/Array<i64>>#__uget (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
 )
 (func $~lib/array/Array<~lib/array/Array<i64>>#set:buffer (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/array/Array<~lib/array/Array<i64>>#set:dataStart (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/array/Array<~lib/array/Array<i64>>#set:byteLength (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/array/Array<~lib/array/Array<i64>>#set:length_ (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/array/Array<~lib/array/Array<i64>>#push (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.load offset=12
  local.set $2
  local.get $2
  i32.const 1
  i32.add
  local.set $3
  local.get $0
  local.get $3
  i32.const 2
  i32.const 1
  call $~lib/array/ensureCapacity
  i32.const 1
  drop
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 1
  call $~lib/rt/itcms/__link
  local.get $0
  local.get $3
  call $~lib/array/Array<~lib/array/Array<i64>>#set:length_
  local.get $3
 )
 (func $~lib/array/Array<~lib/array/Array<f64>>#__uset (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
  i32.const 1
  drop
  local.get $0
  local.get $2
  i32.const 1
  call $~lib/rt/itcms/__link
 )
 (func $~lib/array/Array<~lib/array/Array<f64>>#get:length (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array<~lib/array/Array<f64>>#__uget (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
 )
 (func $~lib/array/Array<~lib/array/Array<f64>>#set:buffer (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/array/Array<~lib/array/Array<f64>>#set:dataStart (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/array/Array<~lib/array/Array<f64>>#set:byteLength (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/array/Array<~lib/array/Array<f64>>#set:length_ (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/array/Array<~lib/array/Array<f64>>#push (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.load offset=12
  local.set $2
  local.get $2
  i32.const 1
  i32.add
  local.set $3
  local.get $0
  local.get $3
  i32.const 2
  i32.const 1
  call $~lib/array/ensureCapacity
  i32.const 1
  drop
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 1
  call $~lib/rt/itcms/__link
  local.get $0
  local.get $3
  call $~lib/array/Array<~lib/array/Array<f64>>#set:length_
  local.get $3
 )
 (func $~lib/array/Array<~lib/array/Array<bool>>#__uset (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
  i32.const 1
  drop
  local.get $0
  local.get $2
  i32.const 1
  call $~lib/rt/itcms/__link
 )
 (func $~lib/array/Array<~lib/array/Array<bool>>#get:length (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array<~lib/array/Array<bool>>#__uget (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
 )
 (func $~lib/array/Array<~lib/array/Array<bool>>#set:buffer (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/array/Array<~lib/array/Array<bool>>#set:dataStart (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/array/Array<~lib/array/Array<bool>>#set:byteLength (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/array/Array<~lib/array/Array<bool>>#set:length_ (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/array/Array<~lib/array/Array<bool>>#push (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.load offset=12
  local.set $2
  local.get $2
  i32.const 1
  i32.add
  local.set $3
  local.get $0
  local.get $3
  i32.const 2
  i32.const 1
  call $~lib/array/ensureCapacity
  i32.const 1
  drop
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 1
  call $~lib/rt/itcms/__link
  local.get $0
  local.get $3
  call $~lib/array/Array<~lib/array/Array<bool>>#set:length_
  local.get $3
 )
 (func $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
  i32.const 1
  drop
  local.get $0
  local.get $2
  i32.const 1
  call $~lib/rt/itcms/__link
 )
 (func $~lib/array/Array<~lib/array/Array<~lib/string/String>>#get:length (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uget (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
 )
 (func $~lib/array/Array<~lib/array/Array<~lib/string/String>>#set:buffer (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/array/Array<~lib/array/Array<~lib/string/String>>#set:dataStart (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/array/Array<~lib/array/Array<~lib/string/String>>#set:byteLength (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/array/Array<~lib/array/Array<~lib/string/String>>#set:length_ (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/array/Array<~lib/array/Array<~lib/string/String>>#push (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.load offset=12
  local.set $2
  local.get $2
  i32.const 1
  i32.add
  local.set $3
  local.get $0
  local.get $3
  i32.const 2
  i32.const 1
  call $~lib/array/ensureCapacity
  i32.const 1
  drop
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 1
  call $~lib/rt/itcms/__link
  local.get $0
  local.get $3
  call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#set:length_
  local.get $3
 )
 (func $start:node_modules/@as-pect/assembly/assembly/internal/noOp~anonymous|0
  nop
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/call/__call (param $0 i32)
  i32.const 0
  global.set $~argumentsLength
  local.get $0
  i32.load
  call_indirect $0 (type $none_=>_none)
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/log/__ignoreLogs (param $0 i32)
  local.get $0
  i32.const 0
  i32.ne
  global.set $node_modules/@as-pect/assembly/assembly/internal/log/ignoreLogs
 )
 (func $~lib/rt/itcms/__pin (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  if
   local.get $0
   i32.const 20
   i32.sub
   local.set $1
   local.get $1
   call $~lib/rt/itcms/Object#get:color
   i32.const 3
   i32.eq
   if
    i32.const 8224
    i32.const 96
    i32.const 337
    i32.const 7
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   call $~lib/rt/itcms/Object#unlink
   local.get $1
   global.get $~lib/rt/itcms/pinSpace
   i32.const 3
   call $~lib/rt/itcms/Object#linkTo
  end
  local.get $0
 )
 (func $~lib/rt/itcms/__unpin (param $0 i32)
  (local $1 i32)
  local.get $0
  i32.eqz
  if
   return
  end
  local.get $0
  i32.const 20
  i32.sub
  local.set $1
  local.get $1
  call $~lib/rt/itcms/Object#get:color
  i32.const 3
  i32.ne
  if
   i32.const 8288
   i32.const 96
   i32.const 351
   i32.const 5
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/state
  i32.const 1
  i32.eq
  if
   local.get $1
   call $~lib/rt/itcms/Object#makeGray
  else
   local.get $1
   call $~lib/rt/itcms/Object#unlink
   local.get $1
   global.get $~lib/rt/itcms/fromSpace
   global.get $~lib/rt/itcms/white
   call $~lib/rt/itcms/Object#linkTo
  end
 )
 (func $~lib/rt/itcms/__collect
  (local $0 i32)
  i32.const 0
  drop
  global.get $~lib/rt/itcms/state
  i32.const 0
  i32.gt_s
  if
   loop $while-continue|0
    global.get $~lib/rt/itcms/state
    i32.const 0
    i32.ne
    local.set $0
    local.get $0
    if
     call $~lib/rt/itcms/step
     drop
     br $while-continue|0
    end
   end
  end
  call $~lib/rt/itcms/step
  drop
  loop $while-continue|1
   global.get $~lib/rt/itcms/state
   i32.const 0
   i32.ne
   local.set $0
   local.get $0
   if
    call $~lib/rt/itcms/step
    drop
    br $while-continue|1
   end
  end
  global.get $~lib/rt/itcms/total
  i64.extend_i32_u
  i32.const 200
  i64.extend_i32_u
  i64.mul
  i64.const 100
  i64.div_u
  i32.wrap_i64
  i32.const 1024
  i32.add
  global.set $~lib/rt/itcms/threshold
  i32.const 0
  drop
  i32.const 0
  drop
 )
 (func $~lib/rt/__visit_globals (param $0 i32)
  (local $1 i32)
  i32.const 224
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 432
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 3040
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 32
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 8224
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 8288
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 1856
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 2912
  local.get $0
  call $~lib/rt/itcms/__visit
  global.get $~lib/as-console/assembly/index/counts
  local.tee $1
  if
   local.get $1
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $~lib/as-console/assembly/index/timers
  local.tee $1
  if
   local.get $1
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $~lib/as-console/assembly/index/indent
  local.tee $1
  if
   local.get $1
   local.get $0
   call $~lib/rt/itcms/__visit
  end
 )
 (func $~lib/arraybuffer/ArrayBufferView~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  i32.load
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $~lib/as-variant/assembly/index/Variant#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  i32.load
  i32.const 12
  i32.ge_s
  if
   local.get $0
   local.set $2
   local.get $2
   i32.load offset=8
   local.set $2
   local.get $2
   if
    local.get $2
    local.get $1
    call $~lib/rt/itcms/__visit
   end
  end
 )
 (func $~lib/as-variant/assembly/index/Variant~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/as-variant/assembly/index/Variant#__visit
 )
 (func $~lib/map/Map<~lib/string/String,u32>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
  local.get $0
  i32.load offset=8
  local.set $2
  i32.const 1
  drop
  local.get $2
  local.set $3
  local.get $3
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  i32.add
  local.set $4
  loop $while-continue|0
   local.get $3
   local.get $4
   i32.lt_u
   local.set $5
   local.get $5
   if
    local.get $3
    local.set $6
    local.get $6
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     i32.const 1
     drop
     local.get $6
     i32.load
     local.set $7
     i32.const 0
     drop
     local.get $7
     local.get $1
     call $~lib/rt/itcms/__visit
     i32.const 0
     drop
    end
    local.get $3
    i32.const 12
    i32.add
    local.set $3
    br $while-continue|0
   end
  end
  local.get $2
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/map/Map<~lib/string/String,u32>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/map/Map<~lib/string/String,u32>#__visit
 )
 (func $~lib/map/Map<~lib/string/String,u64>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
  local.get $0
  i32.load offset=8
  local.set $2
  i32.const 1
  drop
  local.get $2
  local.set $3
  local.get $3
  local.get $0
  i32.load offset=16
  i32.const 24
  i32.mul
  i32.add
  local.set $4
  loop $while-continue|0
   local.get $3
   local.get $4
   i32.lt_u
   local.set $5
   local.get $5
   if
    local.get $3
    local.set $6
    local.get $6
    i32.load offset=16
    i32.const 1
    i32.and
    i32.eqz
    if
     i32.const 1
     drop
     local.get $6
     i32.load
     local.set $7
     i32.const 0
     drop
     local.get $7
     local.get $1
     call $~lib/rt/itcms/__visit
     i32.const 0
     drop
    end
    local.get $3
    i32.const 24
    i32.add
    local.set $3
    br $while-continue|0
   end
  end
  local.get $2
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/map/Map<~lib/string/String,u64>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/map/Map<~lib/string/String,u64>#__visit
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  i32.load offset=4
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $~lib/map/Map<usize,i32>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
  local.get $0
  i32.load offset=8
  local.set $2
  i32.const 0
  drop
  local.get $2
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/map/Map<usize,i32>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/map/Map<usize,i32>#__visit
 )
 (func $~lib/array/Array<usize>#__visit (param $0 i32) (param $1 i32)
  i32.const 0
  drop
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/array/Array<usize>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/array/Array<usize>#__visit
 )
 (func $~lib/array/Array<i32>#__visit (param $0 i32) (param $1 i32)
  i32.const 0
  drop
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/array/Array<i32>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/array/Array<i32>#__visit
 )
 (func $~lib/function/Function<%28%29=>void>#__visit (param $0 i32) (param $1 i32)
  local.get $0
  i32.load offset=4
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/function/Function<%28%29=>void>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/function/Function<%28%29=>void>#__visit
 )
 (func $~lib/staticarray/StaticArray<~lib/string/String>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  i32.const 1
  drop
  local.get $0
  local.set $2
  local.get $2
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.add
  local.set $3
  loop $while-continue|0
   local.get $2
   local.get $3
   i32.lt_u
   local.set $4
   local.get $4
   if
    local.get $2
    i32.load
    local.set $5
    local.get $5
    if
     local.get $5
     local.get $1
     call $~lib/rt/itcms/__visit
    end
    local.get $2
    i32.const 4
    i32.add
    local.set $2
    br $while-continue|0
   end
  end
 )
 (func $~lib/staticarray/StaticArray<~lib/string/String>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/staticarray/StaticArray<~lib/string/String>#__visit
 )
 (func $~lib/array/Array<u32>#__visit (param $0 i32) (param $1 i32)
  i32.const 0
  drop
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/array/Array<u32>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/array/Array<u32>#__visit
 )
 (func $~lib/as-string-sink/assembly/index/StringSink~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  i32.load
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $~lib/array/Array<u64>#__visit (param $0 i32) (param $1 i32)
  i32.const 0
  drop
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/array/Array<u64>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/array/Array<u64>#__visit
 )
 (func $~lib/array/Array<i64>#__visit (param $0 i32) (param $1 i32)
  i32.const 0
  drop
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/array/Array<i64>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/array/Array<i64>#__visit
 )
 (func $~lib/array/Array<f64>#__visit (param $0 i32) (param $1 i32)
  i32.const 0
  drop
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/array/Array<f64>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/array/Array<f64>#__visit
 )
 (func $~lib/array/Array<bool>#__visit (param $0 i32) (param $1 i32)
  i32.const 0
  drop
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/array/Array<bool>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/array/Array<bool>#__visit
 )
 (func $~lib/array/Array<~lib/string/String>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  i32.const 1
  drop
  local.get $0
  i32.load offset=4
  local.set $2
  local.get $2
  local.get $0
  i32.load offset=12
  i32.const 2
  i32.shl
  i32.add
  local.set $3
  loop $while-continue|0
   local.get $2
   local.get $3
   i32.lt_u
   local.set $4
   local.get $4
   if
    local.get $2
    i32.load
    local.set $5
    local.get $5
    if
     local.get $5
     local.get $1
     call $~lib/rt/itcms/__visit
    end
    local.get $2
    i32.const 4
    i32.add
    local.set $2
    br $while-continue|0
   end
  end
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/array/Array<~lib/string/String>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/array/Array<~lib/string/String>#__visit
 )
 (func $~lib/array/Array<~lib/array/Array<i64>>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  i32.const 1
  drop
  local.get $0
  i32.load offset=4
  local.set $2
  local.get $2
  local.get $0
  i32.load offset=12
  i32.const 2
  i32.shl
  i32.add
  local.set $3
  loop $while-continue|0
   local.get $2
   local.get $3
   i32.lt_u
   local.set $4
   local.get $4
   if
    local.get $2
    i32.load
    local.set $5
    local.get $5
    if
     local.get $5
     local.get $1
     call $~lib/rt/itcms/__visit
    end
    local.get $2
    i32.const 4
    i32.add
    local.set $2
    br $while-continue|0
   end
  end
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/array/Array<~lib/array/Array<i64>>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/array/Array<~lib/array/Array<i64>>#__visit
 )
 (func $~lib/array/Array<~lib/array/Array<f64>>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  i32.const 1
  drop
  local.get $0
  i32.load offset=4
  local.set $2
  local.get $2
  local.get $0
  i32.load offset=12
  i32.const 2
  i32.shl
  i32.add
  local.set $3
  loop $while-continue|0
   local.get $2
   local.get $3
   i32.lt_u
   local.set $4
   local.get $4
   if
    local.get $2
    i32.load
    local.set $5
    local.get $5
    if
     local.get $5
     local.get $1
     call $~lib/rt/itcms/__visit
    end
    local.get $2
    i32.const 4
    i32.add
    local.set $2
    br $while-continue|0
   end
  end
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/array/Array<~lib/array/Array<f64>>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/array/Array<~lib/array/Array<f64>>#__visit
 )
 (func $~lib/array/Array<~lib/array/Array<bool>>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  i32.const 1
  drop
  local.get $0
  i32.load offset=4
  local.set $2
  local.get $2
  local.get $0
  i32.load offset=12
  i32.const 2
  i32.shl
  i32.add
  local.set $3
  loop $while-continue|0
   local.get $2
   local.get $3
   i32.lt_u
   local.set $4
   local.get $4
   if
    local.get $2
    i32.load
    local.set $5
    local.get $5
    if
     local.get $5
     local.get $1
     call $~lib/rt/itcms/__visit
    end
    local.get $2
    i32.const 4
    i32.add
    local.set $2
    br $while-continue|0
   end
  end
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/array/Array<~lib/array/Array<bool>>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/array/Array<~lib/array/Array<bool>>#__visit
 )
 (func $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  i32.const 1
  drop
  local.get $0
  i32.load offset=4
  local.set $2
  local.get $2
  local.get $0
  i32.load offset=12
  i32.const 2
  i32.shl
  i32.add
  local.set $3
  loop $while-continue|0
   local.get $2
   local.get $3
   i32.lt_u
   local.set $4
   local.get $4
   if
    local.get $2
    i32.load
    local.set $5
    local.get $5
    if
     local.get $5
     local.get $1
     call $~lib/rt/itcms/__visit
    end
    local.get $2
    i32.const 4
    i32.add
    local.set $2
    br $while-continue|0
   end
  end
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/array/Array<~lib/array/Array<~lib/string/String>>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__visit
 )
 (func $~lib/rt/__visit_members (param $0 i32) (param $1 i32)
  block $invalid
   block $~lib/array/Array<~lib/array/Array<~lib/string/String>>
    block $~lib/array/Array<~lib/array/Array<bool>>
     block $~lib/array/Array<~lib/array/Array<f64>>
      block $~lib/array/Array<~lib/array/Array<i64>>
       block $~lib/array/Array<~lib/string/String>
        block $~lib/array/Array<bool>
         block $~lib/array/Array<f64>
          block $~lib/array/Array<i64>
           block $~lib/array/Array<u64>
            block $~lib/as-string-sink/assembly/index/StringSink
             block $~lib/array/Array<u32>
              block $~lib/staticarray/StaticArray<~lib/string/String>
               block $~lib/function/Function<%28%29=>void>
                block $~lib/array/Array<i32>
                 block $~lib/array/Array<usize>
                  block $~lib/map/Map<usize,i32>
                   block $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>
                    block $~lib/map/Map<~lib/string/String,u64>
                     block $~lib/map/Map<~lib/string/String,u32>
                      block $~lib/as-variant/assembly/index/Variant
                       block $~lib/arraybuffer/ArrayBufferView
                        block $~lib/string/String
                         block $~lib/arraybuffer/ArrayBuffer
                          local.get $0
                          i32.const 8
                          i32.sub
                          i32.load
                          br_table $~lib/arraybuffer/ArrayBuffer $~lib/string/String $~lib/arraybuffer/ArrayBufferView $~lib/as-variant/assembly/index/Variant $~lib/map/Map<~lib/string/String,u32> $~lib/map/Map<~lib/string/String,u64> $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String> $~lib/map/Map<usize,i32> $~lib/array/Array<usize> $~lib/array/Array<i32> $~lib/function/Function<%28%29=>void> $~lib/staticarray/StaticArray<~lib/string/String> $~lib/array/Array<u32> $~lib/as-string-sink/assembly/index/StringSink $~lib/array/Array<u64> $~lib/array/Array<i64> $~lib/array/Array<f64> $~lib/array/Array<bool> $~lib/array/Array<~lib/string/String> $~lib/array/Array<~lib/array/Array<i64>> $~lib/array/Array<~lib/array/Array<f64>> $~lib/array/Array<~lib/array/Array<bool>> $~lib/array/Array<~lib/array/Array<~lib/string/String>> $invalid
                         end
                         return
                        end
                        return
                       end
                       local.get $0
                       local.get $1
                       call $~lib/arraybuffer/ArrayBufferView~visit
                       return
                      end
                      local.get $0
                      local.get $1
                      call $~lib/as-variant/assembly/index/Variant~visit
                      return
                     end
                     local.get $0
                     local.get $1
                     call $~lib/map/Map<~lib/string/String,u32>~visit
                     return
                    end
                    local.get $0
                    local.get $1
                    call $~lib/map/Map<~lib/string/String,u64>~visit
                    return
                   end
                   local.get $0
                   local.get $1
                   call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>~visit
                   return
                  end
                  local.get $0
                  local.get $1
                  call $~lib/map/Map<usize,i32>~visit
                  return
                 end
                 local.get $0
                 local.get $1
                 call $~lib/array/Array<usize>~visit
                 return
                end
                local.get $0
                local.get $1
                call $~lib/array/Array<i32>~visit
                return
               end
               local.get $0
               local.get $1
               call $~lib/function/Function<%28%29=>void>~visit
               return
              end
              local.get $0
              local.get $1
              call $~lib/staticarray/StaticArray<~lib/string/String>~visit
              return
             end
             local.get $0
             local.get $1
             call $~lib/array/Array<u32>~visit
             return
            end
            local.get $0
            local.get $1
            call $~lib/as-string-sink/assembly/index/StringSink~visit
            return
           end
           local.get $0
           local.get $1
           call $~lib/array/Array<u64>~visit
           return
          end
          local.get $0
          local.get $1
          call $~lib/array/Array<i64>~visit
          return
         end
         local.get $0
         local.get $1
         call $~lib/array/Array<f64>~visit
         return
        end
        local.get $0
        local.get $1
        call $~lib/array/Array<bool>~visit
        return
       end
       local.get $0
       local.get $1
       call $~lib/array/Array<~lib/string/String>~visit
       return
      end
      local.get $0
      local.get $1
      call $~lib/array/Array<~lib/array/Array<i64>>~visit
      return
     end
     local.get $0
     local.get $1
     call $~lib/array/Array<~lib/array/Array<f64>>~visit
     return
    end
    local.get $0
    local.get $1
    call $~lib/array/Array<~lib/array/Array<bool>>~visit
    return
   end
   local.get $0
   local.get $1
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>~visit
   return
  end
  unreachable
 )
 (func $~start
  global.get $~started
  if
   return
  end
  i32.const 1
  global.set $~started
  call $start:assembly/__tests__/as-json.spec
 )
 (func $~stack_check
  global.get $~lib/memory/__stack_pointer
  global.get $~lib/memory/__data_end
  i32.lt_s
  if
   i32.const 24928
   i32.const 24976
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $start:assembly/chars
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  i32.const 576
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $assembly/chars/commaCode
  i32.const 608
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $assembly/chars/quoteCode
  i32.const 640
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $assembly/chars/backSlashCode
  i32.const 672
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $assembly/chars/forwardSlashCode
  i32.const 704
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $assembly/chars/leftBraceCode
  i32.const 736
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $assembly/chars/rightBraceCode
  i32.const 768
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $assembly/chars/leftBracketCode
  i32.const 800
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $assembly/chars/rightBracketCode
  i32.const 832
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $assembly/chars/colonCode
  i32.const 864
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $assembly/chars/tCode
  i32.const 896
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $assembly/chars/rCode
  i32.const 928
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $assembly/chars/uCode
  i32.const 960
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $assembly/chars/eCode
  i32.const 992
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $assembly/chars/fCode
  i32.const 1024
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $assembly/chars/aCode
  i32.const 1056
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $assembly/chars/lCode
  i32.const 1088
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $assembly/chars/sCode
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<~lib/string/String> (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  i32.const 1
  drop
  local.get $0
  i32.const 0
  i32.eq
  if
   i32.const 1
   i32.const 0
   i32.const 0
   i32.const 0
   i32.const 0
   i32.const 0
   i32.const 4
   i32.const 1
   i32.const 1
   i32.const 3008
   local.set $3
   global.get $~lib/memory/__stack_pointer
   local.get $3
   i32.store
   local.get $3
   i32.const 0
   i32.const 0
   i32.const 1
   call $node_modules/@as-pect/assembly/assembly/internal/Reflect/createReflectedValue
   local.set $3
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $3
   return
  end
  i32.const 0
  i32.eqz
  drop
  local.get $1
  local.get $0
  call $~lib/map/Map<usize,i32>#has
  if
   local.get $1
   local.get $0
   call $~lib/map/Map<usize,i32>#get
   local.set $3
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $3
   return
  end
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  i32.const 0
  i32.const 0
  i32.const 0
  i32.const 0
  local.get $0
  i32.const 0
  local.get $0
  call $~lib/string/String#get:length
  i32.const 2
  i32.const 1
  i32.const 3008
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  local.get $0
  i32.const 0
  i32.const 1
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/createReflectedValue
  local.set $2
  local.get $1
  local.get $0
  local.get $2
  call $~lib/map/Map<usize,i32>#set
  drop
  local.get $2
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
  return
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/referencesEqual<~lib/string/String> (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  local.set $4
  local.get $1
  local.set $5
  local.get $3
  call $~lib/array/Array<usize>#get:length
  local.set $6
  local.get $6
  i32.const 1
  i32.and
  i32.const 0
  i32.eq
  i32.const 3152
  local.set $7
  global.get $~lib/memory/__stack_pointer
  local.get $7
  i32.store
  local.get $7
  call $node_modules/@as-pect/assembly/assembly/internal/assert/assert
  i32.const 1
  drop
  global.get $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.FAILED_MATCH
  local.set $7
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $7
  return
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#toBe (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  local.tee $3
  i32.store
  i32.const 0
  local.set $4
  i32.const 1
  drop
  i32.const 0
  drop
  local.get $3
  local.get $1
  call $~lib/string/String.__eq
  local.set $4
  local.get $0
  i32.load
  local.set $5
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Actual/Actual.report<~lib/string/String>
  i32.const 0
  i32.eqz
  drop
  local.get $5
  i32.eqz
  if (result i32)
   local.get $3
   i32.const 0
   i32.ne
  else
   i32.const 0
  end
  if (result i32)
   local.get $1
   i32.const 0
   i32.ne
  else
   i32.const 0
  end
  if (result i32)
   local.get $3
   local.get $1
   i32.const 0
   i32.const 2
   global.set $~argumentsLength
   i32.const 0
   call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.equals<~lib/string/String>@varargs
   global.get $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.SUCCESSFUL_MATCH
   i32.eq
  else
   i32.const 0
  end
  if
   i32.const 3440
   local.set $6
   global.get $~lib/memory/__stack_pointer
   local.get $6
   i32.store offset=4
   local.get $6
   i32.const 0
   call $node_modules/@as-pect/assembly/assembly/internal/Expected/Expected.report<~lib/string/String>
  else
   local.get $1
   local.get $5
   call $node_modules/@as-pect/assembly/assembly/internal/Expected/Expected.report<~lib/string/String>
  end
  local.get $4
  local.get $5
  i32.xor
  local.get $2
  call $node_modules/@as-pect/assembly/assembly/internal/assert/assert
  call $node_modules/@as-pect/assembly/assembly/internal/Actual/Actual.clear
  call $node_modules/@as-pect/assembly/assembly/internal/Expected/Expected.clear
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/__tests__/as-json.spec/canSerde<i32> (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/index/JSON.stringify<i32>
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  call $assembly/index/JSON.parse<i32>
  call $assembly/index/JSON.stringify<i32>
  local.tee $2
  i32.store offset=4
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/string/String>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=8
  local.get $3
  local.get $2
  i32.const 544
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#toBe
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/__tests__/as-json.spec/canSerde<u32> (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/index/JSON.stringify<u32>
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  call $assembly/index/JSON.parse<u32>
  call $assembly/index/JSON.stringify<u32>
  local.tee $2
  i32.store offset=4
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/string/String>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=8
  local.get $3
  local.get $2
  i32.const 544
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#toBe
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/__tests__/as-json.spec/canSerde<u64> (param $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/index/JSON.stringify<u64>
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  call $assembly/index/JSON.parse<u64>
  call $assembly/index/JSON.stringify<u64>
  local.tee $2
  i32.store offset=4
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/string/String>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=8
  local.get $3
  local.get $2
  i32.const 544
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#toBe
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/__tests__/as-json.spec/canSerde<i64> (param $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/index/JSON.stringify<i64>
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  call $assembly/index/JSON.parse<i64>
  call $assembly/index/JSON.stringify<i64>
  local.tee $2
  i32.store offset=4
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/string/String>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=8
  local.get $3
  local.get $2
  i32.const 544
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#toBe
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/__tests__/as-json.spec/canSerde<f64> (param $0 f64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/index/JSON.stringify<f64>
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  call $assembly/index/JSON.parse<f64>
  call $assembly/index/JSON.stringify<f64>
  local.tee $2
  i32.store offset=4
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/string/String>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=8
  local.get $3
  local.get $2
  i32.const 544
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#toBe
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/index/JSON.parse<bool> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  i32.const 0
  drop
  i32.const 1
  drop
  block $assembly/index/parseBoolean<bool>|inlined.0 (result i32)
   local.get $0
   local.set $2
   local.get $2
   call $~lib/string/String#get:length
   i32.const 3
   i32.gt_s
   if (result i32)
    local.get $2
    i32.const 5072
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    call $~lib/string/String#startsWith
   else
    i32.const 0
   end
   if
    i32.const 1
    br $assembly/index/parseBoolean<bool>|inlined.0
   else
    local.get $2
    call $~lib/string/String#get:length
    i32.const 4
    i32.gt_s
    if (result i32)
     local.get $2
     i32.const 5104
     local.set $4
     global.get $~lib/memory/__stack_pointer
     local.get $4
     i32.store
     local.get $4
     i32.const 0
     call $~lib/string/String#startsWith
    else
     i32.const 0
    end
    if
     i32.const 0
     br $assembly/index/parseBoolean<bool>|inlined.0
    else
     local.get $2
     local.set $3
     i32.const 5248
     local.set $4
     global.get $~lib/memory/__stack_pointer
     local.get $4
     i32.store offset=4
     local.get $4
     i32.const 1
     local.get $3
     call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
     i32.const 5248
     local.set $4
     global.get $~lib/memory/__stack_pointer
     local.get $4
     i32.store offset=4
     local.get $4
     i32.const 544
     local.set $4
     global.get $~lib/memory/__stack_pointer
     local.get $4
     i32.store
     local.get $4
     call $~lib/staticarray/StaticArray<~lib/string/String>#join
     i32.const 5280
     i32.const 140
     i32.const 8
     call $~lib/builtins/abort
     unreachable
    end
    unreachable
   end
   unreachable
  end
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
  return
 )
 (func $assembly/__tests__/as-json.spec/canSerde<bool> (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/index/JSON.stringify<bool>
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  call $assembly/index/JSON.parse<bool>
  call $assembly/index/JSON.stringify<bool>
  local.tee $2
  i32.store offset=4
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/string/String>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=8
  local.get $3
  local.get $2
  i32.const 544
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#toBe
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/index/JSON.stringify<~lib/string/String> (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 24
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 24
  memory.fill
  i32.const 1
  drop
  i32.const 608
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=8
  local.get $1
  local.get $0
  i32.const 608
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=16
  local.get $1
  i32.const 5488
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=20
  local.get $1
  call $~lib/string/String#replaceAll
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=12
  local.get $1
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store
  local.get $1
  i32.const 608
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 24
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
  return
 )
 (func $assembly/index/JSON.parse<~lib/string/String> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  i32.const 1
  drop
  local.get $0
  local.set $2
  local.get $2
  i32.const 1
  local.get $2
  call $~lib/string/String#get:length
  i32.const 1
  i32.sub
  call $~lib/string/String#slice
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  i32.const 5488
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  i32.const 608
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=8
  local.get $3
  call $~lib/string/String#replaceAll
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
  return
 )
 (func $assembly/__tests__/as-json.spec/canSerde<~lib/string/String> (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/index/JSON.stringify<~lib/string/String>
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  call $assembly/index/JSON.parse<~lib/string/String>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  call $assembly/index/JSON.stringify<~lib/string/String>
  local.tee $2
  i32.store offset=8
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/string/String>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  local.get $2
  i32.const 544
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#toBe
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $start:assembly/__tests__/as-json.spec~anonymous|0~anonymous|3
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  i32.const 5440
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  call $assembly/__tests__/as-json.spec/canSerde<~lib/string/String>
  i32.const 5520
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  call $assembly/__tests__/as-json.spec/canSerde<~lib/string/String>
  i32.const 5600
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  call $assembly/__tests__/as-json.spec/canSerde<~lib/string/String>
  i32.const 5728
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  call $assembly/__tests__/as-json.spec/canSerde<~lib/string/String>
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $start:assembly/__tests__/as-json.spec~anonymous|0
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  i32.const 1168
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 3520
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $0
  call $node_modules/@as-pect/assembly/assembly/internal/Test/it
  i32.const 3552
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 4976
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $0
  call $node_modules/@as-pect/assembly/assembly/internal/Test/it
  i32.const 5008
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 5344
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $0
  call $node_modules/@as-pect/assembly/assembly/internal/Test/it
  i32.const 5376
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 5920
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $0
  call $node_modules/@as-pect/assembly/assembly/internal/Test/it
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/index/JSON.stringify<~lib/array/Array<u32>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 768
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  global.get $~lib/as-string-sink/assembly/index/MIN_BUFFER_LEN
  call $~lib/as-string-sink/assembly/index/StringSink#constructor
  local.tee $1
  i32.store offset=4
  local.get $0
  call $~lib/array/Array<u32>#get:length
  i32.const 0
  i32.eq
  if
   i32.const 6144
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   return
  end
  i32.const 0
  local.set $2
  loop $for-loop|0
   local.get $2
   local.get $0
   call $~lib/array/Array<u32>#get:length
   i32.const 1
   i32.sub
   i32.lt_s
   local.set $3
   local.get $3
   if
    local.get $1
    local.get $0
    local.get $2
    call $~lib/array/Array<u32>#__uget
    call $assembly/index/JSON.stringify<u32>
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $1
    i32.const 576
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $for-loop|0
   end
  end
  local.get $1
  local.get $0
  local.get $0
  call $~lib/array/Array<u32>#get:length
  i32.const 1
  i32.sub
  call $~lib/array/Array<u32>#__uget
  call $assembly/index/JSON.stringify<u32>
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  i32.const 800
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  call $~lib/as-string-sink/assembly/index/StringSink#toString
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
  return
 )
 (func $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<u32>> (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/index/JSON.stringify<~lib/array/Array<u32>>
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  call $assembly/index/JSON.parse<~lib/array/Array<u32>>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  call $assembly/index/JSON.stringify<~lib/array/Array<u32>>
  local.tee $2
  i32.store offset=8
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/string/String>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  local.get $2
  i32.const 544
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#toBe
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/index/JSON.stringify<~lib/array/Array<u64>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 768
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  global.get $~lib/as-string-sink/assembly/index/MIN_BUFFER_LEN
  call $~lib/as-string-sink/assembly/index/StringSink#constructor
  local.tee $1
  i32.store offset=4
  local.get $0
  call $~lib/array/Array<u64>#get:length
  i32.const 0
  i32.eq
  if
   i32.const 6144
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   return
  end
  i32.const 0
  local.set $2
  loop $for-loop|0
   local.get $2
   local.get $0
   call $~lib/array/Array<u64>#get:length
   i32.const 1
   i32.sub
   i32.lt_s
   local.set $3
   local.get $3
   if
    local.get $1
    local.get $0
    local.get $2
    call $~lib/array/Array<u64>#__uget
    call $assembly/index/JSON.stringify<u64>
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $1
    i32.const 576
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $for-loop|0
   end
  end
  local.get $1
  local.get $0
  local.get $0
  call $~lib/array/Array<u64>#get:length
  i32.const 1
  i32.sub
  call $~lib/array/Array<u64>#__uget
  call $assembly/index/JSON.stringify<u64>
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  i32.const 800
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  call $~lib/as-string-sink/assembly/index/StringSink#toString
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
  return
 )
 (func $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<u64>> (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/index/JSON.stringify<~lib/array/Array<u64>>
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  call $assembly/index/JSON.parse<~lib/array/Array<u64>>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  call $assembly/index/JSON.stringify<~lib/array/Array<u64>>
  local.tee $2
  i32.store offset=8
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/string/String>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  local.get $2
  i32.const 544
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#toBe
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/index/JSON.stringify<~lib/array/Array<i32>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 768
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  global.get $~lib/as-string-sink/assembly/index/MIN_BUFFER_LEN
  call $~lib/as-string-sink/assembly/index/StringSink#constructor
  local.tee $1
  i32.store offset=4
  local.get $0
  call $~lib/array/Array<i32>#get:length
  i32.const 0
  i32.eq
  if
   i32.const 6144
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   return
  end
  i32.const 0
  local.set $2
  loop $for-loop|0
   local.get $2
   local.get $0
   call $~lib/array/Array<i32>#get:length
   i32.const 1
   i32.sub
   i32.lt_s
   local.set $3
   local.get $3
   if
    local.get $1
    local.get $0
    local.get $2
    call $~lib/array/Array<i32>#__uget
    call $assembly/index/JSON.stringify<i32>
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $1
    i32.const 576
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $for-loop|0
   end
  end
  local.get $1
  local.get $0
  local.get $0
  call $~lib/array/Array<i32>#get:length
  i32.const 1
  i32.sub
  call $~lib/array/Array<i32>#__uget
  call $assembly/index/JSON.stringify<i32>
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  i32.const 800
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  call $~lib/as-string-sink/assembly/index/StringSink#toString
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
  return
 )
 (func $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<i32>> (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/index/JSON.stringify<~lib/array/Array<i32>>
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  call $assembly/index/JSON.parse<~lib/array/Array<i32>>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  call $assembly/index/JSON.stringify<~lib/array/Array<i32>>
  local.tee $2
  i32.store offset=8
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/string/String>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  local.get $2
  i32.const 544
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#toBe
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/index/JSON.stringify<~lib/array/Array<i64>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 768
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  global.get $~lib/as-string-sink/assembly/index/MIN_BUFFER_LEN
  call $~lib/as-string-sink/assembly/index/StringSink#constructor
  local.tee $1
  i32.store offset=4
  local.get $0
  call $~lib/array/Array<i64>#get:length
  i32.const 0
  i32.eq
  if
   i32.const 6144
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   return
  end
  i32.const 0
  local.set $2
  loop $for-loop|0
   local.get $2
   local.get $0
   call $~lib/array/Array<i64>#get:length
   i32.const 1
   i32.sub
   i32.lt_s
   local.set $3
   local.get $3
   if
    local.get $1
    local.get $0
    local.get $2
    call $~lib/array/Array<i64>#__uget
    call $assembly/index/JSON.stringify<i64>
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $1
    i32.const 576
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $for-loop|0
   end
  end
  local.get $1
  local.get $0
  local.get $0
  call $~lib/array/Array<i64>#get:length
  i32.const 1
  i32.sub
  call $~lib/array/Array<i64>#__uget
  call $assembly/index/JSON.stringify<i64>
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  i32.const 800
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  call $~lib/as-string-sink/assembly/index/StringSink#toString
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
  return
 )
 (func $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<i64>> (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/index/JSON.stringify<~lib/array/Array<i64>>
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  call $assembly/index/JSON.parse<~lib/array/Array<i64>>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  call $assembly/index/JSON.stringify<~lib/array/Array<i64>>
  local.tee $2
  i32.store offset=8
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/string/String>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  local.get $2
  i32.const 544
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#toBe
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $start:assembly/__tests__/as-json.spec~anonymous|1~anonymous|0
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  i32.const 3
  i32.const 2
  i32.const 12
  i32.const 6112
  call $~lib/rt/__newArray
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<u32>>
  i32.const 3
  i32.const 3
  i32.const 14
  i32.const 6224
  call $~lib/rt/__newArray
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<u64>>
  i32.const 5
  i32.const 2
  i32.const 9
  i32.const 6272
  call $~lib/rt/__newArray
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<i32>>
  i32.const 5
  i32.const 3
  i32.const 15
  i32.const 6320
  call $~lib/rt/__newArray
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<i64>>
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/index/JSON.stringify<~lib/array/Array<f64>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 768
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  global.get $~lib/as-string-sink/assembly/index/MIN_BUFFER_LEN
  call $~lib/as-string-sink/assembly/index/StringSink#constructor
  local.tee $1
  i32.store offset=4
  local.get $0
  call $~lib/array/Array<f64>#get:length
  i32.const 0
  i32.eq
  if
   i32.const 6144
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   return
  end
  i32.const 0
  local.set $2
  loop $for-loop|0
   local.get $2
   local.get $0
   call $~lib/array/Array<f64>#get:length
   i32.const 1
   i32.sub
   i32.lt_s
   local.set $3
   local.get $3
   if
    local.get $1
    local.get $0
    local.get $2
    call $~lib/array/Array<f64>#__uget
    call $assembly/index/JSON.stringify<f64>
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $1
    i32.const 576
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $for-loop|0
   end
  end
  local.get $1
  local.get $0
  local.get $0
  call $~lib/array/Array<f64>#get:length
  i32.const 1
  i32.sub
  call $~lib/array/Array<f64>#__uget
  call $assembly/index/JSON.stringify<f64>
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  i32.const 800
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  call $~lib/as-string-sink/assembly/index/StringSink#toString
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
  return
 )
 (func $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<f64>> (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/index/JSON.stringify<~lib/array/Array<f64>>
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  call $assembly/index/JSON.parse<~lib/array/Array<f64>>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  call $assembly/index/JSON.stringify<~lib/array/Array<f64>>
  local.tee $2
  i32.store offset=8
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/string/String>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  local.get $2
  i32.const 544
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#toBe
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $start:assembly/__tests__/as-json.spec~anonymous|1~anonymous|1
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  i32.const 7
  i32.const 3
  i32.const 16
  i32.const 6496
  call $~lib/rt/__newArray
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<f64>>
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/index/JSON.stringify<~lib/array/Array<bool>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 768
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  global.get $~lib/as-string-sink/assembly/index/MIN_BUFFER_LEN
  call $~lib/as-string-sink/assembly/index/StringSink#constructor
  local.tee $1
  i32.store offset=4
  local.get $0
  call $~lib/array/Array<bool>#get:length
  i32.const 0
  i32.eq
  if
   i32.const 6144
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   return
  end
  i32.const 0
  local.set $2
  loop $for-loop|0
   local.get $2
   local.get $0
   call $~lib/array/Array<bool>#get:length
   i32.const 1
   i32.sub
   i32.lt_s
   local.set $3
   local.get $3
   if
    local.get $1
    local.get $0
    local.get $2
    call $~lib/array/Array<bool>#__uget
    call $assembly/index/JSON.stringify<bool>
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $1
    i32.const 576
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $for-loop|0
   end
  end
  local.get $1
  local.get $0
  local.get $0
  call $~lib/array/Array<bool>#get:length
  i32.const 1
  i32.sub
  call $~lib/array/Array<bool>#__uget
  call $assembly/index/JSON.stringify<bool>
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  i32.const 800
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  call $~lib/as-string-sink/assembly/index/StringSink#toString
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
  return
 )
 (func $assembly/index/JSON.parse<~lib/array/Array<bool>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 20
  memory.fill
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  block $assembly/index/parseArray<~lib/array/Array<bool>>|inlined.0 (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $0
   call $~lib/string/String#trimStart
   local.tee $2
   i32.store
   i32.const 0
   drop
   i32.const 1
   drop
   local.get $2
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.const 0
   call $~lib/array/Array<bool>#constructor
   local.tee $5
   i32.store offset=4
   i32.const 1
   local.set $6
   i32.const 0
   local.set $7
   i32.const 1
   local.set $8
   loop $for-loop|0
    local.get $8
    local.get $4
    call $~lib/string/String#get:length
    i32.const 1
    i32.sub
    i32.lt_s
    local.set $9
    local.get $9
    if
     local.get $4
     local.set $11
     local.get $8
     local.set $10
     local.get $11
     local.get $10
     i32.const 1
     i32.shl
     i32.add
     i32.load16_u
     local.set $7
     local.get $7
     global.get $assembly/chars/tCode
     i32.eq
     if (result i32)
      i32.const 1
     else
      local.get $7
      global.get $assembly/chars/fCode
      i32.eq
     end
     if
      local.get $8
      local.set $6
     else
      local.get $7
      global.get $assembly/chars/eCode
      i32.eq
      if
       local.get $8
       i32.const 1
       i32.add
       local.set $8
       local.get $5
       block $assembly/index/parseBoolean<bool>|inlined.1 (result i32)
        global.get $~lib/memory/__stack_pointer
        local.get $4
        local.get $6
        local.get $8
        call $~lib/string/String#slice
        local.tee $10
        i32.store offset=8
        local.get $10
        call $~lib/string/String#get:length
        i32.const 3
        i32.gt_s
        if (result i32)
         local.get $10
         i32.const 5072
         local.set $12
         global.get $~lib/memory/__stack_pointer
         local.get $12
         i32.store offset=12
         local.get $12
         i32.const 0
         call $~lib/string/String#startsWith
        else
         i32.const 0
        end
        if
         i32.const 1
         br $assembly/index/parseBoolean<bool>|inlined.1
        else
         local.get $10
         call $~lib/string/String#get:length
         i32.const 4
         i32.gt_s
         if (result i32)
          local.get $10
          i32.const 5104
          local.set $12
          global.get $~lib/memory/__stack_pointer
          local.get $12
          i32.store offset=12
          local.get $12
          i32.const 0
          call $~lib/string/String#startsWith
         else
          i32.const 0
         end
         if
          i32.const 0
          br $assembly/index/parseBoolean<bool>|inlined.1
         else
          local.get $10
          local.set $11
          i32.const 6720
          local.set $12
          global.get $~lib/memory/__stack_pointer
          local.get $12
          i32.store offset=16
          local.get $12
          i32.const 1
          local.get $11
          call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
          i32.const 6720
          local.set $12
          global.get $~lib/memory/__stack_pointer
          local.get $12
          i32.store offset=16
          local.get $12
          i32.const 544
          local.set $12
          global.get $~lib/memory/__stack_pointer
          local.get $12
          i32.store offset=12
          local.get $12
          call $~lib/staticarray/StaticArray<~lib/string/String>#join
          i32.const 5280
          i32.const 140
          i32.const 8
          call $~lib/builtins/abort
          unreachable
         end
         unreachable
        end
        unreachable
       end
       call $~lib/array/Array<bool>#push
       drop
      end
     end
     local.get $8
     i32.const 1
     i32.add
     local.set $8
     br $for-loop|0
    end
   end
   local.get $5
   br $assembly/index/parseArray<~lib/array/Array<bool>>|inlined.0
  end
  local.set $12
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $12
  return
 )
 (func $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<bool>> (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/index/JSON.stringify<~lib/array/Array<bool>>
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  call $assembly/index/JSON.parse<~lib/array/Array<bool>>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  call $assembly/index/JSON.stringify<~lib/array/Array<bool>>
  local.tee $2
  i32.store offset=8
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/string/String>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  local.get $2
  i32.const 544
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#toBe
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $start:assembly/__tests__/as-json.spec~anonymous|1~anonymous|2
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  i32.const 2
  i32.const 0
  i32.const 17
  i32.const 6688
  call $~lib/rt/__newArray
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<bool>>
  i32.const 2
  i32.const 0
  i32.const 17
  i32.const 6752
  call $~lib/rt/__newArray
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<bool>>
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/index/JSON.stringify<~lib/array/Array<~lib/string/String>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 768
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  global.get $~lib/as-string-sink/assembly/index/MIN_BUFFER_LEN
  call $~lib/as-string-sink/assembly/index/StringSink#constructor
  local.tee $1
  i32.store offset=4
  local.get $0
  call $~lib/array/Array<~lib/string/String>#get:length
  i32.const 0
  i32.eq
  if
   i32.const 6144
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   return
  end
  i32.const 0
  local.set $2
  loop $for-loop|0
   local.get $2
   local.get $0
   call $~lib/array/Array<~lib/string/String>#get:length
   i32.const 1
   i32.sub
   i32.lt_s
   local.set $3
   local.get $3
   if
    local.get $1
    local.get $0
    local.get $2
    call $~lib/array/Array<~lib/string/String>#__uget
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    call $assembly/index/JSON.stringify<~lib/string/String>
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $1
    i32.const 576
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $for-loop|0
   end
  end
  local.get $1
  local.get $0
  local.get $0
  call $~lib/array/Array<~lib/string/String>#get:length
  i32.const 1
  i32.sub
  call $~lib/array/Array<~lib/string/String>#__uget
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  call $assembly/index/JSON.stringify<~lib/string/String>
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  i32.const 800
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  call $~lib/as-string-sink/assembly/index/StringSink#toString
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
  return
 )
 (func $assembly/index/JSON.parse<~lib/array/Array<~lib/string/String>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 20
  memory.fill
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  block $assembly/index/parseArray<~lib/array/Array<~lib/string/String>>|inlined.0 (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $0
   call $~lib/string/String#trimStart
   local.tee $2
   i32.store
   i32.const 1
   drop
   local.get $2
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.const 2
   i32.const 18
   i32.const 7264
   call $~lib/rt/__newArray
   local.tee $6
   i32.store offset=4
   i32.const 0
   local.set $5
   i32.const 0
   local.set $7
   i32.const 1
   local.set $8
   loop $for-loop|0
    local.get $8
    local.get $4
    call $~lib/string/String#get:length
    i32.const 1
    i32.sub
    i32.lt_s
    local.set $9
    local.get $9
    if
     local.get $4
     local.set $11
     local.get $8
     local.set $10
     local.get $11
     local.get $10
     i32.const 1
     i32.shl
     i32.add
     i32.load16_u
     global.get $assembly/chars/quoteCode
     i32.eq
     if
      local.get $7
      i32.const 0
      i32.eq
      if
       i32.const 1
       local.set $7
       local.get $8
       local.set $5
      else
       local.get $4
       local.set $11
       local.get $8
       i32.const 1
       i32.sub
       local.set $10
       local.get $11
       local.get $10
       i32.const 1
       i32.shl
       i32.add
       i32.load16_u
       global.get $assembly/chars/backSlashCode
       i32.ne
       if
        i32.const 0
        local.set $7
        local.get $6
        local.get $4
        local.get $5
        i32.const 1
        i32.add
        local.get $8
        call $~lib/string/String#slice
        local.set $12
        global.get $~lib/memory/__stack_pointer
        local.get $12
        i32.store offset=8
        local.get $12
        i32.const 5488
        local.set $12
        global.get $~lib/memory/__stack_pointer
        local.get $12
        i32.store offset=12
        local.get $12
        i32.const 608
        local.set $12
        global.get $~lib/memory/__stack_pointer
        local.get $12
        i32.store offset=16
        local.get $12
        call $~lib/string/String#replaceAll
        local.set $12
        global.get $~lib/memory/__stack_pointer
        local.get $12
        i32.store offset=8
        local.get $12
        call $~lib/array/Array<~lib/string/String>#push
        drop
       end
      end
     end
     local.get $8
     i32.const 1
     i32.add
     local.set $8
     br $for-loop|0
    end
   end
   local.get $6
   br $assembly/index/parseArray<~lib/array/Array<~lib/string/String>>|inlined.0
  end
  local.set $12
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $12
  return
 )
 (func $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<~lib/string/String>> (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/index/JSON.stringify<~lib/array/Array<~lib/string/String>>
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  call $assembly/index/JSON.parse<~lib/array/Array<~lib/string/String>>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  call $assembly/index/JSON.stringify<~lib/array/Array<~lib/string/String>>
  local.tee $2
  i32.store offset=8
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/string/String>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  local.get $2
  i32.const 544
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#toBe
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $start:assembly/__tests__/as-json.spec~anonymous|1~anonymous|3
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  i32.const 4
  i32.const 2
  i32.const 18
  i32.const 7216
  call $~lib/rt/__newArray
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<~lib/string/String>>
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/index/JSON.stringify<~lib/array/Array<~lib/array/Array<i64>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 768
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  global.get $~lib/as-string-sink/assembly/index/MIN_BUFFER_LEN
  call $~lib/as-string-sink/assembly/index/StringSink#constructor
  local.tee $1
  i32.store offset=4
  local.get $0
  call $~lib/array/Array<~lib/array/Array<i64>>#get:length
  i32.const 0
  i32.eq
  if
   i32.const 6144
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   return
  end
  i32.const 0
  local.set $2
  loop $for-loop|0
   local.get $2
   local.get $0
   call $~lib/array/Array<~lib/array/Array<i64>>#get:length
   i32.const 1
   i32.sub
   i32.lt_s
   local.set $3
   local.get $3
   if
    local.get $1
    local.get $0
    local.get $2
    call $~lib/array/Array<~lib/array/Array<i64>>#__uget
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    call $assembly/index/JSON.stringify<~lib/array/Array<i64>>
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $1
    i32.const 576
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $for-loop|0
   end
  end
  local.get $1
  local.get $0
  local.get $0
  call $~lib/array/Array<~lib/array/Array<i64>>#get:length
  i32.const 1
  i32.sub
  call $~lib/array/Array<~lib/array/Array<i64>>#__uget
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  call $assembly/index/JSON.stringify<~lib/array/Array<i64>>
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  i32.const 800
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  call $~lib/as-string-sink/assembly/index/StringSink#toString
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
  return
 )
 (func $assembly/index/JSON.parse<~lib/array/Array<~lib/array/Array<i64>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  block $assembly/index/parseArray<~lib/array/Array<~lib/array/Array<i64>>>|inlined.0 (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $0
   call $~lib/string/String#trimStart
   local.tee $2
   i32.store
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 1
   drop
   local.get $2
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.const 0
   call $~lib/array/Array<~lib/array/Array<i64>>#constructor
   local.tee $5
   i32.store offset=4
   i32.const 0
   local.set $6
   i32.const 0
   local.set $7
   i32.const 1
   local.set $8
   i32.const 1
   local.set $9
   loop $for-loop|0
    local.get $9
    local.get $4
    call $~lib/string/String#get:length
    i32.const 1
    i32.sub
    i32.lt_s
    local.set $10
    local.get $10
    if
     local.get $4
     local.set $12
     local.get $9
     local.set $11
     local.get $12
     local.get $11
     i32.const 1
     i32.shl
     i32.add
     i32.load16_u
     local.set $6
     local.get $6
     global.get $assembly/chars/leftBracketCode
     i32.eq
     if
      local.get $8
      i32.const 1
      i32.eq
      if
       local.get $9
       local.set $7
      end
      local.get $8
      i32.const 1
      i32.shl
      local.set $8
     else
      local.get $6
      global.get $assembly/chars/rightBracketCode
      i32.eq
      if
       local.get $8
       i32.const 1
       i32.shr_s
       local.set $8
       local.get $8
       i32.const 1
       i32.eq
       if
        local.get $9
        i32.const 1
        i32.add
        local.set $9
        local.get $5
        local.get $4
        local.get $7
        local.get $9
        call $~lib/string/String#slice
        local.set $13
        global.get $~lib/memory/__stack_pointer
        local.get $13
        i32.store offset=8
        local.get $13
        call $assembly/index/JSON.parse<~lib/array/Array<i64>>
        local.set $13
        global.get $~lib/memory/__stack_pointer
        local.get $13
        i32.store offset=8
        local.get $13
        call $~lib/array/Array<~lib/array/Array<i64>>#push
        drop
       end
      end
     end
     local.get $9
     i32.const 1
     i32.add
     local.set $9
     br $for-loop|0
    end
   end
   local.get $5
   br $assembly/index/parseArray<~lib/array/Array<~lib/array/Array<i64>>>|inlined.0
  end
  local.set $13
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $13
  return
 )
 (func $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<~lib/array/Array<i64>>> (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/index/JSON.stringify<~lib/array/Array<~lib/array/Array<i64>>>
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  call $assembly/index/JSON.parse<~lib/array/Array<~lib/array/Array<i64>>>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  call $assembly/index/JSON.stringify<~lib/array/Array<~lib/array/Array<i64>>>
  local.tee $2
  i32.store offset=8
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/string/String>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  local.get $2
  i32.const 544
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#toBe
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $start:assembly/__tests__/as-json.spec~anonymous|1~anonymous|4
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 3
  i32.const 2
  i32.const 19
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $0
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  local.tee $1
  i32.store offset=8
  local.get $0
  i32.const 0
  i32.const 2
  i32.const 3
  i32.const 15
  i32.const 7424
  call $~lib/rt/__newArray
  call $~lib/array/Array<~lib/array/Array<i64>>#__uset
  local.get $0
  i32.const 1
  i32.const 2
  i32.const 3
  i32.const 15
  i32.const 7472
  call $~lib/rt/__newArray
  call $~lib/array/Array<~lib/array/Array<i64>>#__uset
  local.get $0
  i32.const 2
  i32.const 1
  i32.const 3
  i32.const 15
  i32.const 7520
  call $~lib/rt/__newArray
  call $~lib/array/Array<~lib/array/Array<i64>>#__uset
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  call $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<~lib/array/Array<i64>>>
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/index/JSON.stringify<~lib/array/Array<~lib/array/Array<f64>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 768
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  global.get $~lib/as-string-sink/assembly/index/MIN_BUFFER_LEN
  call $~lib/as-string-sink/assembly/index/StringSink#constructor
  local.tee $1
  i32.store offset=4
  local.get $0
  call $~lib/array/Array<~lib/array/Array<f64>>#get:length
  i32.const 0
  i32.eq
  if
   i32.const 6144
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   return
  end
  i32.const 0
  local.set $2
  loop $for-loop|0
   local.get $2
   local.get $0
   call $~lib/array/Array<~lib/array/Array<f64>>#get:length
   i32.const 1
   i32.sub
   i32.lt_s
   local.set $3
   local.get $3
   if
    local.get $1
    local.get $0
    local.get $2
    call $~lib/array/Array<~lib/array/Array<f64>>#__uget
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    call $assembly/index/JSON.stringify<~lib/array/Array<f64>>
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $1
    i32.const 576
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $for-loop|0
   end
  end
  local.get $1
  local.get $0
  local.get $0
  call $~lib/array/Array<~lib/array/Array<f64>>#get:length
  i32.const 1
  i32.sub
  call $~lib/array/Array<~lib/array/Array<f64>>#__uget
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  call $assembly/index/JSON.stringify<~lib/array/Array<f64>>
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  i32.const 800
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  call $~lib/as-string-sink/assembly/index/StringSink#toString
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
  return
 )
 (func $assembly/index/JSON.parse<~lib/array/Array<~lib/array/Array<f64>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  block $assembly/index/parseArray<~lib/array/Array<~lib/array/Array<f64>>>|inlined.0 (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $0
   call $~lib/string/String#trimStart
   local.tee $2
   i32.store
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 1
   drop
   local.get $2
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.const 0
   call $~lib/array/Array<~lib/array/Array<f64>>#constructor
   local.tee $5
   i32.store offset=4
   i32.const 0
   local.set $6
   i32.const 0
   local.set $7
   i32.const 1
   local.set $8
   i32.const 1
   local.set $9
   loop $for-loop|0
    local.get $9
    local.get $4
    call $~lib/string/String#get:length
    i32.const 1
    i32.sub
    i32.lt_s
    local.set $10
    local.get $10
    if
     local.get $4
     local.set $12
     local.get $9
     local.set $11
     local.get $12
     local.get $11
     i32.const 1
     i32.shl
     i32.add
     i32.load16_u
     local.set $6
     local.get $6
     global.get $assembly/chars/leftBracketCode
     i32.eq
     if
      local.get $8
      i32.const 1
      i32.eq
      if
       local.get $9
       local.set $7
      end
      local.get $8
      i32.const 1
      i32.shl
      local.set $8
     else
      local.get $6
      global.get $assembly/chars/rightBracketCode
      i32.eq
      if
       local.get $8
       i32.const 1
       i32.shr_s
       local.set $8
       local.get $8
       i32.const 1
       i32.eq
       if
        local.get $9
        i32.const 1
        i32.add
        local.set $9
        local.get $5
        local.get $4
        local.get $7
        local.get $9
        call $~lib/string/String#slice
        local.set $13
        global.get $~lib/memory/__stack_pointer
        local.get $13
        i32.store offset=8
        local.get $13
        call $assembly/index/JSON.parse<~lib/array/Array<f64>>
        local.set $13
        global.get $~lib/memory/__stack_pointer
        local.get $13
        i32.store offset=8
        local.get $13
        call $~lib/array/Array<~lib/array/Array<f64>>#push
        drop
       end
      end
     end
     local.get $9
     i32.const 1
     i32.add
     local.set $9
     br $for-loop|0
    end
   end
   local.get $5
   br $assembly/index/parseArray<~lib/array/Array<~lib/array/Array<f64>>>|inlined.0
  end
  local.set $13
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $13
  return
 )
 (func $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<~lib/array/Array<f64>>> (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/index/JSON.stringify<~lib/array/Array<~lib/array/Array<f64>>>
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  call $assembly/index/JSON.parse<~lib/array/Array<~lib/array/Array<f64>>>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  call $assembly/index/JSON.stringify<~lib/array/Array<~lib/array/Array<f64>>>
  local.tee $2
  i32.store offset=8
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/string/String>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  local.get $2
  i32.const 544
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#toBe
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $start:assembly/__tests__/as-json.spec~anonymous|1~anonymous|5
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 7
  i32.const 2
  i32.const 20
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $0
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  local.tee $1
  i32.store offset=8
  local.get $0
  i32.const 0
  i32.const 1
  i32.const 3
  i32.const 16
  i32.const 7584
  call $~lib/rt/__newArray
  call $~lib/array/Array<~lib/array/Array<f64>>#__uset
  local.get $0
  i32.const 1
  i32.const 1
  i32.const 3
  i32.const 16
  i32.const 7616
  call $~lib/rt/__newArray
  call $~lib/array/Array<~lib/array/Array<f64>>#__uset
  local.get $0
  i32.const 2
  i32.const 1
  i32.const 3
  i32.const 16
  i32.const 7648
  call $~lib/rt/__newArray
  call $~lib/array/Array<~lib/array/Array<f64>>#__uset
  local.get $0
  i32.const 3
  i32.const 1
  i32.const 3
  i32.const 16
  i32.const 7680
  call $~lib/rt/__newArray
  call $~lib/array/Array<~lib/array/Array<f64>>#__uset
  local.get $0
  i32.const 4
  i32.const 1
  i32.const 3
  i32.const 16
  i32.const 7712
  call $~lib/rt/__newArray
  call $~lib/array/Array<~lib/array/Array<f64>>#__uset
  local.get $0
  i32.const 5
  i32.const 1
  i32.const 3
  i32.const 16
  i32.const 7744
  call $~lib/rt/__newArray
  call $~lib/array/Array<~lib/array/Array<f64>>#__uset
  local.get $0
  i32.const 6
  i32.const 1
  i32.const 3
  i32.const 16
  i32.const 7776
  call $~lib/rt/__newArray
  call $~lib/array/Array<~lib/array/Array<f64>>#__uset
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  call $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<~lib/array/Array<f64>>>
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/index/JSON.stringify<~lib/array/Array<~lib/array/Array<bool>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 768
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  global.get $~lib/as-string-sink/assembly/index/MIN_BUFFER_LEN
  call $~lib/as-string-sink/assembly/index/StringSink#constructor
  local.tee $1
  i32.store offset=4
  local.get $0
  call $~lib/array/Array<~lib/array/Array<bool>>#get:length
  i32.const 0
  i32.eq
  if
   i32.const 6144
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   return
  end
  i32.const 0
  local.set $2
  loop $for-loop|0
   local.get $2
   local.get $0
   call $~lib/array/Array<~lib/array/Array<bool>>#get:length
   i32.const 1
   i32.sub
   i32.lt_s
   local.set $3
   local.get $3
   if
    local.get $1
    local.get $0
    local.get $2
    call $~lib/array/Array<~lib/array/Array<bool>>#__uget
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    call $assembly/index/JSON.stringify<~lib/array/Array<bool>>
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $1
    i32.const 576
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $for-loop|0
   end
  end
  local.get $1
  local.get $0
  local.get $0
  call $~lib/array/Array<~lib/array/Array<bool>>#get:length
  i32.const 1
  i32.sub
  call $~lib/array/Array<~lib/array/Array<bool>>#__uget
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  call $assembly/index/JSON.stringify<~lib/array/Array<bool>>
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  i32.const 800
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  call $~lib/as-string-sink/assembly/index/StringSink#toString
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
  return
 )
 (func $assembly/index/JSON.parse<~lib/array/Array<~lib/array/Array<bool>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  block $assembly/index/parseArray<~lib/array/Array<~lib/array/Array<bool>>>|inlined.0 (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $0
   call $~lib/string/String#trimStart
   local.tee $2
   i32.store
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 1
   drop
   local.get $2
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.const 0
   call $~lib/array/Array<~lib/array/Array<bool>>#constructor
   local.tee $5
   i32.store offset=4
   i32.const 0
   local.set $6
   i32.const 0
   local.set $7
   i32.const 1
   local.set $8
   i32.const 1
   local.set $9
   loop $for-loop|0
    local.get $9
    local.get $4
    call $~lib/string/String#get:length
    i32.const 1
    i32.sub
    i32.lt_s
    local.set $10
    local.get $10
    if
     local.get $4
     local.set $12
     local.get $9
     local.set $11
     local.get $12
     local.get $11
     i32.const 1
     i32.shl
     i32.add
     i32.load16_u
     local.set $6
     local.get $6
     global.get $assembly/chars/leftBracketCode
     i32.eq
     if
      local.get $8
      i32.const 1
      i32.eq
      if
       local.get $9
       local.set $7
      end
      local.get $8
      i32.const 1
      i32.shl
      local.set $8
     else
      local.get $6
      global.get $assembly/chars/rightBracketCode
      i32.eq
      if
       local.get $8
       i32.const 1
       i32.shr_s
       local.set $8
       local.get $8
       i32.const 1
       i32.eq
       if
        local.get $9
        i32.const 1
        i32.add
        local.set $9
        local.get $5
        local.get $4
        local.get $7
        local.get $9
        call $~lib/string/String#slice
        local.set $13
        global.get $~lib/memory/__stack_pointer
        local.get $13
        i32.store offset=8
        local.get $13
        call $assembly/index/JSON.parse<~lib/array/Array<bool>>
        local.set $13
        global.get $~lib/memory/__stack_pointer
        local.get $13
        i32.store offset=8
        local.get $13
        call $~lib/array/Array<~lib/array/Array<bool>>#push
        drop
       end
      end
     end
     local.get $9
     i32.const 1
     i32.add
     local.set $9
     br $for-loop|0
    end
   end
   local.get $5
   br $assembly/index/parseArray<~lib/array/Array<~lib/array/Array<bool>>>|inlined.0
  end
  local.set $13
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $13
  return
 )
 (func $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<~lib/array/Array<bool>>> (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/index/JSON.stringify<~lib/array/Array<~lib/array/Array<bool>>>
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  call $assembly/index/JSON.parse<~lib/array/Array<~lib/array/Array<bool>>>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  call $assembly/index/JSON.stringify<~lib/array/Array<~lib/array/Array<bool>>>
  local.tee $2
  i32.store offset=8
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/string/String>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  local.get $2
  i32.const 544
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#toBe
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $start:assembly/__tests__/as-json.spec~anonymous|1~anonymous|6
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 2
  i32.const 2
  i32.const 21
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $0
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  local.tee $1
  i32.store offset=8
  local.get $0
  i32.const 0
  i32.const 1
  i32.const 0
  i32.const 17
  i32.const 7840
  call $~lib/rt/__newArray
  call $~lib/array/Array<~lib/array/Array<bool>>#__uset
  local.get $0
  i32.const 1
  i32.const 1
  i32.const 0
  i32.const 17
  i32.const 7872
  call $~lib/rt/__newArray
  call $~lib/array/Array<~lib/array/Array<bool>>#__uset
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  call $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<~lib/array/Array<bool>>>
  global.get $~lib/memory/__stack_pointer
  i32.const 2
  i32.const 2
  i32.const 21
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $1
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.load offset=4
  local.tee $0
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.const 1
  i32.const 0
  i32.const 17
  i32.const 7904
  call $~lib/rt/__newArray
  call $~lib/array/Array<~lib/array/Array<bool>>#__uset
  local.get $1
  i32.const 1
  i32.const 1
  i32.const 0
  i32.const 17
  i32.const 7936
  call $~lib/rt/__newArray
  call $~lib/array/Array<~lib/array/Array<bool>>#__uset
  local.get $1
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  call $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<~lib/array/Array<bool>>>
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/index/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/string/String>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 768
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  global.get $~lib/as-string-sink/assembly/index/MIN_BUFFER_LEN
  call $~lib/as-string-sink/assembly/index/StringSink#constructor
  local.tee $1
  i32.store offset=4
  local.get $0
  call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#get:length
  i32.const 0
  i32.eq
  if
   i32.const 6144
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   return
  end
  i32.const 0
  local.set $2
  loop $for-loop|0
   local.get $2
   local.get $0
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#get:length
   i32.const 1
   i32.sub
   i32.lt_s
   local.set $3
   local.get $3
   if
    local.get $1
    local.get $0
    local.get $2
    call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uget
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    call $assembly/index/JSON.stringify<~lib/array/Array<~lib/string/String>>
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $1
    i32.const 576
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    i32.const 0
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/as-string-sink/assembly/index/StringSink#write
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $for-loop|0
   end
  end
  local.get $1
  local.get $0
  local.get $0
  call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#get:length
  i32.const 1
  i32.sub
  call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uget
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  call $assembly/index/JSON.stringify<~lib/array/Array<~lib/string/String>>
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  i32.const 800
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  global.get $~lib/builtins/i32.MAX_VALUE
  call $~lib/as-string-sink/assembly/index/StringSink#write
  local.get $1
  call $~lib/as-string-sink/assembly/index/StringSink#toString
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
  return
 )
 (func $assembly/index/JSON.parse<~lib/array/Array<~lib/array/Array<~lib/string/String>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  block $assembly/index/parseArray<~lib/array/Array<~lib/array/Array<~lib/string/String>>>|inlined.0 (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $0
   call $~lib/string/String#trimStart
   local.tee $2
   i32.store
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 1
   drop
   local.get $2
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.const 0
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#constructor
   local.tee $5
   i32.store offset=4
   i32.const 0
   local.set $6
   i32.const 0
   local.set $7
   i32.const 1
   local.set $8
   i32.const 1
   local.set $9
   loop $for-loop|0
    local.get $9
    local.get $4
    call $~lib/string/String#get:length
    i32.const 1
    i32.sub
    i32.lt_s
    local.set $10
    local.get $10
    if
     local.get $4
     local.set $12
     local.get $9
     local.set $11
     local.get $12
     local.get $11
     i32.const 1
     i32.shl
     i32.add
     i32.load16_u
     local.set $6
     local.get $6
     global.get $assembly/chars/leftBracketCode
     i32.eq
     if
      local.get $8
      i32.const 1
      i32.eq
      if
       local.get $9
       local.set $7
      end
      local.get $8
      i32.const 1
      i32.shl
      local.set $8
     else
      local.get $6
      global.get $assembly/chars/rightBracketCode
      i32.eq
      if
       local.get $8
       i32.const 1
       i32.shr_s
       local.set $8
       local.get $8
       i32.const 1
       i32.eq
       if
        local.get $9
        i32.const 1
        i32.add
        local.set $9
        local.get $5
        local.get $4
        local.get $7
        local.get $9
        call $~lib/string/String#slice
        local.set $13
        global.get $~lib/memory/__stack_pointer
        local.get $13
        i32.store offset=8
        local.get $13
        call $assembly/index/JSON.parse<~lib/array/Array<~lib/string/String>>
        local.set $13
        global.get $~lib/memory/__stack_pointer
        local.get $13
        i32.store offset=8
        local.get $13
        call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#push
        drop
       end
      end
     end
     local.get $9
     i32.const 1
     i32.add
     local.set $9
     br $for-loop|0
    end
   end
   local.get $5
   br $assembly/index/parseArray<~lib/array/Array<~lib/array/Array<~lib/string/String>>>|inlined.0
  end
  local.set $13
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $13
  return
 )
 (func $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<~lib/array/Array<~lib/string/String>>> (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/index/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/string/String>>>
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  call $assembly/index/JSON.parse<~lib/array/Array<~lib/array/Array<~lib/string/String>>>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  call $assembly/index/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/string/String>>>
  local.tee $2
  i32.store offset=8
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/string/String>
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  local.get $2
  i32.const 544
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#toBe
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $start:assembly/__tests__/as-json.spec~anonymous|1~anonymous|7
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.const 2
  i32.const 22
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $0
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  local.tee $1
  i32.store offset=8
  local.get $0
  i32.const 0
  i32.const 1
  i32.const 2
  i32.const 18
  i32.const 8000
  call $~lib/rt/__newArray
  call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
  local.get $0
  i32.const 1
  i32.const 1
  i32.const 2
  i32.const 18
  i32.const 8032
  call $~lib/rt/__newArray
  call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
  local.get $0
  i32.const 2
  i32.const 1
  i32.const 2
  i32.const 18
  i32.const 8064
  call $~lib/rt/__newArray
  call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
  local.get $0
  i32.const 3
  i32.const 1
  i32.const 2
  i32.const 18
  i32.const 8096
  call $~lib/rt/__newArray
  call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  call $assembly/__tests__/as-json.spec/canSerde<~lib/array/Array<~lib/array/Array<~lib/string/String>>>
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $start:assembly/__tests__/as-json.spec~anonymous|1
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  i32.const 6032
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 6384
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $0
  call $node_modules/@as-pect/assembly/assembly/internal/Test/it
  i32.const 6416
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 6576
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $0
  call $node_modules/@as-pect/assembly/assembly/internal/Test/it
  i32.const 6608
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 6784
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $0
  call $node_modules/@as-pect/assembly/assembly/internal/Test/it
  i32.const 6816
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 7296
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $0
  call $node_modules/@as-pect/assembly/assembly/internal/Test/it
  i32.const 7328
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 7552
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $0
  call $node_modules/@as-pect/assembly/assembly/internal/Test/it
  i32.const 6416
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 7808
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $0
  call $node_modules/@as-pect/assembly/assembly/internal/Test/it
  i32.const 6608
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 7968
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $0
  call $node_modules/@as-pect/assembly/assembly/internal/Test/it
  i32.const 6816
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 8128
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $0
  call $node_modules/@as-pect/assembly/assembly/internal/Test/it
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $start:assembly/__tests__/as-json.spec
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  call $start:assembly/index
  i32.const 1120
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 5952
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $0
  call $node_modules/@as-pect/assembly/assembly/internal/Test/describe
  i32.const 5984
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 8160
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $0
  call $node_modules/@as-pect/assembly/assembly/internal/Test/describe
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/arraybuffer/ArrayBuffer#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 432
   i32.const 480
   i32.const 52
   i32.const 43
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $2
  i32.store
  i32.const 2
  global.get $~lib/shared/runtime/Runtime.Incremental
  i32.ne
  drop
  local.get $2
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
 )
 (func $~lib/map/Map<~lib/string/String,u32>#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 24
   i32.const 4
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  i32.const 4
  i32.const 4
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  call $~lib/map/Map<~lib/string/String,u32>#set:buckets
  local.get $0
  i32.const 4
  i32.const 1
  i32.sub
  call $~lib/map/Map<~lib/string/String,u32>#set:bucketsMask
  local.get $0
  i32.const 0
  i32.const 4
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  call $~lib/map/Map<~lib/string/String,u32>#set:entries
  local.get $0
  i32.const 4
  call $~lib/map/Map<~lib/string/String,u32>#set:entriesCapacity
  local.get $0
  i32.const 0
  call $~lib/map/Map<~lib/string/String,u32>#set:entriesOffset
  local.get $0
  i32.const 0
  call $~lib/map/Map<~lib/string/String,u32>#set:entriesCount
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $~lib/map/Map<~lib/string/String,u64>#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 24
   i32.const 5
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  i32.const 4
  i32.const 4
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  call $~lib/map/Map<~lib/string/String,u64>#set:buckets
  local.get $0
  i32.const 4
  i32.const 1
  i32.sub
  call $~lib/map/Map<~lib/string/String,u64>#set:bucketsMask
  local.get $0
  i32.const 0
  i32.const 4
  i32.const 24
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  call $~lib/map/Map<~lib/string/String,u64>#set:entries
  local.get $0
  i32.const 4
  call $~lib/map/Map<~lib/string/String,u64>#set:entriesCapacity
  local.get $0
  i32.const 0
  call $~lib/map/Map<~lib/string/String,u64>#set:entriesOffset
  local.get $0
  i32.const 0
  call $~lib/map/Map<~lib/string/String,u64>#set:entriesCount
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $~lib/util/number/itoa32 (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  i32.const 2
  i32.lt_s
  if (result i32)
   i32.const 1
  else
   local.get $1
   i32.const 36
   i32.gt_s
  end
  if
   i32.const 1232
   i32.const 1360
   i32.const 373
   i32.const 5
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.eqz
  if
   i32.const 1424
   local.set $8
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $8
   return
  end
  local.get $0
  i32.const 31
  i32.shr_u
  i32.const 1
  i32.shl
  local.set $2
  local.get $2
  if
   i32.const 0
   local.get $0
   i32.sub
   local.set $0
  end
  local.get $1
  i32.const 10
  i32.eq
  if
   local.get $0
   call $~lib/util/number/decimalCount32
   local.set $4
   global.get $~lib/memory/__stack_pointer
   local.get $4
   i32.const 1
   i32.shl
   local.get $2
   i32.add
   i32.const 1
   call $~lib/rt/itcms/__new
   local.tee $3
   i32.store
   local.get $3
   local.get $2
   i32.add
   local.set $7
   local.get $0
   local.set $6
   local.get $4
   local.set $5
   i32.const 0
   i32.const 1
   i32.ge_s
   drop
   local.get $7
   local.get $6
   local.get $5
   call $~lib/util/number/utoa32_dec_lut
  else
   local.get $1
   i32.const 16
   i32.eq
   if
    i32.const 31
    local.get $0
    i32.clz
    i32.sub
    i32.const 2
    i32.shr_s
    i32.const 1
    i32.add
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.const 1
    i32.shl
    local.get $2
    i32.add
    i32.const 1
    call $~lib/rt/itcms/__new
    local.tee $3
    i32.store
    local.get $3
    local.get $2
    i32.add
    local.set $7
    local.get $0
    local.set $6
    local.get $4
    local.set $5
    i32.const 0
    i32.const 1
    i32.ge_s
    drop
    local.get $7
    local.get $6
    i64.extend_i32_u
    local.get $5
    call $~lib/util/number/utoa_hex_lut
   else
    local.get $0
    local.set $4
    local.get $4
    i64.extend_i32_u
    local.get $1
    call $~lib/util/number/ulog_base
    local.set $7
    global.get $~lib/memory/__stack_pointer
    local.get $7
    i32.const 1
    i32.shl
    local.get $2
    i32.add
    i32.const 1
    call $~lib/rt/itcms/__new
    local.tee $3
    i32.store
    local.get $3
    local.get $2
    i32.add
    local.get $4
    i64.extend_i32_u
    local.get $7
    local.get $1
    call $~lib/util/number/utoa64_any_core
   end
  end
  local.get $2
  if
   local.get $3
   i32.const 45
   i32.store16
  end
  local.get $3
  local.set $8
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $8
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.const 6
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#set:_not
  local.get $0
  i32.const 0
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#set:actual
  local.get $0
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/string/String>#set:actual
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $~lib/map/Map<usize,i32>#set (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  call $~lib/util/hash/HASH<usize>
  local.set $3
  local.get $0
  local.get $1
  local.get $3
  call $~lib/map/Map<usize,i32>#find
  local.set $4
  local.get $4
  if
   local.get $4
   local.get $2
   call $~lib/map/MapEntry<usize,i32>#set:value
   i32.const 0
   drop
  else
   local.get $0
   i32.load offset=16
   local.get $0
   i32.load offset=12
   i32.eq
   if
    local.get $0
    local.get $0
    i32.load offset=20
    local.get $0
    i32.load offset=12
    i32.const 3
    i32.mul
    i32.const 4
    i32.div_s
    i32.lt_s
    if (result i32)
     local.get $0
     i32.load offset=4
    else
     local.get $0
     i32.load offset=4
     i32.const 1
     i32.shl
     i32.const 1
     i32.or
    end
    call $~lib/map/Map<usize,i32>#rehash
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=8
   local.tee $5
   i32.store
   local.get $5
   local.get $0
   local.get $0
   i32.load offset=16
   local.tee $6
   i32.const 1
   i32.add
   call $~lib/map/Map<usize,i32>#set:entriesOffset
   local.get $6
   i32.const 12
   i32.mul
   i32.add
   local.set $4
   local.get $4
   local.get $1
   call $~lib/map/MapEntry<usize,i32>#set:key
   i32.const 0
   drop
   local.get $4
   local.get $2
   call $~lib/map/MapEntry<usize,i32>#set:value
   i32.const 0
   drop
   local.get $0
   local.get $0
   i32.load offset=20
   i32.const 1
   i32.add
   call $~lib/map/Map<usize,i32>#set:entriesCount
   local.get $0
   i32.load
   local.get $3
   local.get $0
   i32.load offset=4
   i32.and
   i32.const 4
   i32.mul
   i32.add
   local.set $6
   local.get $4
   local.get $6
   i32.load
   call $~lib/map/MapEntry<usize,i32>#set:taggedNext
   local.get $6
   local.get $4
   i32.store
  end
  local.get $0
  local.set $7
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $7
 )
 (func $~lib/map/Map<usize,i32>#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 24
   i32.const 7
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  i32.const 4
  i32.const 4
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  call $~lib/map/Map<usize,i32>#set:buckets
  local.get $0
  i32.const 4
  i32.const 1
  i32.sub
  call $~lib/map/Map<usize,i32>#set:bucketsMask
  local.get $0
  i32.const 0
  i32.const 4
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  call $~lib/map/Map<usize,i32>#set:entries
  local.get $0
  i32.const 4
  call $~lib/map/Map<usize,i32>#set:entriesCapacity
  local.get $0
  i32.const 0
  call $~lib/map/Map<usize,i32>#set:entriesOffset
  local.get $0
  i32.const 0
  call $~lib/map/Map<usize,i32>#set:entriesCount
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<~lib/string/String>@varargs (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  block $1of1
   block $0of1
    block $outOfRange
     global.get $~argumentsLength
     i32.const 1
     i32.sub
     br_table $0of1 $1of1 $outOfRange
    end
    unreachable
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   call $~lib/map/Map<usize,i32>#constructor
   local.tee $1
   i32.store
  end
  local.get $0
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<~lib/string/String>
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $~lib/rt/__newArray (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  local.get $1
  i32.shl
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.const 0
  local.get $3
  call $~lib/rt/__newBuffer
  local.tee $5
  i32.store
  i32.const 16
  local.get $2
  call $~lib/rt/itcms/__new
  local.set $6
  local.get $6
  local.get $5
  i32.store
  local.get $6
  local.get $5
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $6
  local.get $5
  i32.store offset=4
  local.get $6
  local.get $4
  i32.store offset=8
  local.get $6
  local.get $0
  i32.store offset=12
  local.get $6
  local.set $7
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $7
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.equals<~lib/string/String>@varargs (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  block $2of2
   block $1of2
    block $0of2
     block $outOfRange
      global.get $~argumentsLength
      i32.const 2
      i32.sub
      br_table $0of2 $1of2 $2of2 $outOfRange
     end
     unreachable
    end
    global.get $~lib/memory/__stack_pointer
    i32.const 0
    i32.const 2
    i32.const 8
    i32.const 3376
    call $~lib/rt/__newArray
    local.tee $2
    i32.store
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.const 2
   i32.const 8
   i32.const 3408
   call $~lib/rt/__newArray
   local.tee $3
   i32.store offset=4
  end
  local.get $0
  local.get $1
  local.get $2
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.equals<~lib/string/String>
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
 )
 (func $~lib/util/number/utoa32 (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  i32.const 2
  i32.lt_s
  if (result i32)
   i32.const 1
  else
   local.get $1
   i32.const 36
   i32.gt_s
  end
  if
   i32.const 1232
   i32.const 1360
   i32.const 350
   i32.const 5
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.eqz
  if
   i32.const 1424
   local.set $7
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $7
   return
  end
  local.get $1
  i32.const 10
  i32.eq
  if
   local.get $0
   call $~lib/util/number/decimalCount32
   local.set $3
   global.get $~lib/memory/__stack_pointer
   local.get $3
   i32.const 1
   i32.shl
   i32.const 1
   call $~lib/rt/itcms/__new
   local.tee $2
   i32.store
   local.get $2
   local.set $6
   local.get $0
   local.set $5
   local.get $3
   local.set $4
   i32.const 0
   i32.const 1
   i32.ge_s
   drop
   local.get $6
   local.get $5
   local.get $4
   call $~lib/util/number/utoa32_dec_lut
  else
   local.get $1
   i32.const 16
   i32.eq
   if
    i32.const 31
    local.get $0
    i32.clz
    i32.sub
    i32.const 2
    i32.shr_s
    i32.const 1
    i32.add
    local.set $3
    global.get $~lib/memory/__stack_pointer
    local.get $3
    i32.const 1
    i32.shl
    i32.const 1
    call $~lib/rt/itcms/__new
    local.tee $2
    i32.store
    local.get $2
    local.set $6
    local.get $0
    local.set $5
    local.get $3
    local.set $4
    i32.const 0
    i32.const 1
    i32.ge_s
    drop
    local.get $6
    local.get $5
    i64.extend_i32_u
    local.get $4
    call $~lib/util/number/utoa_hex_lut
   else
    local.get $0
    i64.extend_i32_u
    local.get $1
    call $~lib/util/number/ulog_base
    local.set $3
    global.get $~lib/memory/__stack_pointer
    local.get $3
    i32.const 1
    i32.shl
    i32.const 1
    call $~lib/rt/itcms/__new
    local.tee $2
    i32.store
    local.get $2
    local.get $0
    i64.extend_i32_u
    local.get $3
    local.get $1
    call $~lib/util/number/utoa64_any_core
   end
  end
  local.get $2
  local.set $7
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $7
 )
 (func $~lib/util/number/utoa64 (param $0 i64) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i64)
  (local $9 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  i32.const 2
  i32.lt_s
  if (result i32)
   i32.const 1
  else
   local.get $1
   i32.const 36
   i32.gt_s
  end
  if
   i32.const 1232
   i32.const 1360
   i32.const 401
   i32.const 5
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i64.const 0
  i64.ne
  i32.eqz
  if
   i32.const 1424
   local.set $9
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $9
   return
  end
  local.get $1
  i32.const 10
  i32.eq
  if
   local.get $0
   global.get $~lib/builtins/u32.MAX_VALUE
   i64.extend_i32_u
   i64.le_u
   if
    local.get $0
    i32.wrap_i64
    local.set $3
    local.get $3
    call $~lib/util/number/decimalCount32
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.const 1
    i32.shl
    i32.const 1
    call $~lib/rt/itcms/__new
    local.tee $2
    i32.store
    local.get $2
    local.set $7
    local.get $3
    local.set $6
    local.get $4
    local.set $5
    i32.const 0
    i32.const 1
    i32.ge_s
    drop
    local.get $7
    local.get $6
    local.get $5
    call $~lib/util/number/utoa32_dec_lut
   else
    local.get $0
    call $~lib/util/number/decimalCount64High
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.const 1
    i32.shl
    i32.const 1
    call $~lib/rt/itcms/__new
    local.tee $2
    i32.store
    local.get $2
    local.set $6
    local.get $0
    local.set $8
    local.get $4
    local.set $5
    i32.const 0
    i32.const 1
    i32.ge_s
    drop
    local.get $6
    local.get $8
    local.get $5
    call $~lib/util/number/utoa64_dec_lut
   end
  else
   local.get $1
   i32.const 16
   i32.eq
   if
    i32.const 63
    local.get $0
    i64.clz
    i32.wrap_i64
    i32.sub
    i32.const 2
    i32.shr_s
    i32.const 1
    i32.add
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.const 1
    i32.shl
    i32.const 1
    call $~lib/rt/itcms/__new
    local.tee $2
    i32.store
    local.get $2
    local.set $3
    local.get $0
    local.set $8
    local.get $4
    local.set $7
    i32.const 0
    i32.const 1
    i32.ge_s
    drop
    local.get $3
    local.get $8
    local.get $7
    call $~lib/util/number/utoa_hex_lut
   else
    local.get $0
    local.get $1
    call $~lib/util/number/ulog_base
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.const 1
    i32.shl
    i32.const 1
    call $~lib/rt/itcms/__new
    local.tee $2
    i32.store
    local.get $2
    local.get $0
    local.get $4
    local.get $1
    call $~lib/util/number/utoa64_any_core
   end
  end
  local.get $2
  local.set $9
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $9
 )
 (func $~lib/util/number/itoa64 (param $0 i64) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i64)
  (local $10 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  i32.const 2
  i32.lt_s
  if (result i32)
   i32.const 1
  else
   local.get $1
   i32.const 36
   i32.gt_s
  end
  if
   i32.const 1232
   i32.const 1360
   i32.const 431
   i32.const 5
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i64.const 0
  i64.ne
  i32.eqz
  if
   i32.const 1424
   local.set $10
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $10
   return
  end
  local.get $0
  i64.const 63
  i64.shr_u
  i32.wrap_i64
  i32.const 1
  i32.shl
  local.set $2
  local.get $2
  if
   i64.const 0
   local.get $0
   i64.sub
   local.set $0
  end
  local.get $1
  i32.const 10
  i32.eq
  if
   local.get $0
   global.get $~lib/builtins/u32.MAX_VALUE
   i64.extend_i32_u
   i64.le_u
   if
    local.get $0
    i32.wrap_i64
    local.set $4
    local.get $4
    call $~lib/util/number/decimalCount32
    local.set $5
    global.get $~lib/memory/__stack_pointer
    local.get $5
    i32.const 1
    i32.shl
    local.get $2
    i32.add
    i32.const 1
    call $~lib/rt/itcms/__new
    local.tee $3
    i32.store
    local.get $3
    local.get $2
    i32.add
    local.set $8
    local.get $4
    local.set $7
    local.get $5
    local.set $6
    i32.const 0
    i32.const 1
    i32.ge_s
    drop
    local.get $8
    local.get $7
    local.get $6
    call $~lib/util/number/utoa32_dec_lut
   else
    local.get $0
    call $~lib/util/number/decimalCount64High
    local.set $5
    global.get $~lib/memory/__stack_pointer
    local.get $5
    i32.const 1
    i32.shl
    local.get $2
    i32.add
    i32.const 1
    call $~lib/rt/itcms/__new
    local.tee $3
    i32.store
    local.get $3
    local.get $2
    i32.add
    local.set $7
    local.get $0
    local.set $9
    local.get $5
    local.set $6
    i32.const 0
    i32.const 1
    i32.ge_s
    drop
    local.get $7
    local.get $9
    local.get $6
    call $~lib/util/number/utoa64_dec_lut
   end
  else
   local.get $1
   i32.const 16
   i32.eq
   if
    i32.const 63
    local.get $0
    i64.clz
    i32.wrap_i64
    i32.sub
    i32.const 2
    i32.shr_s
    i32.const 1
    i32.add
    local.set $5
    global.get $~lib/memory/__stack_pointer
    local.get $5
    i32.const 1
    i32.shl
    local.get $2
    i32.add
    i32.const 1
    call $~lib/rt/itcms/__new
    local.tee $3
    i32.store
    local.get $3
    local.get $2
    i32.add
    local.set $4
    local.get $0
    local.set $9
    local.get $5
    local.set $8
    i32.const 0
    i32.const 1
    i32.ge_s
    drop
    local.get $4
    local.get $9
    local.get $8
    call $~lib/util/number/utoa_hex_lut
   else
    local.get $0
    local.get $1
    call $~lib/util/number/ulog_base
    local.set $5
    global.get $~lib/memory/__stack_pointer
    local.get $5
    i32.const 1
    i32.shl
    local.get $2
    i32.add
    i32.const 1
    call $~lib/rt/itcms/__new
    local.tee $3
    i32.store
    local.get $3
    local.get $2
    i32.add
    local.get $0
    local.get $5
    local.get $1
    call $~lib/util/number/utoa64_any_core
   end
  end
  local.get $2
  if
   local.get $3
   i32.const 45
   i32.store16
  end
  local.get $3
  local.set $10
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $10
 )
 (func $~lib/util/number/dtoa (param $0 f64) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  f64.const 0
  f64.eq
  if
   i32.const 3616
   local.set $3
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $3
   return
  end
  local.get $0
  local.get $0
  f64.sub
  f64.const 0
  f64.eq
  i32.eqz
  if
   local.get $0
   local.get $0
   f64.ne
   if
    i32.const 3648
    local.set $3
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    local.get $3
    return
   end
   i32.const 3680
   i32.const 3728
   local.get $0
   f64.const 0
   f64.lt
   select
   local.set $3
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $3
   return
  end
  i32.const 3760
  local.get $0
  call $~lib/util/number/dtoa_core
  i32.const 1
  i32.shl
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $2
  i32.store
  local.get $2
  i32.const 3760
  local.get $1
  memory.copy
  local.get $2
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
 )
 (func $~lib/util/string/joinStringArray (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  local.get $1
  i32.const 1
  i32.sub
  local.set $3
  local.get $3
  i32.const 0
  i32.lt_s
  if
   i32.const 544
   local.set $12
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $12
   return
  end
  local.get $3
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load
   local.tee $4
   i32.store
   local.get $4
   if (result i32)
    local.get $4
   else
    i32.const 544
   end
   local.set $12
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $12
   return
  end
  i32.const 0
  local.set $5
  i32.const 0
  local.set $4
  loop $for-loop|0
   local.get $4
   local.get $1
   i32.lt_s
   local.set $7
   local.get $7
   if
    global.get $~lib/memory/__stack_pointer
    local.get $0
    local.get $4
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $6
    i32.store offset=4
    local.get $6
    i32.const 0
    i32.ne
    if
     local.get $5
     local.get $6
     call $~lib/string/String#get:length
     i32.add
     local.set $5
    end
    local.get $4
    i32.const 1
    i32.add
    local.set $4
    br $for-loop|0
   end
  end
  i32.const 0
  local.set $8
  local.get $2
  call $~lib/string/String#get:length
  local.set $9
  global.get $~lib/memory/__stack_pointer
  local.get $5
  local.get $9
  local.get $3
  i32.mul
  i32.add
  i32.const 1
  i32.shl
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $10
  i32.store offset=8
  i32.const 0
  local.set $4
  loop $for-loop|1
   local.get $4
   local.get $3
   i32.lt_s
   local.set $7
   local.get $7
   if
    global.get $~lib/memory/__stack_pointer
    local.get $0
    local.get $4
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $6
    i32.store offset=4
    local.get $6
    i32.const 0
    i32.ne
    if
     local.get $6
     call $~lib/string/String#get:length
     local.set $11
     local.get $10
     local.get $8
     i32.const 1
     i32.shl
     i32.add
     local.get $6
     local.get $11
     i32.const 1
     i32.shl
     memory.copy
     local.get $8
     local.get $11
     i32.add
     local.set $8
    end
    local.get $9
    if
     local.get $10
     local.get $8
     i32.const 1
     i32.shl
     i32.add
     local.get $2
     local.get $9
     i32.const 1
     i32.shl
     memory.copy
     local.get $8
     local.get $9
     i32.add
     local.set $8
    end
    local.get $4
    i32.const 1
    i32.add
    local.set $4
    br $for-loop|1
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.get $3
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $6
  i32.store offset=4
  local.get $6
  i32.const 0
  i32.ne
  if
   local.get $10
   local.get $8
   i32.const 1
   i32.shl
   i32.add
   local.get $6
   local.get $6
   call $~lib/string/String#get:length
   i32.const 1
   i32.shl
   memory.copy
  end
  local.get $10
  local.set $12
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $12
 )
 (func $~lib/string/String#replaceAll (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  call $~lib/string/String#get:length
  local.set $3
  local.get $1
  call $~lib/string/String#get:length
  local.set $4
  local.get $3
  local.get $4
  i32.le_u
  if
   local.get $3
   local.get $4
   i32.lt_u
   if (result i32)
    local.get $0
   else
    local.get $2
    local.get $0
    local.get $1
    local.get $0
    call $~lib/string/String.__eq
    select
   end
   local.set $16
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $16
   return
  end
  local.get $2
  call $~lib/string/String#get:length
  local.set $5
  local.get $4
  i32.eqz
  if
   local.get $5
   i32.eqz
   if
    local.get $0
    local.set $16
    global.get $~lib/memory/__stack_pointer
    i32.const 8
    i32.add
    global.set $~lib/memory/__stack_pointer
    local.get $16
    return
   end
   global.get $~lib/memory/__stack_pointer
   local.get $3
   local.get $3
   i32.const 1
   i32.add
   local.get $5
   i32.mul
   i32.add
   i32.const 1
   i32.shl
   i32.const 1
   call $~lib/rt/itcms/__new
   local.tee $6
   i32.store
   local.get $6
   local.get $2
   local.get $5
   i32.const 1
   i32.shl
   memory.copy
   local.get $5
   local.set $7
   i32.const 0
   local.set $8
   loop $for-loop|0
    local.get $8
    local.get $3
    i32.lt_u
    local.set $9
    local.get $9
    if
     local.get $6
     local.get $7
     local.tee $10
     i32.const 1
     i32.add
     local.set $7
     local.get $10
     i32.const 1
     i32.shl
     i32.add
     local.get $0
     local.get $8
     i32.const 1
     i32.shl
     i32.add
     i32.load16_u
     i32.store16
     local.get $6
     local.get $7
     i32.const 1
     i32.shl
     i32.add
     local.get $2
     local.get $5
     i32.const 1
     i32.shl
     memory.copy
     local.get $7
     local.get $5
     i32.add
     local.set $7
     local.get $8
     i32.const 1
     i32.add
     local.set $8
     br $for-loop|0
    end
   end
   local.get $6
   local.set $16
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $16
   return
  end
  i32.const 0
  local.set $11
  i32.const 0
  local.set $12
  local.get $4
  local.get $5
  i32.eq
  if
   local.get $3
   i32.const 1
   i32.shl
   local.set $7
   global.get $~lib/memory/__stack_pointer
   local.get $7
   i32.const 1
   call $~lib/rt/itcms/__new
   local.tee $6
   i32.store
   local.get $6
   local.get $0
   local.get $7
   memory.copy
   loop $while-continue|1
    local.get $0
    local.get $1
    local.get $11
    call $~lib/string/String#indexOf
    local.tee $12
    i32.const -1
    i32.xor
    local.set $8
    local.get $8
    if
     local.get $6
     local.get $12
     i32.const 1
     i32.shl
     i32.add
     local.get $2
     local.get $5
     i32.const 1
     i32.shl
     memory.copy
     local.get $12
     local.get $4
     i32.add
     local.set $11
     br $while-continue|1
    end
   end
   local.get $6
   local.set $16
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $16
   return
  end
  i32.const 0
  local.set $13
  i32.const 0
  local.set $14
  local.get $3
  local.set $15
  loop $while-continue|2
   local.get $0
   local.get $1
   local.get $11
   call $~lib/string/String#indexOf
   local.tee $12
   i32.const -1
   i32.xor
   local.set $6
   local.get $6
   if
    local.get $13
    call $~lib/string/String.__not
    if
     global.get $~lib/memory/__stack_pointer
     local.get $3
     i32.const 1
     i32.shl
     i32.const 1
     call $~lib/rt/itcms/__new
     local.tee $13
     i32.store offset=4
    end
    local.get $12
    local.get $11
    i32.sub
    local.set $7
    local.get $14
    local.get $7
    i32.add
    local.get $5
    i32.add
    local.get $15
    i32.gt_u
    if
     local.get $15
     i32.const 1
     i32.shl
     local.set $15
     global.get $~lib/memory/__stack_pointer
     local.get $13
     local.get $15
     i32.const 1
     i32.shl
     call $~lib/rt/itcms/__renew
     local.tee $13
     i32.store offset=4
    end
    local.get $13
    local.get $14
    i32.const 1
    i32.shl
    i32.add
    local.get $0
    local.get $11
    i32.const 1
    i32.shl
    i32.add
    local.get $7
    i32.const 1
    i32.shl
    memory.copy
    local.get $14
    local.get $7
    i32.add
    local.set $14
    local.get $13
    local.get $14
    i32.const 1
    i32.shl
    i32.add
    local.get $2
    local.get $5
    i32.const 1
    i32.shl
    memory.copy
    local.get $14
    local.get $5
    i32.add
    local.set $14
    local.get $12
    local.get $4
    i32.add
    local.set $11
    br $while-continue|2
   end
  end
  local.get $13
  if
   local.get $3
   local.get $11
   i32.sub
   local.set $6
   local.get $14
   local.get $6
   i32.add
   local.get $15
   i32.gt_u
   if
    local.get $15
    i32.const 1
    i32.shl
    local.set $15
    global.get $~lib/memory/__stack_pointer
    local.get $13
    local.get $15
    i32.const 1
    i32.shl
    call $~lib/rt/itcms/__renew
    local.tee $13
    i32.store offset=4
   end
   local.get $6
   if
    local.get $13
    local.get $14
    i32.const 1
    i32.shl
    i32.add
    local.get $0
    local.get $11
    i32.const 1
    i32.shl
    i32.add
    local.get $6
    i32.const 1
    i32.shl
    memory.copy
   end
   local.get $6
   local.get $14
   i32.add
   local.set $6
   local.get $15
   local.get $6
   i32.gt_u
   if
    global.get $~lib/memory/__stack_pointer
    local.get $13
    local.get $6
    i32.const 1
    i32.shl
    call $~lib/rt/itcms/__renew
    local.tee $13
    i32.store offset=4
   end
   local.get $13
   local.set $16
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $16
   return
  end
  local.get $0
  local.set $16
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $16
 )
 (func $~lib/string/String#concat (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  call $~lib/string/String#get:length
  i32.const 1
  i32.shl
  local.set $2
  local.get $1
  call $~lib/string/String#get:length
  i32.const 1
  i32.shl
  local.set $3
  local.get $2
  local.get $3
  i32.add
  local.set $4
  local.get $4
  i32.const 0
  i32.eq
  if
   i32.const 544
   local.set $6
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $6
   return
  end
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $5
  i32.store
  local.get $5
  local.get $0
  local.get $2
  memory.copy
  local.get $5
  local.get $2
  i32.add
  local.get $1
  local.get $3
  memory.copy
  local.get $5
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
 )
 (func $~lib/string/String#slice (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  call $~lib/string/String#get:length
  local.set $3
  local.get $1
  i32.const 0
  i32.lt_s
  if (result i32)
   local.get $1
   local.get $3
   i32.add
   local.tee $4
   i32.const 0
   local.tee $5
   local.get $4
   local.get $5
   i32.gt_s
   select
  else
   local.get $1
   local.tee $5
   local.get $3
   local.tee $4
   local.get $5
   local.get $4
   i32.lt_s
   select
  end
  local.set $1
  local.get $2
  i32.const 0
  i32.lt_s
  if (result i32)
   local.get $2
   local.get $3
   i32.add
   local.tee $4
   i32.const 0
   local.tee $5
   local.get $4
   local.get $5
   i32.gt_s
   select
  else
   local.get $2
   local.tee $5
   local.get $3
   local.tee $4
   local.get $5
   local.get $4
   i32.lt_s
   select
  end
  local.set $2
  local.get $2
  local.get $1
  i32.sub
  local.set $3
  local.get $3
  i32.const 0
  i32.le_s
  if
   i32.const 544
   local.set $7
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $7
   return
  end
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.const 1
  i32.shl
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $6
  i32.store
  local.get $6
  local.get $0
  local.get $1
  i32.const 1
  i32.shl
  i32.add
  local.get $3
  i32.const 1
  i32.shl
  memory.copy
  local.get $6
  local.set $7
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $7
 )
 (func $~lib/as-string-sink/assembly/index/StringSink#constructor (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.const 13
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  call $~lib/as-string-sink/assembly/index/StringSink#set:buffer
  local.get $0
  i32.const 0
  call $~lib/as-string-sink/assembly/index/StringSink#set:offset
  local.get $1
  call $~lib/string/String#get:length
  i32.const 1
  i32.shl
  local.set $3
  local.get $0
  local.get $3
  local.tee $6
  global.get $~lib/as-string-sink/assembly/index/MIN_BUFFER_SIZE
  local.tee $4
  local.get $2
  i32.const 1
  i32.shl
  local.tee $5
  local.get $4
  local.get $5
  i32.gt_u
  select
  local.tee $4
  local.get $6
  local.get $4
  i32.gt_u
  select
  i32.const 0
  call $~lib/rt/itcms/__new
  call $~lib/as-string-sink/assembly/index/StringSink#set:buffer
  local.get $3
  if
   local.get $0
   i32.load
   local.get $1
   local.get $3
   memory.copy
   local.get $0
   local.get $0
   i32.load offset=4
   local.get $3
   i32.add
   call $~lib/as-string-sink/assembly/index/StringSink#set:offset
  end
  local.get $0
  local.set $7
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $7
 )
 (func $~lib/as-string-sink/assembly/index/StringSink#toString (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.load offset=4
  local.set $1
  local.get $1
  i32.eqz
  if
   i32.const 544
   local.set $3
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $3
   return
  end
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $2
  i32.store
  local.get $2
  local.get $0
  i32.load
  local.get $1
  memory.copy
  local.get $2
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
 )
 (func $~lib/string/String#trimStart (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  call $~lib/string/String#get:length
  i32.const 1
  i32.shl
  local.set $1
  i32.const 0
  local.set $2
  loop $while-continue|0
   local.get $2
   local.get $1
   i32.lt_u
   if (result i32)
    local.get $0
    local.get $2
    i32.add
    i32.load16_u
    call $~lib/util/string/isSpace
   else
    i32.const 0
   end
   local.set $3
   local.get $3
   if
    local.get $2
    i32.const 2
    i32.add
    local.set $2
    br $while-continue|0
   end
  end
  local.get $2
  i32.eqz
  if
   local.get $0
   local.set $5
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $5
   return
  end
  local.get $1
  local.get $2
  i32.sub
  local.set $1
  local.get $1
  i32.eqz
  if
   i32.const 544
   local.set $5
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $5
   return
  end
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $4
  i32.store
  local.get $4
  local.get $0
  local.get $2
  i32.add
  local.get $1
  memory.copy
  local.get $4
  local.set $5
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $5
 )
 (func $~lib/array/Array<u32>#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.const 12
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  call $~lib/array/Array<u32>#set:buffer
  local.get $0
  i32.const 0
  call $~lib/array/Array<u32>#set:dataStart
  local.get $0
  i32.const 0
  call $~lib/array/Array<u32>#set:byteLength
  local.get $0
  i32.const 0
  call $~lib/array/Array<u32>#set:length_
  local.get $1
  i32.const 1073741820
  i32.const 2
  i32.shr_u
  i32.gt_u
  if
   i32.const 432
   i32.const 6176
   i32.const 70
   i32.const 60
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.tee $2
  i32.const 8
  local.tee $3
  local.get $2
  local.get $3
  i32.gt_u
  select
  i32.const 2
  i32.shl
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $5
  i32.store offset=4
  i32.const 2
  global.get $~lib/shared/runtime/Runtime.Incremental
  i32.ne
  drop
  local.get $0
  local.get $5
  call $~lib/array/Array<u32>#set:buffer
  local.get $0
  local.get $5
  call $~lib/array/Array<u32>#set:dataStart
  local.get $0
  local.get $4
  call $~lib/array/Array<u32>#set:byteLength
  local.get $0
  local.get $1
  call $~lib/array/Array<u32>#set:length_
  local.get $0
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
 )
 (func $assembly/index/JSON.parse<~lib/array/Array<u32>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  block $assembly/index/parseArray<~lib/array/Array<u32>>|inlined.0 (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $0
   call $~lib/string/String#trimStart
   local.tee $2
   i32.store
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 1
   drop
   local.get $2
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.const 0
   call $~lib/array/Array<u32>#constructor
   local.tee $5
   i32.store offset=4
   i32.const 0
   local.set $6
   i32.const 0
   local.set $7
   i32.const 1
   local.set $8
   loop $for-loop|0
    local.get $8
    local.get $4
    call $~lib/string/String#get:length
    i32.const 1
    i32.sub
    i32.lt_s
    local.set $9
    local.get $9
    if
     local.get $4
     local.set $11
     local.get $8
     local.set $10
     local.get $11
     local.get $10
     i32.const 1
     i32.shl
     i32.add
     i32.load16_u
     local.set $7
     local.get $6
     i32.const 0
     i32.eq
     if (result i32)
      local.get $7
      i32.const 48
      i32.ge_s
      if (result i32)
       local.get $7
       i32.const 57
       i32.le_s
      else
       i32.const 0
      end
     else
      i32.const 0
     end
     if (result i32)
      i32.const 1
     else
      local.get $7
      i32.const 45
      i32.eq
     end
     if
      local.get $8
      local.set $6
     else
      local.get $7
      call $~lib/assemblyscript/std/assembly/util/string/isSpace
      if (result i32)
       i32.const 1
      else
       local.get $7
       global.get $assembly/chars/commaCode
       i32.eq
      end
      if (result i32)
       local.get $6
       i32.const 0
       i32.gt_s
      else
       i32.const 0
      end
      if
       local.get $5
       block $assembly/index/parseNumber<u32>|inlined.1 (result i32)
        global.get $~lib/memory/__stack_pointer
        local.get $4
        local.get $6
        local.get $8
        call $~lib/string/String#slice
        local.tee $10
        i32.store offset=8
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 1
        drop
        local.get $10
        i32.const 0
        call $~lib/number/U32.parseInt
        br $assembly/index/parseNumber<u32>|inlined.1
       end
       call $~lib/array/Array<u32>#push
       drop
       i32.const 0
       local.set $6
      end
     end
     local.get $8
     i32.const 1
     i32.add
     local.set $8
     br $for-loop|0
    end
   end
   block $for-break1
    loop $for-loop|1
     local.get $8
     local.get $6
     i32.const 1
     i32.sub
     i32.gt_s
     local.set $9
     local.get $9
     if
      local.get $4
      local.set $11
      local.get $8
      local.set $10
      local.get $11
      local.get $10
      i32.const 1
      i32.shl
      i32.add
      i32.load16_u
      local.set $7
      local.get $7
      global.get $assembly/chars/rightBracketCode
      i32.ne
      if
       local.get $5
       block $assembly/index/parseNumber<u32>|inlined.2 (result i32)
        global.get $~lib/memory/__stack_pointer
        local.get $4
        local.get $6
        local.get $8
        i32.const 1
        i32.add
        call $~lib/string/String#slice
        local.tee $10
        i32.store offset=8
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 1
        drop
        local.get $10
        i32.const 0
        call $~lib/number/U32.parseInt
        br $assembly/index/parseNumber<u32>|inlined.2
       end
       call $~lib/array/Array<u32>#push
       drop
       br $for-break1
      end
      local.get $8
      i32.const 1
      i32.sub
      local.set $8
      br $for-loop|1
     end
    end
   end
   local.get $5
   br $assembly/index/parseArray<~lib/array/Array<u32>>|inlined.0
  end
  local.set $12
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $12
  return
 )
 (func $~lib/array/Array<u64>#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.const 14
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  call $~lib/array/Array<u64>#set:buffer
  local.get $0
  i32.const 0
  call $~lib/array/Array<u64>#set:dataStart
  local.get $0
  i32.const 0
  call $~lib/array/Array<u64>#set:byteLength
  local.get $0
  i32.const 0
  call $~lib/array/Array<u64>#set:length_
  local.get $1
  i32.const 1073741820
  i32.const 3
  i32.shr_u
  i32.gt_u
  if
   i32.const 432
   i32.const 6176
   i32.const 70
   i32.const 60
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.tee $2
  i32.const 8
  local.tee $3
  local.get $2
  local.get $3
  i32.gt_u
  select
  i32.const 3
  i32.shl
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $5
  i32.store offset=4
  i32.const 2
  global.get $~lib/shared/runtime/Runtime.Incremental
  i32.ne
  drop
  local.get $0
  local.get $5
  call $~lib/array/Array<u64>#set:buffer
  local.get $0
  local.get $5
  call $~lib/array/Array<u64>#set:dataStart
  local.get $0
  local.get $4
  call $~lib/array/Array<u64>#set:byteLength
  local.get $0
  local.get $1
  call $~lib/array/Array<u64>#set:length_
  local.get $0
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
 )
 (func $assembly/index/JSON.parse<~lib/array/Array<u64>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i64)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i64)
  (local $13 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  block $assembly/index/parseArray<~lib/array/Array<u64>>|inlined.0 (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $0
   call $~lib/string/String#trimStart
   local.tee $2
   i32.store
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 1
   drop
   local.get $2
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.const 0
   call $~lib/array/Array<u64>#constructor
   local.tee $5
   i32.store offset=4
   i32.const 0
   local.set $6
   i32.const 0
   local.set $7
   i32.const 1
   local.set $8
   loop $for-loop|0
    local.get $8
    local.get $4
    call $~lib/string/String#get:length
    i32.const 1
    i32.sub
    i32.lt_s
    local.set $9
    local.get $9
    if
     local.get $4
     local.set $11
     local.get $8
     local.set $10
     local.get $11
     local.get $10
     i32.const 1
     i32.shl
     i32.add
     i32.load16_u
     local.set $7
     local.get $6
     i32.const 0
     i32.eq
     if (result i32)
      local.get $7
      i32.const 48
      i32.ge_s
      if (result i32)
       local.get $7
       i32.const 57
       i32.le_s
      else
       i32.const 0
      end
     else
      i32.const 0
     end
     if (result i32)
      i32.const 1
     else
      local.get $7
      i32.const 45
      i32.eq
     end
     if
      local.get $8
      local.set $6
     else
      local.get $7
      call $~lib/assemblyscript/std/assembly/util/string/isSpace
      if (result i32)
       i32.const 1
      else
       local.get $7
       global.get $assembly/chars/commaCode
       i32.eq
      end
      if (result i32)
       local.get $6
       i32.const 0
       i32.gt_s
      else
       i32.const 0
      end
      if
       local.get $5
       block $assembly/index/parseNumber<u64>|inlined.1 (result i64)
        global.get $~lib/memory/__stack_pointer
        local.get $4
        local.get $6
        local.get $8
        call $~lib/string/String#slice
        local.tee $10
        i32.store offset=8
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 1
        drop
        local.get $10
        i32.const 0
        call $~lib/number/U64.parseInt
        br $assembly/index/parseNumber<u64>|inlined.1
       end
       call $~lib/array/Array<u64>#push
       drop
       i32.const 0
       local.set $6
      end
     end
     local.get $8
     i32.const 1
     i32.add
     local.set $8
     br $for-loop|0
    end
   end
   block $for-break1
    loop $for-loop|1
     local.get $8
     local.get $6
     i32.const 1
     i32.sub
     i32.gt_s
     local.set $9
     local.get $9
     if
      local.get $4
      local.set $10
      local.get $8
      local.set $11
      local.get $10
      local.get $11
      i32.const 1
      i32.shl
      i32.add
      i32.load16_u
      local.set $7
      local.get $7
      global.get $assembly/chars/rightBracketCode
      i32.ne
      if
       local.get $5
       block $assembly/index/parseNumber<u64>|inlined.2 (result i64)
        global.get $~lib/memory/__stack_pointer
        local.get $4
        local.get $6
        local.get $8
        i32.const 1
        i32.add
        call $~lib/string/String#slice
        local.tee $11
        i32.store offset=12
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 1
        drop
        local.get $11
        i32.const 0
        call $~lib/number/U64.parseInt
        br $assembly/index/parseNumber<u64>|inlined.2
       end
       call $~lib/array/Array<u64>#push
       drop
       br $for-break1
      end
      local.get $8
      i32.const 1
      i32.sub
      local.set $8
      br $for-loop|1
     end
    end
   end
   local.get $5
   br $assembly/index/parseArray<~lib/array/Array<u64>>|inlined.0
  end
  local.set $13
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $13
  return
 )
 (func $~lib/array/Array<i32>#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.const 9
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  call $~lib/array/Array<i32>#set:buffer
  local.get $0
  i32.const 0
  call $~lib/array/Array<i32>#set:dataStart
  local.get $0
  i32.const 0
  call $~lib/array/Array<i32>#set:byteLength
  local.get $0
  i32.const 0
  call $~lib/array/Array<i32>#set:length_
  local.get $1
  i32.const 1073741820
  i32.const 2
  i32.shr_u
  i32.gt_u
  if
   i32.const 432
   i32.const 6176
   i32.const 70
   i32.const 60
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.tee $2
  i32.const 8
  local.tee $3
  local.get $2
  local.get $3
  i32.gt_u
  select
  i32.const 2
  i32.shl
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $5
  i32.store offset=4
  i32.const 2
  global.get $~lib/shared/runtime/Runtime.Incremental
  i32.ne
  drop
  local.get $0
  local.get $5
  call $~lib/array/Array<i32>#set:buffer
  local.get $0
  local.get $5
  call $~lib/array/Array<i32>#set:dataStart
  local.get $0
  local.get $4
  call $~lib/array/Array<i32>#set:byteLength
  local.get $0
  local.get $1
  call $~lib/array/Array<i32>#set:length_
  local.get $0
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
 )
 (func $assembly/index/JSON.parse<~lib/array/Array<i32>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  block $assembly/index/parseArray<~lib/array/Array<i32>>|inlined.0 (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $0
   call $~lib/string/String#trimStart
   local.tee $2
   i32.store
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 1
   drop
   local.get $2
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.const 0
   call $~lib/array/Array<i32>#constructor
   local.tee $5
   i32.store offset=4
   i32.const 0
   local.set $6
   i32.const 0
   local.set $7
   i32.const 1
   local.set $8
   loop $for-loop|0
    local.get $8
    local.get $4
    call $~lib/string/String#get:length
    i32.const 1
    i32.sub
    i32.lt_s
    local.set $9
    local.get $9
    if
     local.get $4
     local.set $11
     local.get $8
     local.set $10
     local.get $11
     local.get $10
     i32.const 1
     i32.shl
     i32.add
     i32.load16_u
     local.set $7
     local.get $6
     i32.const 0
     i32.eq
     if (result i32)
      local.get $7
      i32.const 48
      i32.ge_s
      if (result i32)
       local.get $7
       i32.const 57
       i32.le_s
      else
       i32.const 0
      end
     else
      i32.const 0
     end
     if (result i32)
      i32.const 1
     else
      local.get $7
      i32.const 45
      i32.eq
     end
     if
      local.get $8
      local.set $6
     else
      local.get $7
      call $~lib/assemblyscript/std/assembly/util/string/isSpace
      if (result i32)
       i32.const 1
      else
       local.get $7
       global.get $assembly/chars/commaCode
       i32.eq
      end
      if (result i32)
       local.get $6
       i32.const 0
       i32.gt_s
      else
       i32.const 0
      end
      if
       local.get $5
       block $assembly/index/parseNumber<i32>|inlined.1 (result i32)
        global.get $~lib/memory/__stack_pointer
        local.get $4
        local.get $6
        local.get $8
        call $~lib/string/String#slice
        local.tee $10
        i32.store offset=8
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 1
        drop
        local.get $10
        i32.const 0
        call $~lib/number/I32.parseInt
        br $assembly/index/parseNumber<i32>|inlined.1
       end
       call $~lib/array/Array<i32>#push
       drop
       i32.const 0
       local.set $6
      end
     end
     local.get $8
     i32.const 1
     i32.add
     local.set $8
     br $for-loop|0
    end
   end
   block $for-break1
    loop $for-loop|1
     local.get $8
     local.get $6
     i32.const 1
     i32.sub
     i32.gt_s
     local.set $9
     local.get $9
     if
      local.get $4
      local.set $11
      local.get $8
      local.set $10
      local.get $11
      local.get $10
      i32.const 1
      i32.shl
      i32.add
      i32.load16_u
      local.set $7
      local.get $7
      global.get $assembly/chars/rightBracketCode
      i32.ne
      if
       local.get $5
       block $assembly/index/parseNumber<i32>|inlined.2 (result i32)
        global.get $~lib/memory/__stack_pointer
        local.get $4
        local.get $6
        local.get $8
        i32.const 1
        i32.add
        call $~lib/string/String#slice
        local.tee $10
        i32.store offset=8
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 1
        drop
        local.get $10
        i32.const 0
        call $~lib/number/I32.parseInt
        br $assembly/index/parseNumber<i32>|inlined.2
       end
       call $~lib/array/Array<i32>#push
       drop
       br $for-break1
      end
      local.get $8
      i32.const 1
      i32.sub
      local.set $8
      br $for-loop|1
     end
    end
   end
   local.get $5
   br $assembly/index/parseArray<~lib/array/Array<i32>>|inlined.0
  end
  local.set $12
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $12
  return
 )
 (func $~lib/array/Array<i64>#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.const 15
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  call $~lib/array/Array<i64>#set:buffer
  local.get $0
  i32.const 0
  call $~lib/array/Array<i64>#set:dataStart
  local.get $0
  i32.const 0
  call $~lib/array/Array<i64>#set:byteLength
  local.get $0
  i32.const 0
  call $~lib/array/Array<i64>#set:length_
  local.get $1
  i32.const 1073741820
  i32.const 3
  i32.shr_u
  i32.gt_u
  if
   i32.const 432
   i32.const 6176
   i32.const 70
   i32.const 60
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.tee $2
  i32.const 8
  local.tee $3
  local.get $2
  local.get $3
  i32.gt_u
  select
  i32.const 3
  i32.shl
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $5
  i32.store offset=4
  i32.const 2
  global.get $~lib/shared/runtime/Runtime.Incremental
  i32.ne
  drop
  local.get $0
  local.get $5
  call $~lib/array/Array<i64>#set:buffer
  local.get $0
  local.get $5
  call $~lib/array/Array<i64>#set:dataStart
  local.get $0
  local.get $4
  call $~lib/array/Array<i64>#set:byteLength
  local.get $0
  local.get $1
  call $~lib/array/Array<i64>#set:length_
  local.get $0
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
 )
 (func $assembly/index/JSON.parse<~lib/array/Array<i64>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i64)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i64)
  (local $13 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  block $assembly/index/parseArray<~lib/array/Array<i64>>|inlined.0 (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $0
   call $~lib/string/String#trimStart
   local.tee $2
   i32.store
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 1
   drop
   local.get $2
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.const 0
   call $~lib/array/Array<i64>#constructor
   local.tee $5
   i32.store offset=4
   i32.const 0
   local.set $6
   i32.const 0
   local.set $7
   i32.const 1
   local.set $8
   loop $for-loop|0
    local.get $8
    local.get $4
    call $~lib/string/String#get:length
    i32.const 1
    i32.sub
    i32.lt_s
    local.set $9
    local.get $9
    if
     local.get $4
     local.set $11
     local.get $8
     local.set $10
     local.get $11
     local.get $10
     i32.const 1
     i32.shl
     i32.add
     i32.load16_u
     local.set $7
     local.get $6
     i32.const 0
     i32.eq
     if (result i32)
      local.get $7
      i32.const 48
      i32.ge_s
      if (result i32)
       local.get $7
       i32.const 57
       i32.le_s
      else
       i32.const 0
      end
     else
      i32.const 0
     end
     if (result i32)
      i32.const 1
     else
      local.get $7
      i32.const 45
      i32.eq
     end
     if
      local.get $8
      local.set $6
     else
      local.get $7
      call $~lib/assemblyscript/std/assembly/util/string/isSpace
      if (result i32)
       i32.const 1
      else
       local.get $7
       global.get $assembly/chars/commaCode
       i32.eq
      end
      if (result i32)
       local.get $6
       i32.const 0
       i32.gt_s
      else
       i32.const 0
      end
      if
       local.get $5
       block $assembly/index/parseNumber<i64>|inlined.1 (result i64)
        global.get $~lib/memory/__stack_pointer
        local.get $4
        local.get $6
        local.get $8
        call $~lib/string/String#slice
        local.tee $10
        i32.store offset=8
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 1
        drop
        local.get $10
        i32.const 0
        call $~lib/number/I64.parseInt
        br $assembly/index/parseNumber<i64>|inlined.1
       end
       call $~lib/array/Array<i64>#push
       drop
       i32.const 0
       local.set $6
      end
     end
     local.get $8
     i32.const 1
     i32.add
     local.set $8
     br $for-loop|0
    end
   end
   block $for-break1
    loop $for-loop|1
     local.get $8
     local.get $6
     i32.const 1
     i32.sub
     i32.gt_s
     local.set $9
     local.get $9
     if
      local.get $4
      local.set $10
      local.get $8
      local.set $11
      local.get $10
      local.get $11
      i32.const 1
      i32.shl
      i32.add
      i32.load16_u
      local.set $7
      local.get $7
      global.get $assembly/chars/rightBracketCode
      i32.ne
      if
       local.get $5
       block $assembly/index/parseNumber<i64>|inlined.2 (result i64)
        global.get $~lib/memory/__stack_pointer
        local.get $4
        local.get $6
        local.get $8
        i32.const 1
        i32.add
        call $~lib/string/String#slice
        local.tee $11
        i32.store offset=12
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 0
        drop
        i32.const 1
        drop
        local.get $11
        i32.const 0
        call $~lib/number/I64.parseInt
        br $assembly/index/parseNumber<i64>|inlined.2
       end
       call $~lib/array/Array<i64>#push
       drop
       br $for-break1
      end
      local.get $8
      i32.const 1
      i32.sub
      local.set $8
      br $for-loop|1
     end
    end
   end
   local.get $5
   br $assembly/index/parseArray<~lib/array/Array<i64>>|inlined.0
  end
  local.set $13
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $13
  return
 )
 (func $~lib/array/Array<f64>#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.const 16
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  call $~lib/array/Array<f64>#set:buffer
  local.get $0
  i32.const 0
  call $~lib/array/Array<f64>#set:dataStart
  local.get $0
  i32.const 0
  call $~lib/array/Array<f64>#set:byteLength
  local.get $0
  i32.const 0
  call $~lib/array/Array<f64>#set:length_
  local.get $1
  i32.const 1073741820
  i32.const 3
  i32.shr_u
  i32.gt_u
  if
   i32.const 432
   i32.const 6176
   i32.const 70
   i32.const 60
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.tee $2
  i32.const 8
  local.tee $3
  local.get $2
  local.get $3
  i32.gt_u
  select
  i32.const 3
  i32.shl
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $5
  i32.store offset=4
  i32.const 2
  global.get $~lib/shared/runtime/Runtime.Incremental
  i32.ne
  drop
  local.get $0
  local.get $5
  call $~lib/array/Array<f64>#set:buffer
  local.get $0
  local.get $5
  call $~lib/array/Array<f64>#set:dataStart
  local.get $0
  local.get $4
  call $~lib/array/Array<f64>#set:byteLength
  local.get $0
  local.get $1
  call $~lib/array/Array<f64>#set:length_
  local.get $0
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
 )
 (func $assembly/index/JSON.parse<~lib/array/Array<f64>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 f64)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 f64)
  (local $13 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1
  drop
  block $assembly/index/parseArray<~lib/array/Array<f64>>|inlined.0 (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $0
   call $~lib/string/String#trimStart
   local.tee $2
   i32.store
   i32.const 0
   drop
   i32.const 0
   drop
   i32.const 1
   drop
   local.get $2
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.const 0
   call $~lib/array/Array<f64>#constructor
   local.tee $5
   i32.store offset=4
   i32.const 0
   local.set $6
   i32.const 0
   local.set $7
   i32.const 1
   local.set $8
   loop $for-loop|0
    local.get $8
    local.get $4
    call $~lib/string/String#get:length
    i32.const 1
    i32.sub
    i32.lt_s
    local.set $9
    local.get $9
    if
     local.get $4
     local.set $11
     local.get $8
     local.set $10
     local.get $11
     local.get $10
     i32.const 1
     i32.shl
     i32.add
     i32.load16_u
     local.set $7
     local.get $6
     i32.const 0
     i32.eq
     if (result i32)
      local.get $7
      i32.const 48
      i32.ge_s
      if (result i32)
       local.get $7
       i32.const 57
       i32.le_s
      else
       i32.const 0
      end
     else
      i32.const 0
     end
     if (result i32)
      i32.const 1
     else
      local.get $7
      i32.const 45
      i32.eq
     end
     if
      local.get $8
      local.set $6
     else
      local.get $7
      call $~lib/assemblyscript/std/assembly/util/string/isSpace
      if (result i32)
       i32.const 1
      else
       local.get $7
       global.get $assembly/chars/commaCode
       i32.eq
      end
      if (result i32)
       local.get $6
       i32.const 0
       i32.gt_s
      else
       i32.const 0
      end
      if
       local.get $5
       block $assembly/index/parseNumber<f64>|inlined.1 (result f64)
        global.get $~lib/memory/__stack_pointer
        local.get $4
        local.get $6
        local.get $8
        call $~lib/string/String#slice
        local.tee $10
        i32.store offset=8
        i32.const 1
        drop
        local.get $10
        call $~lib/number/F64.parseFloat
        br $assembly/index/parseNumber<f64>|inlined.1
       end
       call $~lib/array/Array<f64>#push
       drop
       i32.const 0
       local.set $6
      end
     end
     local.get $8
     i32.const 1
     i32.add
     local.set $8
     br $for-loop|0
    end
   end
   block $for-break1
    loop $for-loop|1
     local.get $8
     local.get $6
     i32.const 1
     i32.sub
     i32.gt_s
     local.set $9
     local.get $9
     if
      local.get $4
      local.set $10
      local.get $8
      local.set $11
      local.get $10
      local.get $11
      i32.const 1
      i32.shl
      i32.add
      i32.load16_u
      local.set $7
      local.get $7
      global.get $assembly/chars/rightBracketCode
      i32.ne
      if
       local.get $5
       block $assembly/index/parseNumber<f64>|inlined.2 (result f64)
        global.get $~lib/memory/__stack_pointer
        local.get $4
        local.get $6
        local.get $8
        i32.const 1
        i32.add
        call $~lib/string/String#slice
        local.tee $11
        i32.store offset=12
        i32.const 1
        drop
        local.get $11
        call $~lib/number/F64.parseFloat
        br $assembly/index/parseNumber<f64>|inlined.2
       end
       call $~lib/array/Array<f64>#push
       drop
       br $for-break1
      end
      local.get $8
      i32.const 1
      i32.sub
      local.set $8
      br $for-loop|1
     end
    end
   end
   local.get $5
   br $assembly/index/parseArray<~lib/array/Array<f64>>|inlined.0
  end
  local.set $13
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $13
  return
 )
 (func $~lib/array/Array<bool>#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.const 17
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  call $~lib/array/Array<bool>#set:buffer
  local.get $0
  i32.const 0
  call $~lib/array/Array<bool>#set:dataStart
  local.get $0
  i32.const 0
  call $~lib/array/Array<bool>#set:byteLength
  local.get $0
  i32.const 0
  call $~lib/array/Array<bool>#set:length_
  local.get $1
  i32.const 1073741820
  i32.const 0
  i32.shr_u
  i32.gt_u
  if
   i32.const 432
   i32.const 6176
   i32.const 70
   i32.const 60
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.tee $2
  i32.const 8
  local.tee $3
  local.get $2
  local.get $3
  i32.gt_u
  select
  i32.const 0
  i32.shl
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $5
  i32.store offset=4
  i32.const 2
  global.get $~lib/shared/runtime/Runtime.Incremental
  i32.ne
  drop
  local.get $0
  local.get $5
  call $~lib/array/Array<bool>#set:buffer
  local.get $0
  local.get $5
  call $~lib/array/Array<bool>#set:dataStart
  local.get $0
  local.get $4
  call $~lib/array/Array<bool>#set:byteLength
  local.get $0
  local.get $1
  call $~lib/array/Array<bool>#set:length_
  local.get $0
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
 )
 (func $~lib/array/Array<~lib/array/Array<i64>>#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.const 19
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  call $~lib/array/Array<~lib/array/Array<i64>>#set:buffer
  local.get $0
  i32.const 0
  call $~lib/array/Array<~lib/array/Array<i64>>#set:dataStart
  local.get $0
  i32.const 0
  call $~lib/array/Array<~lib/array/Array<i64>>#set:byteLength
  local.get $0
  i32.const 0
  call $~lib/array/Array<~lib/array/Array<i64>>#set:length_
  local.get $1
  i32.const 1073741820
  i32.const 2
  i32.shr_u
  i32.gt_u
  if
   i32.const 432
   i32.const 6176
   i32.const 70
   i32.const 60
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.tee $2
  i32.const 8
  local.tee $3
  local.get $2
  local.get $3
  i32.gt_u
  select
  i32.const 2
  i32.shl
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $5
  i32.store offset=4
  i32.const 2
  global.get $~lib/shared/runtime/Runtime.Incremental
  i32.ne
  drop
  local.get $0
  local.get $5
  call $~lib/array/Array<~lib/array/Array<i64>>#set:buffer
  local.get $0
  local.get $5
  call $~lib/array/Array<~lib/array/Array<i64>>#set:dataStart
  local.get $0
  local.get $4
  call $~lib/array/Array<~lib/array/Array<i64>>#set:byteLength
  local.get $0
  local.get $1
  call $~lib/array/Array<~lib/array/Array<i64>>#set:length_
  local.get $0
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
 )
 (func $~lib/array/Array<~lib/array/Array<f64>>#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.const 20
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  call $~lib/array/Array<~lib/array/Array<f64>>#set:buffer
  local.get $0
  i32.const 0
  call $~lib/array/Array<~lib/array/Array<f64>>#set:dataStart
  local.get $0
  i32.const 0
  call $~lib/array/Array<~lib/array/Array<f64>>#set:byteLength
  local.get $0
  i32.const 0
  call $~lib/array/Array<~lib/array/Array<f64>>#set:length_
  local.get $1
  i32.const 1073741820
  i32.const 2
  i32.shr_u
  i32.gt_u
  if
   i32.const 432
   i32.const 6176
   i32.const 70
   i32.const 60
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.tee $2
  i32.const 8
  local.tee $3
  local.get $2
  local.get $3
  i32.gt_u
  select
  i32.const 2
  i32.shl
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $5
  i32.store offset=4
  i32.const 2
  global.get $~lib/shared/runtime/Runtime.Incremental
  i32.ne
  drop
  local.get $0
  local.get $5
  call $~lib/array/Array<~lib/array/Array<f64>>#set:buffer
  local.get $0
  local.get $5
  call $~lib/array/Array<~lib/array/Array<f64>>#set:dataStart
  local.get $0
  local.get $4
  call $~lib/array/Array<~lib/array/Array<f64>>#set:byteLength
  local.get $0
  local.get $1
  call $~lib/array/Array<~lib/array/Array<f64>>#set:length_
  local.get $0
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
 )
 (func $~lib/array/Array<~lib/array/Array<bool>>#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.const 21
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  call $~lib/array/Array<~lib/array/Array<bool>>#set:buffer
  local.get $0
  i32.const 0
  call $~lib/array/Array<~lib/array/Array<bool>>#set:dataStart
  local.get $0
  i32.const 0
  call $~lib/array/Array<~lib/array/Array<bool>>#set:byteLength
  local.get $0
  i32.const 0
  call $~lib/array/Array<~lib/array/Array<bool>>#set:length_
  local.get $1
  i32.const 1073741820
  i32.const 2
  i32.shr_u
  i32.gt_u
  if
   i32.const 432
   i32.const 6176
   i32.const 70
   i32.const 60
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.tee $2
  i32.const 8
  local.tee $3
  local.get $2
  local.get $3
  i32.gt_u
  select
  i32.const 2
  i32.shl
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $5
  i32.store offset=4
  i32.const 2
  global.get $~lib/shared/runtime/Runtime.Incremental
  i32.ne
  drop
  local.get $0
  local.get $5
  call $~lib/array/Array<~lib/array/Array<bool>>#set:buffer
  local.get $0
  local.get $5
  call $~lib/array/Array<~lib/array/Array<bool>>#set:dataStart
  local.get $0
  local.get $4
  call $~lib/array/Array<~lib/array/Array<bool>>#set:byteLength
  local.get $0
  local.get $1
  call $~lib/array/Array<~lib/array/Array<bool>>#set:length_
  local.get $0
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
 )
 (func $~lib/array/Array<~lib/array/Array<~lib/string/String>>#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.const 22
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#set:buffer
  local.get $0
  i32.const 0
  call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#set:dataStart
  local.get $0
  i32.const 0
  call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#set:byteLength
  local.get $0
  i32.const 0
  call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#set:length_
  local.get $1
  i32.const 1073741820
  i32.const 2
  i32.shr_u
  i32.gt_u
  if
   i32.const 432
   i32.const 6176
   i32.const 70
   i32.const 60
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.tee $2
  i32.const 8
  local.tee $3
  local.get $2
  local.get $3
  i32.gt_u
  select
  i32.const 2
  i32.shl
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $5
  i32.store offset=4
  i32.const 2
  global.get $~lib/shared/runtime/Runtime.Incremental
  i32.ne
  drop
  local.get $0
  local.get $5
  call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#set:buffer
  local.get $0
  local.get $5
  call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#set:dataStart
  local.get $0
  local.get $4
  call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#set:byteLength
  local.get $0
  local.get $1
  call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#set:length_
  local.get $0
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
 )
 (func $export:node_modules/@as-pect/assembly/assembly/internal/call/__call (param $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  call $node_modules/@as-pect/assembly/assembly/internal/call/__call
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
)
