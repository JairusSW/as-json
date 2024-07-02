(module
 (type $0 (func (param i32 i32)))
 (type $1 (func (param i32) (result i32)))
 (type $2 (func (param i32 i32) (result i32)))
 (type $3 (func (param i32 i32 i32) (result i32)))
 (type $4 (func (param i32)))
 (type $5 (func))
 (type $6 (func (param i32 i32 i32)))
 (type $7 (func (param i32 i32 i32 i32) (result i32)))
 (type $8 (func (param i32 i64)))
 (type $9 (func (param i32 i64 i32) (result i32)))
 (type $10 (func (param i32 i32 i32 i32 i32) (result i32)))
 (type $11 (func (param i32) (result i64)))
 (type $12 (func (param i32 i32 i32 i32)))
 (type $13 (func (param i32 i32 i64) (result i32)))
 (type $14 (func (result i32)))
 (type $15 (func (param i32 i64 i32)))
 (type $16 (func (param i64 i32) (result i32)))
 (type $17 (func (param i32 i64 i32 i32)))
 (type $18 (func (param i64) (result i32)))
 (type $19 (func (param i32 i32 i32 i32 i32 i32) (result i32)))
 (type $20 (func (param i32 i64 i32 i32) (result i32)))
 (type $21 (func (param i32 i64) (result i32)))
 (type $22 (func (param i32 i32 i32 i32) (result i64)))
 (import "wasi_snapshot_preview1" "fd_write" (func $~lib/bindings/wasi_snapshot_preview1/fd_write (param i32 i32 i32 i32) (result i32)))
 (import "wasi_snapshot_preview1" "proc_exit" (func $~lib/bindings/wasi_snapshot_preview1/proc_exit (param i32)))
 (global $~lib/shared/runtime/Runtime.Stub i32 (i32.const 0))
 (global $~lib/shared/runtime/Runtime.Minimal i32 (i32.const 1))
 (global $~lib/shared/runtime/Runtime.Incremental i32 (i32.const 2))
 (global $~lib/native/ASC_SHRINK_LEVEL i32 (i32.const 0))
 (global $~argumentsLength (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/total (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/threshold (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/state (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/visitCount (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/pinSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/iter (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/toSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/white (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/fromSpace (mut i32) (i32.const 0))
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $~lib/native/ASC_LOW_MEMORY_LIMIT i32 (i32.const 0))
 (global $~lib/native/ASC_RUNTIME i32 (i32.const 2))
 (global $~lib/as-test/assembly/coverage/Coverage.SN (mut i32) (i32.const 0))
 (global $~lib/json-as/assembly/sink/MIN_BUFFER_LEN i32 (i32.const 32))
 (global $~lib/json-as/assembly/sink/MIN_BUFFER_SIZE i32 (i32.const 64))
 (global $~lib/json-as/assembly/sink/NEW_LINE_CHAR i32 (i32.const 10))
 (global $~lib/builtins/i32.MAX_VALUE i32 (i32.const 2147483647))
 (global $~lib/number/I32.MAX_VALUE i32 (i32.const 2147483647))
 (global $~lib/native/ASC_NO_ASSERT i32 (i32.const 0))
 (global $~lib/@hypercubed/as-mpz/assembly/index/MpZ.ZERO (mut i32) (i32.const 0))
 (global $~lib/@hypercubed/as-mpz/assembly/index/MpZ.ONE (mut i32) (i32.const 0))
 (global $~lib/@hypercubed/as-mpz/assembly/index/MpZ.TWO (mut i32) (i32.const 0))
 (global $~lib/@hypercubed/as-mpz/assembly/index/MpZ.TEN (mut i32) (i32.const 0))
 (global $~lib/json-as/assembly/index/STORAGE i32 (i32.const 8))
 (global $~lib/json-as/assembly/index/JSON.Types.U8 i32 (i32.const 0))
 (global $~lib/json-as/assembly/index/JSON.Types.U16 i32 (i32.const 1))
 (global $~lib/json-as/assembly/index/JSON.Types.U32 i32 (i32.const 2))
 (global $~lib/json-as/assembly/index/JSON.Types.U64 i32 (i32.const 3))
 (global $~lib/json-as/assembly/index/JSON.Types.F32 i32 (i32.const 4))
 (global $~lib/json-as/assembly/index/JSON.Types.F64 i32 (i32.const 5))
 (global $~lib/json-as/assembly/index/JSON.Types.Bool i32 (i32.const 6))
 (global $~lib/json-as/assembly/index/JSON.Types.String i32 (i32.const 7))
 (global $~lib/json-as/assembly/index/JSON.Types.ManagedString i32 (i32.const 8))
 (global $~lib/json-as/assembly/index/JSON.Types.Struct i32 (i32.const 9))
 (global $~lib/json-as/assembly/index/JSON.Types.ManagedStruct i32 (i32.const 10))
 (global $~lib/json-as/assembly/index/JSON.Types.Array i32 (i32.const 11))
 (global $~lib/json-as/assembly/index/JSON.Types.ManagedArray i32 (i32.const 12))
 (global $assembly/test/s1 (mut i32) (i32.const 0))
 (global $~lib/wasi_process/wasi_process.stdout i32 (i32.const 1))
 (global $~lib/wasi_internal/tempbuf i32 (i32.const 4016))
 (global $assembly/test/s2 (mut i32) (i32.const 0))
 (global $assembly/test/state (mut i32) (i32.const 0))
 (global $~lib/rt/__rtti_base i32 (i32.const 7696))
 (global $~lib/memory/__data_end i32 (i32.const 7780))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 40548))
 (global $~lib/memory/__heap_base i32 (i32.const 40548))
 (global $~started (mut i32) (i32.const 0))
 (memory $0 1)
 (data $0 (i32.const 12) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00$\00\00\00U\00n\00p\00a\00i\00r\00e\00d\00 \00s\00u\00r\00r\00o\00g\00a\00t\00e\00\00\00\00\00\00\00\00\00")
 (data $1 (i32.const 76) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\1c\00\00\00~\00l\00i\00b\00/\00s\00t\00r\00i\00n\00g\00.\00t\00s\00")
 (data $2 (i32.const 124) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00(\00\00\00A\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e\00\00\00\00\00")
 (data $3 (i32.const 188) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00 \00\00\00~\00l\00i\00b\00/\00r\00t\00/\00i\00t\00c\00m\00s\00.\00t\00s\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $4 (i32.const 256) "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $5 (i32.const 288) "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $6 (i32.const 316) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e\00\00\00\00\00\00\00\00\00")
 (data $7 (i32.const 380) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\14\00\00\00~\00l\00i\00b\00/\00r\00t\00.\00t\00s\00\00\00\00\00\00\00\00\00")
 (data $8 (i32.const 432) "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $9 (i32.const 460) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $10 (i32.const 524) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h\00")
 (data $11 (i32.const 572) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00&\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s\00\00\00\00\00\00\00")
 (data $12 (i32.const 636) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00 \00\00\00a\00s\00s\00e\00m\00b\00l\00y\00/\00t\00e\00s\00t\00.\00t\00s\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $13 (i32.const 700) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\12\00\00\003\003\009\001\00e\00c\007\00c\00e\00\00\00\00\00\00\00\00\00\00\00")
 (data $14 (i32.const 748) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00B\00l\00o\00c\00k\00\00\00")
 (data $15 (i32.const 780) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $16 (i32.const 812) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\12\00\00\003\003\009\002\002\007\006\000\009\00\00\00\00\00\00\00\00\00\00\00")
 (data $17 (i32.const 860) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\12\00\00\003\003\009\002\002\007\006\002\008\00\00\00\00\00\00\00\00\00\00\00")
 (data $18 (i32.const 908) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\10\00\00\001\004\00d\003\003\005\007\009\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $19 (i32.const 956) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\10\00\00\001\004\00e\002\00a\00e\00b\001\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $20 (i32.const 1004) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\10\00\00\001\004\00e\003\00a\009\003\00c\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $21 (i32.const 1052) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\10\00\00\001\004\00f\001\004\005\003\009\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $22 (i32.const 1100) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\10\00\00\001\004\00f\00e\00e\00b\00b\00f\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $23 (i32.const 1148) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\10\00\00\001\005\000\000\00b\006\003\005\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $24 (i32.const 1196) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\10\00\00\001\005\000\00d\00e\00c\00d\007\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $25 (i32.const 1244) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\10\00\00\001\005\001\00b\001\004\001\008\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $26 (i32.const 1292) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\08\00\00\00t\00r\00u\00e\00\00\00\00\00")
 (data $27 (i32.const 1324) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00f\00a\00l\00s\00e\00\00\00")
 (data $28 (i32.const 1356) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\08\00\00\00n\00u\00l\00l\00\00\00\00\00")
 (data $29 (i32.const 1388) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\02\00\00\00{\00\00\00\00\00\00\00\00\00\00\00")
 (data $30 (i32.const 1420) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\02\00\00\00[\00\00\00\00\00\00\00\00\00\00\00")
 (data $31 (i32.const 1452) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\04\00\00\00[\00]\00\00\00\00\00\00\00\00\00")
 (data $32 (i32.const 1484) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\02\00\00\00:\00\00\00\00\00\00\00\00\00\00\00")
 (data $33 (i32.const 1516) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\02\00\00\00,\00\00\00\00\00\00\00\00\00\00\00")
 (data $34 (i32.const 1548) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\02\00\00\00}\00\00\00\00\00\00\00\00\00\00\00")
 (data $35 (i32.const 1580) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\02\00\00\00]\00\00\00\00\00\00\00\00\00\00\00")
 (data $36 (i32.const 1612) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\02\00\00\00\"\00\00\00\00\00\00\00\00\00\00\00")
 (data $37 (i32.const 1644) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\04\00\00\00\"\00\"\00\00\00\00\00\00\00\00\00")
 (data $38 (i32.const 1676) "L\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00:\00\00\00M\00p\00Z\00 \00m\00u\00s\00t\00 \00h\00a\00v\00e\00 \00a\00t\00 \00l\00e\00a\00s\00t\00 \001\00 \00l\00i\00m\00b\00\00\00")
 (data $39 (i32.const 1756) "l\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00R\00\00\00~\00l\00i\00b\00/\00@\00h\00y\00p\00e\00r\00c\00u\00b\00e\00d\00/\00a\00s\00-\00m\00p\00z\00/\00a\00s\00s\00e\00m\00b\00l\00y\00/\00i\00n\00d\00e\00x\00.\00t\00s\00\00\00\00\00\00\00\00\00\00\00")
 (data $40 (i32.const 1868) "\1c\00\00\00\00\00\00\00\00\00\00\00\t\00\00\00\04\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $41 (i32.const 1900) "\1c\00\00\00\00\00\00\00\00\00\00\00\t\00\00\00\04\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $42 (i32.const 1932) "\1c\00\00\00\00\00\00\00\00\00\00\00\t\00\00\00\04\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00")
 (data $43 (i32.const 1964) "\1c\00\00\00\00\00\00\00\00\00\00\00\t\00\00\00\04\00\00\00\02\00\00\00\00\00\00\00\00\00\00\00")
 (data $44 (i32.const 1996) "\1c\00\00\00\00\00\00\00\00\00\00\00\t\00\00\00\04\00\00\00\n\00\00\00\00\00\00\00\00\00\00\00")
 (data $45 (i32.const 2028) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\16\00\00\00h\00e\00l\00l\00o\00 \00w\00o\00r\00l\00d\00\00\00\00\00\00\00")
 (data $46 (i32.const 2076) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00$\00\00\00~\00l\00i\00b\00/\00t\00y\00p\00e\00d\00a\00r\00r\00a\00y\00.\00t\00s\00\00\00\00\00\00\00\00\00")
 (data $47 (i32.const 2140) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00 \00\00\00~\00l\00i\00b\00/\00d\00a\00t\00a\00v\00i\00e\00w\00.\00t\00s\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $48 (i32.const 2204) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\02\00\00\00 \00\00\00\00\00\00\00\00\00\00\00")
 (data $49 (i32.const 2236) "|\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00d\00\00\00t\00o\00S\00t\00r\00i\00n\00g\00(\00)\00 \00r\00a\00d\00i\00x\00 \00a\00r\00g\00u\00m\00e\00n\00t\00 \00m\00u\00s\00t\00 \00b\00e\00 \00b\00e\00t\00w\00e\00e\00n\00 \002\00 \00a\00n\00d\00 \003\006\00\00\00\00\00\00\00\00\00")
 (data $50 (i32.const 2364) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00&\00\00\00~\00l\00i\00b\00/\00u\00t\00i\00l\00/\00n\00u\00m\00b\00e\00r\00.\00t\00s\00\00\00\00\00\00\00")
 (data $51 (i32.const 2428) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\02\00\00\000\00\00\00\00\00\00\00\00\00\00\00")
 (data $52 (i32.const 2460) "0\000\000\001\000\002\000\003\000\004\000\005\000\006\000\007\000\008\000\009\001\000\001\001\001\002\001\003\001\004\001\005\001\006\001\007\001\008\001\009\002\000\002\001\002\002\002\003\002\004\002\005\002\006\002\007\002\008\002\009\003\000\003\001\003\002\003\003\003\004\003\005\003\006\003\007\003\008\003\009\004\000\004\001\004\002\004\003\004\004\004\005\004\006\004\007\004\008\004\009\005\000\005\001\005\002\005\003\005\004\005\005\005\006\005\007\005\008\005\009\006\000\006\001\006\002\006\003\006\004\006\005\006\006\006\007\006\008\006\009\007\000\007\001\007\002\007\003\007\004\007\005\007\006\007\007\007\008\007\009\008\000\008\001\008\002\008\003\008\004\008\005\008\006\008\007\008\008\008\009\009\000\009\001\009\002\009\003\009\004\009\005\009\006\009\007\009\008\009\009\00")
 (data $53 (i32.const 2860) "\1c\04\00\00\00\00\00\00\00\00\00\00\02\00\00\00\00\04\00\000\000\000\001\000\002\000\003\000\004\000\005\000\006\000\007\000\008\000\009\000\00a\000\00b\000\00c\000\00d\000\00e\000\00f\001\000\001\001\001\002\001\003\001\004\001\005\001\006\001\007\001\008\001\009\001\00a\001\00b\001\00c\001\00d\001\00e\001\00f\002\000\002\001\002\002\002\003\002\004\002\005\002\006\002\007\002\008\002\009\002\00a\002\00b\002\00c\002\00d\002\00e\002\00f\003\000\003\001\003\002\003\003\003\004\003\005\003\006\003\007\003\008\003\009\003\00a\003\00b\003\00c\003\00d\003\00e\003\00f\004\000\004\001\004\002\004\003\004\004\004\005\004\006\004\007\004\008\004\009\004\00a\004\00b\004\00c\004\00d\004\00e\004\00f\005\000\005\001\005\002\005\003\005\004\005\005\005\006\005\007\005\008\005\009\005\00a\005\00b\005\00c\005\00d\005\00e\005\00f\006\000\006\001\006\002\006\003\006\004\006\005\006\006\006\007\006\008\006\009\006\00a\006\00b\006\00c\006\00d\006\00e\006\00f\007\000\007\001\007\002\007\003\007\004\007\005\007\006\007\007\007\008\007\009\007\00a\007\00b\007\00c\007\00d\007\00e\007\00f\008\000\008\001\008\002\008\003\008\004\008\005\008\006\008\007\008\008\008\009\008\00a\008\00b\008\00c\008\00d\008\00e\008\00f\009\000\009\001\009\002\009\003\009\004\009\005\009\006\009\007\009\008\009\009\009\00a\009\00b\009\00c\009\00d\009\00e\009\00f\00a\000\00a\001\00a\002\00a\003\00a\004\00a\005\00a\006\00a\007\00a\008\00a\009\00a\00a\00a\00b\00a\00c\00a\00d\00a\00e\00a\00f\00b\000\00b\001\00b\002\00b\003\00b\004\00b\005\00b\006\00b\007\00b\008\00b\009\00b\00a\00b\00b\00b\00c\00b\00d\00b\00e\00b\00f\00c\000\00c\001\00c\002\00c\003\00c\004\00c\005\00c\006\00c\007\00c\008\00c\009\00c\00a\00c\00b\00c\00c\00c\00d\00c\00e\00c\00f\00d\000\00d\001\00d\002\00d\003\00d\004\00d\005\00d\006\00d\007\00d\008\00d\009\00d\00a\00d\00b\00d\00c\00d\00d\00d\00e\00d\00f\00e\000\00e\001\00e\002\00e\003\00e\004\00e\005\00e\006\00e\007\00e\008\00e\009\00e\00a\00e\00b\00e\00c\00e\00d\00e\00e\00e\00f\00f\000\00f\001\00f\002\00f\003\00f\004\00f\005\00f\006\00f\007\00f\008\00f\009\00f\00a\00f\00b\00f\00c\00f\00d\00f\00e\00f\00f\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $54 (i32.const 3916) "\\\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00H\00\00\000\001\002\003\004\005\006\007\008\009\00a\00b\00c\00d\00e\00f\00g\00h\00i\00j\00k\00l\00m\00n\00o\00p\00q\00r\00s\00t\00u\00v\00w\00x\00y\00z\00\00\00\00\00")
 (data $55 (i32.const 4016) "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $56 (i32.const 4044) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\0e\00\00\00S\00U\00C\00C\00E\00S\00S\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $57 (i32.const 4092) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\0c\00\00\00T\00O\00O\00B\00I\00G\00")
 (data $58 (i32.const 4124) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00A\00C\00C\00E\00S\00\00\00")
 (data $59 (i32.const 4156) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\12\00\00\00A\00D\00D\00R\00I\00N\00U\00S\00E\00\00\00\00\00\00\00\00\00\00\00")
 (data $60 (i32.const 4204) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\18\00\00\00A\00D\00D\00R\00N\00O\00T\00A\00V\00A\00I\00L\00\00\00\00\00")
 (data $61 (i32.const 4252) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\16\00\00\00A\00F\00N\00O\00S\00U\00P\00P\00O\00R\00T\00\00\00\00\00\00\00")
 (data $62 (i32.const 4300) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00A\00G\00A\00I\00N\00\00\00")
 (data $63 (i32.const 4332) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\0e\00\00\00A\00L\00R\00E\00A\00D\00Y\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $64 (i32.const 4380) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\08\00\00\00B\00A\00D\00F\00\00\00\00\00")
 (data $65 (i32.const 4412) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\0c\00\00\00B\00A\00D\00M\00S\00G\00")
 (data $66 (i32.const 4444) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\08\00\00\00B\00U\00S\00Y\00\00\00\00\00")
 (data $67 (i32.const 4476) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\10\00\00\00C\00A\00N\00C\00E\00L\00E\00D\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $68 (i32.const 4524) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00C\00H\00I\00L\00D\00\00\00")
 (data $69 (i32.const 4556) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\16\00\00\00C\00O\00N\00N\00A\00B\00O\00R\00T\00E\00D\00\00\00\00\00\00\00")
 (data $70 (i32.const 4604) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\16\00\00\00C\00O\00N\00N\00R\00E\00F\00U\00S\00E\00D\00\00\00\00\00\00\00")
 (data $71 (i32.const 4652) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\12\00\00\00C\00O\00N\00N\00R\00E\00S\00E\00T\00\00\00\00\00\00\00\00\00\00\00")
 (data $72 (i32.const 4700) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\0c\00\00\00D\00E\00A\00D\00L\00K\00")
 (data $73 (i32.const 4732) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\16\00\00\00D\00E\00S\00T\00A\00D\00D\00R\00R\00E\00Q\00\00\00\00\00\00\00")
 (data $74 (i32.const 4780) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\06\00\00\00D\00O\00M\00\00\00\00\00\00\00")
 (data $75 (i32.const 4812) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00D\00Q\00U\00O\00T\00\00\00")
 (data $76 (i32.const 4844) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00E\00X\00I\00S\00T\00\00\00")
 (data $77 (i32.const 4876) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00F\00A\00U\00L\00T\00\00\00")
 (data $78 (i32.const 4908) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\08\00\00\00F\00B\00I\00G\00\00\00\00\00")
 (data $79 (i32.const 4940) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\16\00\00\00H\00O\00S\00T\00U\00N\00R\00E\00A\00C\00H\00\00\00\00\00\00\00")
 (data $80 (i32.const 4988) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\08\00\00\00I\00D\00R\00M\00\00\00\00\00")
 (data $81 (i32.const 5020) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00I\00L\00S\00E\00Q\00\00\00")
 (data $82 (i32.const 5052) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\14\00\00\00I\00N\00P\00R\00O\00G\00R\00E\00S\00S\00\00\00\00\00\00\00\00\00")
 (data $83 (i32.const 5100) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\08\00\00\00I\00N\00T\00R\00\00\00\00\00")
 (data $84 (i32.const 5132) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00I\00N\00V\00A\00L\00\00\00")
 (data $85 (i32.const 5164) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\04\00\00\00I\00O\00\00\00\00\00\00\00\00\00")
 (data $86 (i32.const 5196) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\0c\00\00\00I\00S\00C\00O\00N\00N\00")
 (data $87 (i32.const 5228) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00I\00S\00D\00I\00R\00\00\00")
 (data $88 (i32.const 5260) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\08\00\00\00L\00O\00O\00P\00\00\00\00\00")
 (data $89 (i32.const 5292) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00M\00F\00I\00L\00E\00\00\00")
 (data $90 (i32.const 5324) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00M\00L\00I\00N\00K\00\00\00")
 (data $91 (i32.const 5356) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\0e\00\00\00M\00S\00G\00S\00I\00Z\00E\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $92 (i32.const 5404) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\10\00\00\00M\00U\00L\00T\00I\00H\00O\00P\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $93 (i32.const 5452) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\16\00\00\00N\00A\00M\00E\00T\00O\00O\00L\00O\00N\00G\00\00\00\00\00\00\00")
 (data $94 (i32.const 5500) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\0e\00\00\00N\00E\00T\00D\00O\00W\00N\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $95 (i32.const 5548) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\10\00\00\00N\00E\00T\00R\00E\00S\00E\00T\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $96 (i32.const 5596) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\14\00\00\00N\00E\00T\00U\00N\00R\00E\00A\00C\00H\00\00\00\00\00\00\00\00\00")
 (data $97 (i32.const 5644) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00N\00F\00I\00L\00E\00\00\00")
 (data $98 (i32.const 5676) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\0c\00\00\00N\00O\00B\00U\00F\00S\00")
 (data $99 (i32.const 5708) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00N\00O\00D\00E\00V\00\00\00")
 (data $100 (i32.const 5740) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00N\00O\00E\00N\00T\00\00\00")
 (data $101 (i32.const 5772) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\0c\00\00\00N\00O\00E\00X\00E\00C\00")
 (data $102 (i32.const 5804) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00N\00O\00L\00C\00K\00\00\00")
 (data $103 (i32.const 5836) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\0c\00\00\00N\00O\00L\00I\00N\00K\00")
 (data $104 (i32.const 5868) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00N\00O\00M\00E\00M\00\00\00")
 (data $105 (i32.const 5900) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00N\00O\00M\00S\00G\00\00\00")
 (data $106 (i32.const 5932) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\14\00\00\00N\00O\00P\00R\00O\00T\00O\00O\00P\00T\00\00\00\00\00\00\00\00\00")
 (data $107 (i32.const 5980) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00N\00O\00S\00P\00C\00\00\00")
 (data $108 (i32.const 6012) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00N\00O\00S\00Y\00S\00\00\00")
 (data $109 (i32.const 6044) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\0e\00\00\00N\00O\00T\00C\00O\00N\00N\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $110 (i32.const 6092) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\0c\00\00\00N\00O\00T\00D\00I\00R\00")
 (data $111 (i32.const 6124) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\10\00\00\00N\00O\00T\00E\00M\00P\00T\00Y\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $112 (i32.const 6172) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\1c\00\00\00N\00O\00T\00R\00E\00C\00O\00V\00E\00R\00A\00B\00L\00E\00")
 (data $113 (i32.const 6220) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\0e\00\00\00N\00O\00T\00S\00O\00C\00K\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $114 (i32.const 6268) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\0c\00\00\00N\00O\00T\00S\00U\00P\00")
 (data $115 (i32.const 6300) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00N\00O\00T\00T\00Y\00\00\00")
 (data $116 (i32.const 6332) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\08\00\00\00N\00X\00I\00O\00\00\00\00\00")
 (data $117 (i32.const 6364) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\10\00\00\00O\00V\00E\00R\00F\00L\00O\00W\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $118 (i32.const 6412) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\12\00\00\00O\00W\00N\00E\00R\00D\00E\00A\00D\00\00\00\00\00\00\00\00\00\00\00")
 (data $119 (i32.const 6460) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\08\00\00\00P\00E\00R\00M\00\00\00\00\00")
 (data $120 (i32.const 6492) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\08\00\00\00P\00I\00P\00E\00\00\00\00\00")
 (data $121 (i32.const 6524) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00P\00R\00O\00T\00O\00\00\00")
 (data $122 (i32.const 6556) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\1c\00\00\00P\00R\00O\00T\00O\00N\00O\00S\00U\00P\00P\00O\00R\00T\00")
 (data $123 (i32.const 6604) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\12\00\00\00P\00R\00O\00T\00O\00T\00Y\00P\00E\00\00\00\00\00\00\00\00\00\00\00")
 (data $124 (i32.const 6652) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00R\00A\00N\00G\00E\00\00\00")
 (data $125 (i32.const 6684) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\08\00\00\00R\00O\00F\00S\00\00\00\00\00")
 (data $126 (i32.const 6716) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00S\00P\00I\00P\00E\00\00\00")
 (data $127 (i32.const 6748) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\08\00\00\00S\00R\00C\00H\00\00\00\00\00")
 (data $128 (i32.const 6780) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\n\00\00\00S\00T\00A\00L\00E\00\00\00")
 (data $129 (i32.const 6812) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\10\00\00\00T\00I\00M\00E\00D\00O\00U\00T\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $130 (i32.const 6860) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\0c\00\00\00T\00X\00T\00B\00S\00Y\00")
 (data $131 (i32.const 6892) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\08\00\00\00X\00D\00E\00V\00\00\00\00\00")
 (data $132 (i32.const 6924) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\14\00\00\00N\00O\00T\00C\00A\00P\00A\00B\00L\00E\00\00\00\00\00\00\00\00\00")
 (data $133 (i32.const 6972) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\0e\00\00\00U\00N\00K\00N\00O\00W\00N\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $134 (i32.const 7020) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00(\00\00\00~\00l\00i\00b\00/\00w\00a\00s\00i\00_\00p\00r\00o\00c\00e\00s\00s\00.\00t\00s\00\00\00\00\00")
 (data $135 (i32.const 7084) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\02\00\00\00\n\00\00\00\00\00\00\00\00\00\00\00")
 (data $136 (i32.const 7116) "\fc\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\ea\00\00\00{\00\"\00o\00w\00n\00e\00r\00\"\00:\00\"\00\"\00,\00\"\00c\00o\00u\00n\00t\00e\00r\00\"\00:\001\00,\00\"\00t\00o\00k\00e\00n\00s\00\"\00:\00{\00\"\001\00\"\00:\00{\00\"\00i\00d\00\"\00:\001\00,\00\"\00n\00a\00m\00e\00\"\00:\00\"\00f\00o\00o\00\"\00,\00\"\00u\00r\00i\00\"\00:\00\"\00b\00a\00r\00\"\00}\00}\00,\00\"\00o\00w\00n\00e\00r\00s\00\"\00:\00{\00\"\001\00\"\00:\00\"\00b\00a\00z\00\"\00}\00,\00\"\00b\00a\00l\00a\00n\00c\00e\00s\00\"\00:\00{\00\"\00b\00a\00z\00\"\00:\00[\001\00]\00}\00}\00\00\00")
 (data $137 (i32.const 7372) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\06\00\00\00f\00o\00o\00\00\00\00\00\00\00")
 (data $138 (i32.const 7404) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\06\00\00\00b\00a\00r\00\00\00\00\00\00\00")
 (data $139 (i32.const 7436) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\06\00\00\00b\00a\00z\00\00\00\00\00\00\00")
 (data $140 (i32.const 7468) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $141 (i32.const 7500) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00$\00\00\00K\00e\00y\00 \00d\00o\00e\00s\00 \00n\00o\00t\00 \00e\00x\00i\00s\00t\00\00\00\00\00\00\00\00\00")
 (data $142 (i32.const 7564) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\16\00\00\00~\00l\00i\00b\00/\00m\00a\00p\00.\00t\00s\00\00\00\00\00\00\00")
 (data $143 (i32.const 7612) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\1a\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00.\00t\00s\00\00\00")
 (data $144 (i32.const 7660) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\04\00\00\00{\00}\00\00\00\00\00\00\00\00\00")
 (data $145 (i32.const 7696) "\14\00\00\00 \00\00\00 \00\00\00 \00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\10A\82\00\00\00\00\00\00\00\00\00$\01\00\00 \00\00\00A\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\10A\04\00\10A\04\00\02\02\00\00\10A\82\00\02\t\00\00")
 (table $0 1 1 funcref)
 (elem $0 (i32.const 1))
 (export "memory" (memory $0))
 (export "_start" (func $~start))
 (func $~lib/bindings/wasi_snapshot_preview1/iovec#set:buf (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $~lib/rt/common/OBJECT#get:rtSize (param $0 i32) (result i32)
  local.get $0
  i32.load offset=16
 )
 (func $~lib/string/String#get:length (param $0 i32) (result i32)
  local.get $0
  i32.const 20
  i32.sub
  call $~lib/rt/common/OBJECT#get:rtSize
  i32.const 1
  i32.shr_u
  return
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
  return
 )
 (func $~lib/string/String.UTF8.encodeUnsafe (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
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
  (local $17 i32)
  (local $18 i32)
  local.get $0
  local.get $1
  i32.const 1
  i32.shl
  i32.add
  local.set $5
  local.get $2
  local.set $6
  loop $while-continue|0
   local.get $0
   local.get $5
   i32.lt_u
   if
    local.get $0
    i32.load16_u
    local.set $7
    local.get $7
    i32.const 128
    i32.lt_u
    if
     local.get $6
     local.get $7
     i32.store8
     local.get $6
     i32.const 1
     i32.add
     local.set $6
     local.get $3
     local.get $7
     i32.eqz
     i32.and
     if
      local.get $6
      local.get $2
      i32.sub
      return
     end
    else
     local.get $7
     i32.const 2048
     i32.lt_u
     if
      local.get $7
      i32.const 6
      i32.shr_u
      i32.const 192
      i32.or
      local.set $8
      local.get $7
      i32.const 63
      i32.and
      i32.const 128
      i32.or
      local.set $9
      local.get $6
      local.get $9
      i32.const 8
      i32.shl
      local.get $8
      i32.or
      i32.store16
      local.get $6
      i32.const 2
      i32.add
      local.set $6
     else
      local.get $7
      i32.const 63488
      i32.and
      i32.const 55296
      i32.eq
      if
       local.get $7
       i32.const 56320
       i32.lt_u
       if (result i32)
        local.get $0
        i32.const 2
        i32.add
        local.get $5
        i32.lt_u
       else
        i32.const 0
       end
       if
        local.get $0
        i32.load16_u offset=2
        local.set $10
        local.get $10
        i32.const 64512
        i32.and
        i32.const 56320
        i32.eq
        if
         i32.const 65536
         local.get $7
         i32.const 1023
         i32.and
         i32.const 10
         i32.shl
         i32.add
         local.get $10
         i32.const 1023
         i32.and
         i32.or
         local.set $7
         local.get $7
         i32.const 18
         i32.shr_u
         i32.const 240
         i32.or
         local.set $11
         local.get $7
         i32.const 12
         i32.shr_u
         i32.const 63
         i32.and
         i32.const 128
         i32.or
         local.set $12
         local.get $7
         i32.const 6
         i32.shr_u
         i32.const 63
         i32.and
         i32.const 128
         i32.or
         local.set $13
         local.get $7
         i32.const 63
         i32.and
         i32.const 128
         i32.or
         local.set $14
         local.get $6
         local.get $14
         i32.const 24
         i32.shl
         local.get $13
         i32.const 16
         i32.shl
         i32.or
         local.get $12
         i32.const 8
         i32.shl
         i32.or
         local.get $11
         i32.or
         i32.store
         local.get $6
         i32.const 4
         i32.add
         local.set $6
         local.get $0
         i32.const 4
         i32.add
         local.set $0
         br $while-continue|0
        end
       end
       local.get $4
       i32.const 0
       i32.ne
       if
        local.get $4
        i32.const 2
        i32.eq
        if
         i32.const 32
         i32.const 96
         i32.const 742
         i32.const 49
         call $~lib/wasi_internal/wasi_abort
         unreachable
        end
        i32.const 65533
        local.set $7
       end
      end
      local.get $7
      i32.const 12
      i32.shr_u
      i32.const 224
      i32.or
      local.set $15
      local.get $7
      i32.const 6
      i32.shr_u
      i32.const 63
      i32.and
      i32.const 128
      i32.or
      local.set $16
      local.get $7
      i32.const 63
      i32.and
      i32.const 128
      i32.or
      local.set $17
      local.get $6
      local.get $16
      i32.const 8
      i32.shl
      local.get $15
      i32.or
      i32.store16
      local.get $6
      local.get $17
      i32.store8 offset=2
      local.get $6
      i32.const 3
      i32.add
      local.set $6
     end
    end
    local.get $0
    i32.const 2
    i32.add
    local.set $0
    br $while-continue|0
   end
  end
  local.get $3
  if
   local.get $6
   local.tee $18
   i32.const 1
   i32.add
   local.set $6
   local.get $18
   i32.const 0
   i32.store8
  end
  local.get $6
  local.get $2
  i32.sub
  return
 )
 (func $~lib/string/String.UTF8.encodeUnsafe@varargs (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  block $2of2
   block $1of2
    block $0of2
     block $outOfRange
      global.get $~argumentsLength
      i32.const 3
      i32.sub
      br_table $0of2 $1of2 $2of2 $outOfRange
     end
     unreachable
    end
    i32.const 0
    local.set $3
   end
   i32.const 0
   local.set $4
  end
  local.get $0
  local.get $1
  local.get $2
  local.get $3
  local.get $4
  call $~lib/string/String.UTF8.encodeUnsafe
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
 (func $~lib/bindings/wasi_snapshot_preview1/iovec#set:buf_len (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
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
  return
 )
 (func $~lib/rt/itcms/Object#get:nextWithColor (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $~lib/rt/itcms/Object#get:next (param $0 i32) (result i32)
  local.get $0
  call $~lib/rt/itcms/Object#get:nextWithColor
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  return
 )
 (func $~lib/rt/itcms/Object#get:color (param $0 i32) (result i32)
  local.get $0
  call $~lib/rt/itcms/Object#get:nextWithColor
  i32.const 3
  i32.and
  return
 )
 (func $~lib/rt/itcms/visitRoots (param $0 i32)
  (local $1 i32)
  (local $2 i32)
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
     i32.const 208
     i32.const 160
     i32.const 16
     call $~lib/wasi_internal/wasi_abort
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
  call $~lib/rt/itcms/Object#get:nextWithColor
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.get $1
  i32.or
  call $~lib/rt/itcms/Object#set:nextWithColor
 )
 (func $~lib/rt/itcms/Object#get:prev (param $0 i32) (result i32)
  local.get $0
  i32.load offset=8
 )
 (func $~lib/rt/itcms/Object#set:next (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  local.get $0
  call $~lib/rt/itcms/Object#get:nextWithColor
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
   call $~lib/rt/itcms/Object#get:prev
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
    i32.const 208
    i32.const 128
    i32.const 18
    call $~lib/wasi_internal/wasi_abort
    unreachable
   end
   return
  end
  local.get $0
  call $~lib/rt/itcms/Object#get:prev
  local.set $2
  i32.const 1
  drop
  local.get $2
  i32.eqz
  if
   i32.const 0
   i32.const 208
   i32.const 132
   i32.const 16
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  local.get $1
  local.get $2
  call $~lib/rt/itcms/Object#set:prev
  local.get $2
  local.get $1
  call $~lib/rt/itcms/Object#set:next
 )
 (func $~lib/rt/itcms/Object#get:rtId (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/shared/typeinfo/Typeinfo#get:flags (param $0 i32) (result i32)
  local.get $0
  i32.load
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
   i32.const 336
   i32.const 400
   i32.const 21
   i32.const 28
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.add
  local.get $0
  i32.const 4
  i32.mul
  i32.add
  call $~lib/shared/typeinfo/Typeinfo#get:flags
  return
 )
 (func $~lib/rt/itcms/Object#get:isPointerfree (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/rt/itcms/Object#get:rtId
  local.set $1
  local.get $1
  i32.const 2
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
  return
 )
 (func $~lib/rt/itcms/Object#linkTo (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/itcms/Object#get:prev
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
   call $~lib/rt/itcms/Object#get:prev
   local.tee $1
   i32.eqz
   if (result i32)
    i32.const 0
    i32.const 208
    i32.const 148
    i32.const 30
    call $~lib/wasi_internal/wasi_abort
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
  global.get $~lib/memory/__stack_pointer
  local.set $1
  loop $while-continue|0
   local.get $1
   global.get $~lib/memory/__heap_base
   i32.lt_u
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
 (func $~lib/rt/common/BLOCK#get:mmInfo (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $~lib/rt/itcms/Object#get:size (param $0 i32) (result i32)
  i32.const 4
  local.get $0
  call $~lib/rt/common/BLOCK#get:mmInfo
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  i32.add
  return
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
 (func $~lib/rt/tlsf/Block#get:prev (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $~lib/rt/tlsf/Block#get:next (param $0 i32) (result i32)
  local.get $0
  i32.load offset=8
 )
 (func $~lib/rt/tlsf/Root#get:flMap (param $0 i32) (result i32)
  local.get $0
  i32.load
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
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  (local $17 i32)
  (local $18 i32)
  (local $19 i32)
  (local $20 i32)
  (local $21 i32)
  (local $22 i32)
  (local $23 i32)
  local.get $1
  call $~lib/rt/common/BLOCK#get:mmInfo
  local.set $2
  i32.const 1
  drop
  local.get $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 268
   i32.const 14
   call $~lib/wasi_internal/wasi_abort
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
   i32.const 480
   i32.const 270
   i32.const 14
   call $~lib/wasi_internal/wasi_abort
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
   local.set $8
   i32.const 31
   local.get $8
   i32.clz
   i32.sub
   local.set $4
   local.get $8
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
   i32.const 480
   i32.const 284
   i32.const 14
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  local.get $1
  call $~lib/rt/tlsf/Block#get:prev
  local.set $9
  local.get $1
  call $~lib/rt/tlsf/Block#get:next
  local.set $10
  local.get $9
  if
   local.get $9
   local.get $10
   call $~lib/rt/tlsf/Block#set:next
  end
  local.get $10
  if
   local.get $10
   local.get $9
   call $~lib/rt/tlsf/Block#set:prev
  end
  local.get $1
  block $~lib/rt/tlsf/GETHEAD|inlined.0 (result i32)
   local.get $0
   local.set $11
   local.get $4
   local.set $12
   local.get $5
   local.set $13
   local.get $11
   local.get $12
   i32.const 4
   i32.shl
   local.get $13
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=96
   br $~lib/rt/tlsf/GETHEAD|inlined.0
  end
  i32.eq
  if
   local.get $0
   local.set $14
   local.get $4
   local.set $15
   local.get $5
   local.set $16
   local.get $10
   local.set $17
   local.get $14
   local.get $15
   i32.const 4
   i32.shl
   local.get $16
   i32.add
   i32.const 2
   i32.shl
   i32.add
   local.get $17
   i32.store offset=96
   local.get $10
   i32.eqz
   if
    block $~lib/rt/tlsf/GETSL|inlined.0 (result i32)
     local.get $0
     local.set $18
     local.get $4
     local.set $19
     local.get $18
     local.get $19
     i32.const 2
     i32.shl
     i32.add
     i32.load offset=4
     br $~lib/rt/tlsf/GETSL|inlined.0
    end
    local.set $20
    local.get $0
    local.set $21
    local.get $4
    local.set $22
    local.get $20
    i32.const 1
    local.get $5
    i32.shl
    i32.const -1
    i32.xor
    i32.and
    local.tee $20
    local.set $23
    local.get $21
    local.get $22
    i32.const 2
    i32.shl
    i32.add
    local.get $23
    i32.store offset=4
    local.get $20
    i32.eqz
    if
     local.get $0
     local.get $0
     call $~lib/rt/tlsf/Root#get:flMap
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
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  (local $17 i32)
  (local $18 i32)
  (local $19 i32)
  (local $20 i32)
  (local $21 i32)
  (local $22 i32)
  (local $23 i32)
  (local $24 i32)
  (local $25 i32)
  (local $26 i32)
  (local $27 i32)
  (local $28 i32)
  i32.const 1
  drop
  local.get $1
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 201
   i32.const 14
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  local.get $1
  call $~lib/rt/common/BLOCK#get:mmInfo
  local.set $2
  i32.const 1
  drop
  local.get $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 203
   i32.const 14
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  block $~lib/rt/tlsf/GETRIGHT|inlined.0 (result i32)
   local.get $1
   local.set $3
   local.get $3
   i32.const 4
   i32.add
   local.get $3
   call $~lib/rt/common/BLOCK#get:mmInfo
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   br $~lib/rt/tlsf/GETRIGHT|inlined.0
  end
  local.set $4
  local.get $4
  call $~lib/rt/common/BLOCK#get:mmInfo
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
   block $~lib/rt/tlsf/GETRIGHT|inlined.1 (result i32)
    local.get $1
    local.set $6
    local.get $6
    i32.const 4
    i32.add
    local.get $6
    call $~lib/rt/common/BLOCK#get:mmInfo
    i32.const 3
    i32.const -1
    i32.xor
    i32.and
    i32.add
    br $~lib/rt/tlsf/GETRIGHT|inlined.1
   end
   local.set $4
   local.get $4
   call $~lib/rt/common/BLOCK#get:mmInfo
   local.set $5
  end
  local.get $2
  i32.const 2
  i32.and
  if
   block $~lib/rt/tlsf/GETFREELEFT|inlined.0 (result i32)
    local.get $1
    local.set $7
    local.get $7
    i32.const 4
    i32.sub
    i32.load
    br $~lib/rt/tlsf/GETFREELEFT|inlined.0
   end
   local.set $8
   local.get $8
   call $~lib/rt/common/BLOCK#get:mmInfo
   local.set $9
   i32.const 1
   drop
   local.get $9
   i32.const 1
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 480
    i32.const 221
    i32.const 16
    call $~lib/wasi_internal/wasi_abort
    unreachable
   end
   local.get $0
   local.get $8
   call $~lib/rt/tlsf/removeBlock
   local.get $8
   local.set $1
   local.get $1
   local.get $9
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
  local.set $10
  i32.const 1
  drop
  local.get $10
  i32.const 12
  i32.ge_u
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 233
   i32.const 14
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  i32.const 1
  drop
  local.get $1
  i32.const 4
  i32.add
  local.get $10
  i32.add
  local.get $4
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 234
   i32.const 14
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  local.get $4
  i32.const 4
  i32.sub
  local.get $1
  i32.store
  local.get $10
  i32.const 256
  i32.lt_u
  if
   i32.const 0
   local.set $11
   local.get $10
   i32.const 4
   i32.shr_u
   local.set $12
  else
   local.get $10
   local.tee $13
   i32.const 1073741820
   local.tee $14
   local.get $13
   local.get $14
   i32.lt_u
   select
   local.set $15
   i32.const 31
   local.get $15
   i32.clz
   i32.sub
   local.set $11
   local.get $15
   local.get $11
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 1
   i32.const 4
   i32.shl
   i32.xor
   local.set $12
   local.get $11
   i32.const 8
   i32.const 1
   i32.sub
   i32.sub
   local.set $11
  end
  i32.const 1
  drop
  local.get $11
  i32.const 23
  i32.lt_u
  if (result i32)
   local.get $12
   i32.const 16
   i32.lt_u
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 251
   i32.const 14
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  block $~lib/rt/tlsf/GETHEAD|inlined.1 (result i32)
   local.get $0
   local.set $16
   local.get $11
   local.set $17
   local.get $12
   local.set $18
   local.get $16
   local.get $17
   i32.const 4
   i32.shl
   local.get $18
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=96
   br $~lib/rt/tlsf/GETHEAD|inlined.1
  end
  local.set $19
  local.get $1
  i32.const 0
  call $~lib/rt/tlsf/Block#set:prev
  local.get $1
  local.get $19
  call $~lib/rt/tlsf/Block#set:next
  local.get $19
  if
   local.get $19
   local.get $1
   call $~lib/rt/tlsf/Block#set:prev
  end
  local.get $0
  local.set $20
  local.get $11
  local.set $21
  local.get $12
  local.set $22
  local.get $1
  local.set $23
  local.get $20
  local.get $21
  i32.const 4
  i32.shl
  local.get $22
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.get $23
  i32.store offset=96
  local.get $0
  local.get $0
  call $~lib/rt/tlsf/Root#get:flMap
  i32.const 1
  local.get $11
  i32.shl
  i32.or
  call $~lib/rt/tlsf/Root#set:flMap
  local.get $0
  local.set $26
  local.get $11
  local.set $27
  block $~lib/rt/tlsf/GETSL|inlined.1 (result i32)
   local.get $0
   local.set $24
   local.get $11
   local.set $25
   local.get $24
   local.get $25
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=4
   br $~lib/rt/tlsf/GETSL|inlined.1
  end
  i32.const 1
  local.get $12
  i32.shl
  i32.or
  local.set $28
  local.get $26
  local.get $27
  i32.const 2
  i32.shl
  i32.add
  local.get $28
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i64) (result i32)
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
  i32.wrap_i64
  local.set $3
  i32.const 1
  drop
  local.get $1
  i64.extend_i32_u
  local.get $2
  i64.le_u
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 382
   i32.const 14
   call $~lib/wasi_internal/wasi_abort
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
  local.get $3
  i32.const 15
  i32.const -1
  i32.xor
  i32.and
  local.set $3
  block $~lib/rt/tlsf/GETTAIL|inlined.0 (result i32)
   local.get $0
   local.set $4
   local.get $4
   i32.load offset=1568
   br $~lib/rt/tlsf/GETTAIL|inlined.0
  end
  local.set $5
  i32.const 0
  local.set $6
  local.get $5
  if
   i32.const 1
   drop
   local.get $1
   local.get $5
   i32.const 4
   i32.add
   i32.ge_u
   i32.eqz
   if
    i32.const 0
    i32.const 480
    i32.const 389
    i32.const 16
    call $~lib/wasi_internal/wasi_abort
    unreachable
   end
   local.get $1
   i32.const 16
   i32.sub
   local.get $5
   i32.eq
   if
    local.get $1
    i32.const 16
    i32.sub
    local.set $1
    local.get $5
    call $~lib/rt/common/BLOCK#get:mmInfo
    local.set $6
   else
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
    i32.const 480
    i32.const 402
    i32.const 5
    call $~lib/wasi_internal/wasi_abort
    unreachable
   end
  end
  local.get $3
  local.get $1
  i32.sub
  local.set $7
  local.get $7
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
  local.get $7
  i32.const 2
  i32.const 4
  i32.mul
  i32.sub
  local.set $8
  local.get $1
  local.set $9
  local.get $9
  local.get $8
  i32.const 1
  i32.or
  local.get $6
  i32.const 2
  i32.and
  i32.or
  call $~lib/rt/common/BLOCK#set:mmInfo
  local.get $9
  i32.const 0
  call $~lib/rt/tlsf/Block#set:prev
  local.get $9
  i32.const 0
  call $~lib/rt/tlsf/Block#set:next
  local.get $1
  i32.const 4
  i32.add
  local.get $8
  i32.add
  local.set $5
  local.get $5
  i32.const 0
  i32.const 2
  i32.or
  call $~lib/rt/common/BLOCK#set:mmInfo
  local.get $0
  local.set $10
  local.get $5
  local.set $11
  local.get $10
  local.get $11
  i32.store offset=1568
  local.get $0
  local.get $9
  call $~lib/rt/tlsf/insertBlock
  i32.const 1
  return
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
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
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
  local.set $4
  i32.const 0
  local.set $5
  local.get $4
  local.get $5
  i32.store offset=1568
  i32.const 0
  local.set $6
  loop $for-loop|0
   local.get $6
   i32.const 23
   i32.lt_u
   if
    local.get $3
    local.set $7
    local.get $6
    local.set $8
    i32.const 0
    local.set $9
    local.get $7
    local.get $8
    i32.const 2
    i32.shl
    i32.add
    local.get $9
    i32.store offset=4
    i32.const 0
    local.set $10
    loop $for-loop|1
     local.get $10
     i32.const 16
     i32.lt_u
     if
      local.get $3
      local.set $11
      local.get $6
      local.set $12
      local.get $10
      local.set $13
      i32.const 0
      local.set $14
      local.get $11
      local.get $12
      i32.const 4
      i32.shl
      local.get $13
      i32.add
      i32.const 2
      i32.shl
      i32.add
      local.get $14
      i32.store offset=96
      local.get $10
      i32.const 1
      i32.add
      local.set $10
      br $for-loop|1
     end
    end
    local.get $6
    i32.const 1
    i32.add
    local.set $6
    br $for-loop|0
   end
  end
  local.get $0
  i32.const 1572
  i32.add
  local.set $15
  i32.const 0
  drop
  local.get $3
  local.get $15
  memory.size
  i64.extend_i32_s
  i64.const 16
  i64.shl
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
   call $~lib/rt/common/BLOCK#get:mmInfo
   i32.const 1
   i32.and
   i32.eqz
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 562
   i32.const 3
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  local.get $1
  return
 )
 (func $~lib/rt/tlsf/freeBlock (param $0 i32) (param $1 i32)
  i32.const 0
  drop
  local.get $1
  local.get $1
  call $~lib/rt/common/BLOCK#get:mmInfo
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
  (local $3 i32)
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
    local.set $2
    global.get $~lib/rt/itcms/iter
    call $~lib/rt/itcms/Object#get:next
    local.set $0
    loop $while-continue|1
     local.get $0
     global.get $~lib/rt/itcms/toSpace
     i32.ne
     if
      local.get $0
      global.set $~lib/rt/itcms/iter
      local.get $0
      call $~lib/rt/itcms/Object#get:color
      local.get $2
      i32.ne
      if
       local.get $0
       local.get $2
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
      if
       local.get $0
       call $~lib/rt/itcms/Object#get:color
       local.get $2
       i32.ne
       if
        local.get $0
        local.get $2
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
     local.set $3
     global.get $~lib/rt/itcms/toSpace
     global.set $~lib/rt/itcms/fromSpace
     local.get $3
     global.set $~lib/rt/itcms/toSpace
     local.get $2
     global.set $~lib/rt/itcms/white
     local.get $3
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
     i32.const 208
     i32.const 229
     i32.const 20
     call $~lib/wasi_internal/wasi_abort
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
  return
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
  return
 )
 (func $~lib/rt/tlsf/prepareSize (param $0 i32) (result i32)
  local.get $0
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 144
   i32.const 480
   i32.const 461
   i32.const 29
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  local.get $0
  call $~lib/rt/tlsf/computeSize
  return
 )
 (func $~lib/rt/tlsf/roundSize (param $0 i32) (result i32)
  local.get $0
  i32.const 536870910
  i32.lt_u
  if (result i32)
   local.get $0
   i32.const 1
   i32.const 27
   local.get $0
   i32.clz
   i32.sub
   i32.shl
   i32.add
   i32.const 1
   i32.sub
  else
   local.get $0
  end
  return
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
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  (local $17 i32)
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
   call $~lib/rt/tlsf/roundSize
   local.set $4
   i32.const 4
   i32.const 8
   i32.mul
   i32.const 1
   i32.sub
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
   i32.const 480
   i32.const 334
   i32.const 14
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  block $~lib/rt/tlsf/GETSL|inlined.2 (result i32)
   local.get $0
   local.set $5
   local.get $2
   local.set $6
   local.get $5
   local.get $6
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=4
   br $~lib/rt/tlsf/GETSL|inlined.2
  end
  i32.const 0
  i32.const -1
  i32.xor
  local.get $3
  i32.shl
  i32.and
  local.set $7
  i32.const 0
  local.set $8
  local.get $7
  i32.eqz
  if
   local.get $0
   call $~lib/rt/tlsf/Root#get:flMap
   i32.const 0
   i32.const -1
   i32.xor
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.set $9
   local.get $9
   i32.eqz
   if
    i32.const 0
    local.set $8
   else
    local.get $9
    i32.ctz
    local.set $2
    block $~lib/rt/tlsf/GETSL|inlined.3 (result i32)
     local.get $0
     local.set $10
     local.get $2
     local.set $11
     local.get $10
     local.get $11
     i32.const 2
     i32.shl
     i32.add
     i32.load offset=4
     br $~lib/rt/tlsf/GETSL|inlined.3
    end
    local.set $7
    i32.const 1
    drop
    local.get $7
    i32.eqz
    if
     i32.const 0
     i32.const 480
     i32.const 347
     i32.const 18
     call $~lib/wasi_internal/wasi_abort
     unreachable
    end
    block $~lib/rt/tlsf/GETHEAD|inlined.2 (result i32)
     local.get $0
     local.set $12
     local.get $2
     local.set $13
     local.get $7
     i32.ctz
     local.set $14
     local.get $12
     local.get $13
     i32.const 4
     i32.shl
     local.get $14
     i32.add
     i32.const 2
     i32.shl
     i32.add
     i32.load offset=96
     br $~lib/rt/tlsf/GETHEAD|inlined.2
    end
    local.set $8
   end
  else
   block $~lib/rt/tlsf/GETHEAD|inlined.3 (result i32)
    local.get $0
    local.set $15
    local.get $2
    local.set $16
    local.get $7
    i32.ctz
    local.set $17
    local.get $15
    local.get $16
    i32.const 4
    i32.shl
    local.get $17
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
    br $~lib/rt/tlsf/GETHEAD|inlined.3
   end
   local.set $8
  end
  local.get $8
  return
 )
 (func $~lib/rt/tlsf/growMemory (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  i32.const 0
  drop
  local.get $1
  i32.const 256
  i32.ge_u
  if
   local.get $1
   call $~lib/rt/tlsf/roundSize
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
  block $~lib/rt/tlsf/GETTAIL|inlined.1 (result i32)
   local.get $0
   local.set $3
   local.get $3
   i32.load offset=1568
   br $~lib/rt/tlsf/GETTAIL|inlined.1
  end
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
  local.tee $5
  local.get $4
  local.tee $6
  local.get $5
  local.get $6
  i32.gt_s
  select
  local.set $7
  local.get $7
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
  local.set $8
  local.get $0
  local.get $2
  i32.const 16
  i32.shl
  local.get $8
  i64.extend_i32_s
  i64.const 16
  i64.shl
  call $~lib/rt/tlsf/addMemory
  drop
 )
 (func $~lib/rt/tlsf/prepareBlock (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $1
  call $~lib/rt/common/BLOCK#get:mmInfo
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
   i32.const 480
   i32.const 361
   i32.const 14
   call $~lib/wasi_internal/wasi_abort
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
   block $~lib/rt/tlsf/GETRIGHT|inlined.3 (result i32)
    local.get $1
    local.set $7
    local.get $7
    i32.const 4
    i32.add
    local.get $7
    call $~lib/rt/common/BLOCK#get:mmInfo
    i32.const 3
    i32.const -1
    i32.xor
    i32.and
    i32.add
    br $~lib/rt/tlsf/GETRIGHT|inlined.3
   end
   block $~lib/rt/tlsf/GETRIGHT|inlined.2 (result i32)
    local.get $1
    local.set $6
    local.get $6
    i32.const 4
    i32.add
    local.get $6
    call $~lib/rt/common/BLOCK#get:mmInfo
    i32.const 3
    i32.const -1
    i32.xor
    i32.and
    i32.add
    br $~lib/rt/tlsf/GETRIGHT|inlined.2
   end
   call $~lib/rt/common/BLOCK#get:mmInfo
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
    i32.const 480
    i32.const 499
    i32.const 16
    call $~lib/wasi_internal/wasi_abort
    unreachable
   end
  end
  i32.const 1
  drop
  local.get $3
  call $~lib/rt/common/BLOCK#get:mmInfo
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.get $2
  i32.ge_u
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 501
   i32.const 14
   call $~lib/wasi_internal/wasi_abort
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
  return
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
  return
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
   i32.const 144
   i32.const 208
   i32.const 261
   i32.const 31
   call $~lib/wasi_internal/wasi_abort
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
  return
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
   i32.const 208
   i32.const 295
   i32.const 14
   call $~lib/wasi_internal/wasi_abort
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
 (func $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:buckets" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:bucketsMask" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:entries" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:entriesCapacity" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:entriesOffset" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:entriesCount" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=20
 )
 (func $~lib/as-test/assembly/coverage/Coverage#set:hashes (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/as-test/assembly/coverage/Coverage#set:points (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $start:~lib/as-test/assembly/coverage
  memory.size
  i32.const 16
  i32.shl
  global.get $~lib/memory/__heap_base
  i32.sub
  i32.const 1
  i32.shr_u
  global.set $~lib/rt/itcms/threshold
  i32.const 256
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/pinSpace
  i32.const 288
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/toSpace
  i32.const 432
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/fromSpace
  i32.const 0
  call $~lib/as-test/assembly/coverage/Coverage#constructor
  global.set $~lib/as-test/assembly/coverage/Coverage.SN
 )
 (func $~lib/as-test/assembly/coverage/CoverPoint#set:file (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/as-test/assembly/coverage/CoverPoint#set:hash (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/as-test/assembly/coverage/CoverPoint#set:line (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/as-test/assembly/coverage/CoverPoint#set:column (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/as-test/assembly/coverage/CoverPoint#set:type (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/as-test/assembly/coverage/CoverPoint#set:executed (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store8 offset=20
 )
 (func $~lib/as-test/assembly/coverage/Coverage#get:points (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $~lib/as-test/assembly/coverage/Coverage#get:hashes (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $~lib/as-test/assembly/coverage/CoverPoint#get:hash (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:buckets" (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:bucketsMask" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:taggedNext" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=8
 )
 (func $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:key" (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:value" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:entriesOffset" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=16
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:entriesCapacity" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:entriesCount" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=20
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:entries" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=8
 )
 (func $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:key" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:value" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:taggedNext" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/staticarray/StaticArray<u32>#get:length (param $0 i32) (result i32)
  local.get $0
  i32.const 20
  i32.sub
  call $~lib/rt/common/OBJECT#get:rtSize
  i32.const 2
  i32.shr_u
  return
 )
 (func $~lib/staticarray/StaticArray<u32>#__uget (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
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
  return
 )
 (func $~lib/@hypercubed/as-mpz/assembly/index/MpZ#set:_data (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/@hypercubed/as-mpz/assembly/index/MpZ#set:_sgn_size (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $start:~lib/@hypercubed/as-mpz/index
  call $start:~lib/@hypercubed/as-mpz/assembly/index
 )
 (func $start:~lib/json-as/assembly/index
  call $start:~lib/@hypercubed/as-mpz/index
 )
 (func $~lib/string/String.UTF8.byteLength (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  local.set $2
  local.get $2
  local.get $0
  i32.const 20
  i32.sub
  call $~lib/rt/common/OBJECT#get:rtSize
  i32.add
  local.set $3
  local.get $1
  i32.const 0
  i32.ne
  local.set $4
  block $while-break|0
   loop $while-continue|0
    local.get $2
    local.get $3
    i32.lt_u
    if
     local.get $2
     i32.load16_u
     local.set $5
     local.get $5
     i32.const 128
     i32.lt_u
     if
      local.get $1
      local.get $5
      i32.eqz
      i32.and
      if
       br $while-break|0
      end
      local.get $4
      i32.const 1
      i32.add
      local.set $4
     else
      local.get $5
      i32.const 2048
      i32.lt_u
      if
       local.get $4
       i32.const 2
       i32.add
       local.set $4
      else
       local.get $5
       i32.const 64512
       i32.and
       i32.const 55296
       i32.eq
       if (result i32)
        local.get $2
        i32.const 2
        i32.add
        local.get $3
        i32.lt_u
       else
        i32.const 0
       end
       if
        local.get $2
        i32.load16_u offset=2
        i32.const 64512
        i32.and
        i32.const 56320
        i32.eq
        if
         local.get $4
         i32.const 4
         i32.add
         local.set $4
         local.get $2
         i32.const 4
         i32.add
         local.set $2
         br $while-continue|0
        end
       end
       local.get $4
       i32.const 3
       i32.add
       local.set $4
      end
     end
     local.get $2
     i32.const 2
     i32.add
     local.set $2
     br $while-continue|0
    end
   end
  end
  local.get $4
  return
 )
 (func $~lib/arraybuffer/ArrayBuffer#get:byteLength (param $0 i32) (result i32)
  local.get $0
  i32.const 20
  i32.sub
  call $~lib/rt/common/OBJECT#get:rtSize
  return
 )
 (func $~lib/arraybuffer/ArrayBufferView#get:byteLength (param $0 i32) (result i32)
  local.get $0
  i32.load offset=8
 )
 (func $~lib/dataview/DataView#set:buffer (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/dataview/DataView#set:dataStart (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/dataview/DataView#set:byteLength (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/dataview/DataView#get:byteLength (param $0 i32) (result i32)
  local.get $0
  i32.load offset=8
 )
 (func $~lib/dataview/DataView#get:dataStart (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $~lib/polyfills/bswap<u32> (param $0 i32) (result i32)
  i32.const 1
  drop
  i32.const 4
  i32.const 1
  i32.eq
  drop
  i32.const 4
  i32.const 2
  i32.eq
  drop
  i32.const 4
  i32.const 4
  i32.eq
  drop
  local.get $0
  i32.const -16711936
  i32.and
  i32.const 8
  i32.rotl
  local.get $0
  i32.const 16711935
  i32.and
  i32.const 8
  i32.rotr
  i32.or
  return
 )
 (func $~lib/arraybuffer/ArrayBufferView#get:dataStart (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $~lib/util/number/utoa32_dec_lut (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i64)
  (local $8 i64)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  loop $while-continue|0
   local.get $1
   i32.const 10000
   i32.ge_u
   if
    local.get $1
    i32.const 10000
    i32.div_u
    local.set $3
    local.get $1
    i32.const 10000
    i32.rem_u
    local.set $4
    local.get $3
    local.set $1
    local.get $4
    i32.const 100
    i32.div_u
    local.set $5
    local.get $4
    i32.const 100
    i32.rem_u
    local.set $6
    i32.const 2460
    local.get $5
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $7
    i32.const 2460
    local.get $6
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $8
    local.get $2
    i32.const 4
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    local.get $7
    local.get $8
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
   local.set $9
   local.get $1
   i32.const 100
   i32.rem_u
   local.set $10
   local.get $9
   local.set $1
   local.get $2
   i32.const 2
   i32.sub
   local.set $2
   i32.const 2460
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
   i32.const 2460
   local.get $1
   i32.const 2
   i32.shl
   i32.add
   i32.load
   local.set $12
   local.get $0
   local.get $2
   i32.const 1
   i32.shl
   i32.add
   local.get $12
   i32.store
  else
   local.get $2
   i32.const 1
   i32.sub
   local.set $2
   i32.const 48
   local.get $1
   i32.add
   local.set $13
   local.get $0
   local.get $2
   i32.const 1
   i32.shl
   i32.add
   local.get $13
   i32.store16
  end
 )
 (func $~lib/util/number/utoa_hex_lut (param $0 i32) (param $1 i64) (param $2 i32)
  loop $while-continue|0
   local.get $2
   i32.const 2
   i32.ge_u
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
    i32.const 2880
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
   i32.const 2880
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
  block $~lib/util/number/isPowerOf2<i32>|inlined.0 (result i32)
   local.get $1
   local.set $2
   local.get $2
   i32.popcnt
   i32.const 1
   i32.eq
   br $~lib/util/number/isPowerOf2<i32>|inlined.0
  end
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
  return
 )
 (func $~lib/util/number/utoa64_any_core (param $0 i32) (param $1 i64) (param $2 i32) (param $3 i32)
  (local $4 i64)
  (local $5 i64)
  (local $6 i64)
  (local $7 i64)
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
    i32.const 3936
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
    local.set $7
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    i32.const 3936
    local.get $1
    local.get $7
    local.get $4
    i64.mul
    i64.sub
    i32.wrap_i64
    i32.const 1
    i32.shl
    i32.add
    i32.load16_u
    i32.store16
    local.get $7
    local.set $1
    local.get $1
    i64.const 0
    i64.ne
    br_if $do-loop|1
   end
  end
 )
 (func $~lib/util/number/itoa_buffered<u8> (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  i32.const 0
  local.set $2
  i32.const 0
  drop
  local.get $0
  local.get $2
  i32.const 1
  i32.shl
  i32.add
  local.set $3
  i32.const 0
  i32.const 1
  i32.le_s
  drop
  i32.const 0
  drop
  local.get $1
  i32.const 255
  i32.and
  i32.const 10
  i32.lt_u
  if
   local.get $0
   local.get $1
   i32.const 255
   i32.and
   i32.const 48
   i32.or
   i32.store16
   i32.const 1
   return
  end
  i32.const 0
  local.set $4
  i32.const 1
  i32.const 4
  i32.le_u
  drop
  local.get $1
  i32.const 255
  i32.and
  local.set $5
  local.get $5
  call $~lib/util/number/decimalCount32
  local.set $4
  local.get $3
  local.set $6
  local.get $5
  local.set $7
  local.get $4
  local.set $8
  i32.const 0
  i32.const 1
  i32.ge_s
  drop
  local.get $6
  local.get $7
  local.get $8
  call $~lib/util/number/utoa32_dec_lut
  local.get $2
  local.get $4
  i32.add
  return
 )
 (func $~lib/bindings/wasi_snapshot_preview1/errnoToString (param $0 i32) (result i32)
  (local $1 i32)
  block $break|0
   block $case76|0
    block $case75|0
     block $case74|0
      block $case73|0
       block $case72|0
        block $case71|0
         block $case70|0
          block $case69|0
           block $case68|0
            block $case67|0
             block $case66|0
              block $case65|0
               block $case64|0
                block $case63|0
                 block $case62|0
                  block $case61|0
                   block $case60|0
                    block $case59|0
                     block $case58|0
                      block $case57|0
                       block $case56|0
                        block $case55|0
                         block $case54|0
                          block $case53|0
                           block $case52|0
                            block $case51|0
                             block $case50|0
                              block $case49|0
                               block $case48|0
                                block $case47|0
                                 block $case46|0
                                  block $case45|0
                                   block $case44|0
                                    block $case43|0
                                     block $case42|0
                                      block $case41|0
                                       block $case40|0
                                        block $case39|0
                                         block $case38|0
                                          block $case37|0
                                           block $case36|0
                                            block $case35|0
                                             block $case34|0
                                              block $case33|0
                                               block $case32|0
                                                block $case31|0
                                                 block $case30|0
                                                  block $case29|0
                                                   block $case28|0
                                                    block $case27|0
                                                     block $case26|0
                                                      block $case25|0
                                                       block $case24|0
                                                        block $case23|0
                                                         block $case22|0
                                                          block $case21|0
                                                           block $case20|0
                                                            block $case19|0
                                                             block $case18|0
                                                              block $case17|0
                                                               block $case16|0
                                                                block $case15|0
                                                                 block $case14|0
                                                                  block $case13|0
                                                                   block $case12|0
                                                                    block $case11|0
                                                                     block $case10|0
                                                                      block $case9|0
                                                                       block $case8|0
                                                                        block $case7|0
                                                                         block $case6|0
                                                                          block $case5|0
                                                                           block $case4|0
                                                                            block $case3|0
                                                                             block $case2|0
                                                                              block $case1|0
                                                                               block $case0|0
                                                                                local.get $0
                                                                                i32.const 65535
                                                                                i32.and
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
                                                                                local.get $1
                                                                                i32.const 3
                                                                                i32.eq
                                                                                br_if $case3|0
                                                                                local.get $1
                                                                                i32.const 4
                                                                                i32.eq
                                                                                br_if $case4|0
                                                                                local.get $1
                                                                                i32.const 5
                                                                                i32.eq
                                                                                br_if $case5|0
                                                                                local.get $1
                                                                                i32.const 6
                                                                                i32.eq
                                                                                br_if $case6|0
                                                                                local.get $1
                                                                                i32.const 7
                                                                                i32.eq
                                                                                br_if $case7|0
                                                                                local.get $1
                                                                                i32.const 8
                                                                                i32.eq
                                                                                br_if $case8|0
                                                                                local.get $1
                                                                                i32.const 9
                                                                                i32.eq
                                                                                br_if $case9|0
                                                                                local.get $1
                                                                                i32.const 10
                                                                                i32.eq
                                                                                br_if $case10|0
                                                                                local.get $1
                                                                                i32.const 11
                                                                                i32.eq
                                                                                br_if $case11|0
                                                                                local.get $1
                                                                                i32.const 12
                                                                                i32.eq
                                                                                br_if $case12|0
                                                                                local.get $1
                                                                                i32.const 13
                                                                                i32.eq
                                                                                br_if $case13|0
                                                                                local.get $1
                                                                                i32.const 14
                                                                                i32.eq
                                                                                br_if $case14|0
                                                                                local.get $1
                                                                                i32.const 15
                                                                                i32.eq
                                                                                br_if $case15|0
                                                                                local.get $1
                                                                                i32.const 16
                                                                                i32.eq
                                                                                br_if $case16|0
                                                                                local.get $1
                                                                                i32.const 17
                                                                                i32.eq
                                                                                br_if $case17|0
                                                                                local.get $1
                                                                                i32.const 18
                                                                                i32.eq
                                                                                br_if $case18|0
                                                                                local.get $1
                                                                                i32.const 19
                                                                                i32.eq
                                                                                br_if $case19|0
                                                                                local.get $1
                                                                                i32.const 20
                                                                                i32.eq
                                                                                br_if $case20|0
                                                                                local.get $1
                                                                                i32.const 21
                                                                                i32.eq
                                                                                br_if $case21|0
                                                                                local.get $1
                                                                                i32.const 22
                                                                                i32.eq
                                                                                br_if $case22|0
                                                                                local.get $1
                                                                                i32.const 23
                                                                                i32.eq
                                                                                br_if $case23|0
                                                                                local.get $1
                                                                                i32.const 24
                                                                                i32.eq
                                                                                br_if $case24|0
                                                                                local.get $1
                                                                                i32.const 25
                                                                                i32.eq
                                                                                br_if $case25|0
                                                                                local.get $1
                                                                                i32.const 26
                                                                                i32.eq
                                                                                br_if $case26|0
                                                                                local.get $1
                                                                                i32.const 27
                                                                                i32.eq
                                                                                br_if $case27|0
                                                                                local.get $1
                                                                                i32.const 28
                                                                                i32.eq
                                                                                br_if $case28|0
                                                                                local.get $1
                                                                                i32.const 29
                                                                                i32.eq
                                                                                br_if $case29|0
                                                                                local.get $1
                                                                                i32.const 30
                                                                                i32.eq
                                                                                br_if $case30|0
                                                                                local.get $1
                                                                                i32.const 31
                                                                                i32.eq
                                                                                br_if $case31|0
                                                                                local.get $1
                                                                                i32.const 32
                                                                                i32.eq
                                                                                br_if $case32|0
                                                                                local.get $1
                                                                                i32.const 33
                                                                                i32.eq
                                                                                br_if $case33|0
                                                                                local.get $1
                                                                                i32.const 34
                                                                                i32.eq
                                                                                br_if $case34|0
                                                                                local.get $1
                                                                                i32.const 35
                                                                                i32.eq
                                                                                br_if $case35|0
                                                                                local.get $1
                                                                                i32.const 36
                                                                                i32.eq
                                                                                br_if $case36|0
                                                                                local.get $1
                                                                                i32.const 37
                                                                                i32.eq
                                                                                br_if $case37|0
                                                                                local.get $1
                                                                                i32.const 38
                                                                                i32.eq
                                                                                br_if $case38|0
                                                                                local.get $1
                                                                                i32.const 39
                                                                                i32.eq
                                                                                br_if $case39|0
                                                                                local.get $1
                                                                                i32.const 40
                                                                                i32.eq
                                                                                br_if $case40|0
                                                                                local.get $1
                                                                                i32.const 41
                                                                                i32.eq
                                                                                br_if $case41|0
                                                                                local.get $1
                                                                                i32.const 42
                                                                                i32.eq
                                                                                br_if $case42|0
                                                                                local.get $1
                                                                                i32.const 43
                                                                                i32.eq
                                                                                br_if $case43|0
                                                                                local.get $1
                                                                                i32.const 44
                                                                                i32.eq
                                                                                br_if $case44|0
                                                                                local.get $1
                                                                                i32.const 45
                                                                                i32.eq
                                                                                br_if $case45|0
                                                                                local.get $1
                                                                                i32.const 46
                                                                                i32.eq
                                                                                br_if $case46|0
                                                                                local.get $1
                                                                                i32.const 47
                                                                                i32.eq
                                                                                br_if $case47|0
                                                                                local.get $1
                                                                                i32.const 48
                                                                                i32.eq
                                                                                br_if $case48|0
                                                                                local.get $1
                                                                                i32.const 49
                                                                                i32.eq
                                                                                br_if $case49|0
                                                                                local.get $1
                                                                                i32.const 50
                                                                                i32.eq
                                                                                br_if $case50|0
                                                                                local.get $1
                                                                                i32.const 51
                                                                                i32.eq
                                                                                br_if $case51|0
                                                                                local.get $1
                                                                                i32.const 52
                                                                                i32.eq
                                                                                br_if $case52|0
                                                                                local.get $1
                                                                                i32.const 53
                                                                                i32.eq
                                                                                br_if $case53|0
                                                                                local.get $1
                                                                                i32.const 54
                                                                                i32.eq
                                                                                br_if $case54|0
                                                                                local.get $1
                                                                                i32.const 55
                                                                                i32.eq
                                                                                br_if $case55|0
                                                                                local.get $1
                                                                                i32.const 56
                                                                                i32.eq
                                                                                br_if $case56|0
                                                                                local.get $1
                                                                                i32.const 57
                                                                                i32.eq
                                                                                br_if $case57|0
                                                                                local.get $1
                                                                                i32.const 58
                                                                                i32.eq
                                                                                br_if $case58|0
                                                                                local.get $1
                                                                                i32.const 59
                                                                                i32.eq
                                                                                br_if $case59|0
                                                                                local.get $1
                                                                                i32.const 60
                                                                                i32.eq
                                                                                br_if $case60|0
                                                                                local.get $1
                                                                                i32.const 61
                                                                                i32.eq
                                                                                br_if $case61|0
                                                                                local.get $1
                                                                                i32.const 62
                                                                                i32.eq
                                                                                br_if $case62|0
                                                                                local.get $1
                                                                                i32.const 63
                                                                                i32.eq
                                                                                br_if $case63|0
                                                                                local.get $1
                                                                                i32.const 64
                                                                                i32.eq
                                                                                br_if $case64|0
                                                                                local.get $1
                                                                                i32.const 65
                                                                                i32.eq
                                                                                br_if $case65|0
                                                                                local.get $1
                                                                                i32.const 66
                                                                                i32.eq
                                                                                br_if $case66|0
                                                                                local.get $1
                                                                                i32.const 67
                                                                                i32.eq
                                                                                br_if $case67|0
                                                                                local.get $1
                                                                                i32.const 68
                                                                                i32.eq
                                                                                br_if $case68|0
                                                                                local.get $1
                                                                                i32.const 69
                                                                                i32.eq
                                                                                br_if $case69|0
                                                                                local.get $1
                                                                                i32.const 70
                                                                                i32.eq
                                                                                br_if $case70|0
                                                                                local.get $1
                                                                                i32.const 71
                                                                                i32.eq
                                                                                br_if $case71|0
                                                                                local.get $1
                                                                                i32.const 72
                                                                                i32.eq
                                                                                br_if $case72|0
                                                                                local.get $1
                                                                                i32.const 73
                                                                                i32.eq
                                                                                br_if $case73|0
                                                                                local.get $1
                                                                                i32.const 74
                                                                                i32.eq
                                                                                br_if $case74|0
                                                                                local.get $1
                                                                                i32.const 75
                                                                                i32.eq
                                                                                br_if $case75|0
                                                                                local.get $1
                                                                                i32.const 76
                                                                                i32.eq
                                                                                br_if $case76|0
                                                                                br $break|0
                                                                               end
                                                                               i32.const 4064
                                                                               return
                                                                              end
                                                                              i32.const 4112
                                                                              return
                                                                             end
                                                                             i32.const 4144
                                                                             return
                                                                            end
                                                                            i32.const 4176
                                                                            return
                                                                           end
                                                                           i32.const 4224
                                                                           return
                                                                          end
                                                                          i32.const 4272
                                                                          return
                                                                         end
                                                                         i32.const 4320
                                                                         return
                                                                        end
                                                                        i32.const 4352
                                                                        return
                                                                       end
                                                                       i32.const 4400
                                                                       return
                                                                      end
                                                                      i32.const 4432
                                                                      return
                                                                     end
                                                                     i32.const 4464
                                                                     return
                                                                    end
                                                                    i32.const 4496
                                                                    return
                                                                   end
                                                                   i32.const 4544
                                                                   return
                                                                  end
                                                                  i32.const 4576
                                                                  return
                                                                 end
                                                                 i32.const 4624
                                                                 return
                                                                end
                                                                i32.const 4672
                                                                return
                                                               end
                                                               i32.const 4720
                                                               return
                                                              end
                                                              i32.const 4752
                                                              return
                                                             end
                                                             i32.const 4800
                                                             return
                                                            end
                                                            i32.const 4832
                                                            return
                                                           end
                                                           i32.const 4864
                                                           return
                                                          end
                                                          i32.const 4896
                                                          return
                                                         end
                                                         i32.const 4928
                                                         return
                                                        end
                                                        i32.const 4960
                                                        return
                                                       end
                                                       i32.const 5008
                                                       return
                                                      end
                                                      i32.const 5040
                                                      return
                                                     end
                                                     i32.const 5072
                                                     return
                                                    end
                                                    i32.const 5120
                                                    return
                                                   end
                                                   i32.const 5152
                                                   return
                                                  end
                                                  i32.const 5184
                                                  return
                                                 end
                                                 i32.const 5216
                                                 return
                                                end
                                                i32.const 5248
                                                return
                                               end
                                               i32.const 5280
                                               return
                                              end
                                              i32.const 5312
                                              return
                                             end
                                             i32.const 5344
                                             return
                                            end
                                            i32.const 5376
                                            return
                                           end
                                           i32.const 5424
                                           return
                                          end
                                          i32.const 5472
                                          return
                                         end
                                         i32.const 5520
                                         return
                                        end
                                        i32.const 5568
                                        return
                                       end
                                       i32.const 5616
                                       return
                                      end
                                      i32.const 5664
                                      return
                                     end
                                     i32.const 5696
                                     return
                                    end
                                    i32.const 5728
                                    return
                                   end
                                   i32.const 5760
                                   return
                                  end
                                  i32.const 5792
                                  return
                                 end
                                 i32.const 5824
                                 return
                                end
                                i32.const 5856
                                return
                               end
                               i32.const 5888
                               return
                              end
                              i32.const 5920
                              return
                             end
                             i32.const 5952
                             return
                            end
                            i32.const 6000
                            return
                           end
                           i32.const 6032
                           return
                          end
                          i32.const 6064
                          return
                         end
                         i32.const 6112
                         return
                        end
                        i32.const 6144
                        return
                       end
                       i32.const 6192
                       return
                      end
                      i32.const 6240
                      return
                     end
                     i32.const 6288
                     return
                    end
                    i32.const 6320
                    return
                   end
                   i32.const 6352
                   return
                  end
                  i32.const 6384
                  return
                 end
                 i32.const 6432
                 return
                end
                i32.const 6480
                return
               end
               i32.const 6512
               return
              end
              i32.const 6544
              return
             end
             i32.const 6576
             return
            end
            i32.const 6624
            return
           end
           i32.const 6672
           return
          end
          i32.const 6704
          return
         end
         i32.const 6736
         return
        end
        i32.const 6768
        return
       end
       i32.const 6800
       return
      end
      i32.const 6832
      return
     end
     i32.const 6880
     return
    end
    i32.const 6912
    return
   end
   i32.const 6944
   return
  end
  i32.const 6992
  return
 )
 (func $~lib/arraybuffer/ArrayBufferView#set:buffer (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/arraybuffer/ArrayBufferView#set:dataStart (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/arraybuffer/ArrayBufferView#set:byteLength (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/arraybuffer/ArrayBufferView#get:buffer (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $~lib/rt/itcms/Object#get:rtSize (param $0 i32) (result i32)
  local.get $0
  i32.load offset=16
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
  call $~lib/rt/common/BLOCK#get:mmInfo
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
  call $~lib/rt/itcms/Object#get:rtId
  call $~lib/rt/itcms/__new
  local.set $3
  local.get $3
  local.get $0
  local.get $1
  local.tee $4
  local.get $2
  call $~lib/rt/itcms/Object#get:rtSize
  local.tee $5
  local.get $4
  local.get $5
  i32.lt_u
  select
  memory.copy
  local.get $3
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
  return
 )
 (func $~lib/json-as/assembly/util/unsafeCharCodeAt (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.const 1
  i32.shl
  i32.add
  i32.load16_u
  return
 )
 (func $assembly/test/NonFungibleToken#get:counter (param $0 i32) (result i64)
  local.get $0
  i64.load offset=8
 )
 (func $assembly/test/NonFungibleToken#set:counter (param $0 i32) (param $1 i64)
  local.get $0
  local.get $1
  i64.store offset=8
 )
 (func $assembly/test/TokenMetaData#set:id (param $0 i32) (param $1 i64)
  local.get $0
  local.get $1
  i64.store
 )
 (func $assembly/test/TokenMetaData#set:name (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $assembly/test/TokenMetaData#set:uri (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $assembly/test/NonFungibleToken#get:tokens (param $0 i32) (result i32)
  local.get $0
  i32.load offset=16
 )
 (func $~lib/util/hash/HASH<u64> (param $0 i64) (result i32)
  (local $1 i64)
  (local $2 i32)
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 8
  i32.const 4
  i32.le_u
  drop
  i32.const 8
  i32.const 8
  i32.eq
  drop
  block $~lib/util/hash/hash64|inlined.0 (result i32)
   local.get $0
   local.set $1
   i32.const 0
   i32.const 374761393
   i32.add
   i32.const 8
   i32.add
   local.set $2
   local.get $2
   local.get $1
   i32.wrap_i64
   i32.const -1028477379
   i32.mul
   i32.add
   local.set $2
   local.get $2
   i32.const 17
   i32.rotl
   i32.const 668265263
   i32.mul
   local.set $2
   local.get $2
   local.get $1
   i64.const 32
   i64.shr_u
   i32.wrap_i64
   i32.const -1028477379
   i32.mul
   i32.add
   local.set $2
   local.get $2
   i32.const 17
   i32.rotl
   i32.const 668265263
   i32.mul
   local.set $2
   local.get $2
   local.get $2
   i32.const 15
   i32.shr_u
   i32.xor
   local.set $2
   local.get $2
   i32.const -2048144777
   i32.mul
   local.set $2
   local.get $2
   local.get $2
   i32.const 13
   i32.shr_u
   i32.xor
   local.set $2
   local.get $2
   i32.const -1028477379
   i32.mul
   local.set $2
   local.get $2
   local.get $2
   i32.const 16
   i32.shr_u
   i32.xor
   local.set $2
   local.get $2
   br $~lib/util/hash/hash64|inlined.0
  end
  return
 )
 (func $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:buckets" (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:bucketsMask" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $"~lib/map/MapEntry<u64,assembly/test/TokenMetaData>#get:taggedNext" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $"~lib/map/MapEntry<u64,assembly/test/TokenMetaData>#get:key" (param $0 i32) (result i64)
  local.get $0
  i64.load
 )
 (func $"~lib/map/MapEntry<u64,assembly/test/TokenMetaData>#set:value" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:entriesOffset" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=16
 )
 (func $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:entriesCapacity" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:entriesCount" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=20
 )
 (func $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:entries" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=8
 )
 (func $"~lib/map/MapEntry<u64,assembly/test/TokenMetaData>#set:key" (param $0 i32) (param $1 i64)
  local.get $0
  local.get $1
  i64.store
 )
 (func $"~lib/map/MapEntry<u64,assembly/test/TokenMetaData>#get:value" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=8
 )
 (func $"~lib/map/MapEntry<u64,assembly/test/TokenMetaData>#set:taggedNext" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $"~lib/map/Map<u64,assembly/test/TokenMetaData>#set:buckets" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $"~lib/map/Map<u64,assembly/test/TokenMetaData>#set:bucketsMask" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $"~lib/map/Map<u64,assembly/test/TokenMetaData>#set:entries" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $"~lib/map/Map<u64,assembly/test/TokenMetaData>#set:entriesCapacity" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $"~lib/map/Map<u64,assembly/test/TokenMetaData>#set:entriesOffset" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
 )
 (func $"~lib/map/Map<u64,assembly/test/TokenMetaData>#set:entriesCount" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=20
 )
 (func $assembly/test/NonFungibleToken#get:owners (param $0 i32) (result i32)
  local.get $0
  i32.load offset=20
 )
 (func $"~lib/map/Map<u64,~lib/string/String>#get:buckets" (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $"~lib/map/Map<u64,~lib/string/String>#get:bucketsMask" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $"~lib/map/MapEntry<u64,~lib/string/String>#get:taggedNext" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $"~lib/map/MapEntry<u64,~lib/string/String>#get:key" (param $0 i32) (result i64)
  local.get $0
  i64.load
 )
 (func $"~lib/map/MapEntry<u64,~lib/string/String>#set:value" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $"~lib/map/Map<u64,~lib/string/String>#get:entriesOffset" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=16
 )
 (func $"~lib/map/Map<u64,~lib/string/String>#get:entriesCapacity" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $"~lib/map/Map<u64,~lib/string/String>#get:entriesCount" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=20
 )
 (func $"~lib/map/Map<u64,~lib/string/String>#get:entries" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=8
 )
 (func $"~lib/map/MapEntry<u64,~lib/string/String>#set:key" (param $0 i32) (param $1 i64)
  local.get $0
  local.get $1
  i64.store
 )
 (func $"~lib/map/MapEntry<u64,~lib/string/String>#get:value" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=8
 )
 (func $"~lib/map/MapEntry<u64,~lib/string/String>#set:taggedNext" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $"~lib/map/Map<u64,~lib/string/String>#set:buckets" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $"~lib/map/Map<u64,~lib/string/String>#set:bucketsMask" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $"~lib/map/Map<u64,~lib/string/String>#set:entries" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $"~lib/map/Map<u64,~lib/string/String>#set:entriesCapacity" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $"~lib/map/Map<u64,~lib/string/String>#set:entriesOffset" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
 )
 (func $"~lib/map/Map<u64,~lib/string/String>#set:entriesCount" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=20
 )
 (func $assembly/test/NonFungibleToken#get:balances (param $0 i32) (result i32)
  local.get $0
  i32.load offset=24
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:buckets" (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:bucketsMask" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#get:taggedNext" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=8
 )
 (func $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#get:key" (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#set:value" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:entriesOffset" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=16
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:entriesCapacity" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:entriesCount" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=20
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:entries" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=8
 )
 (func $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#set:key" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#get:value" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#set:taggedNext" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#set:buckets" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#set:bucketsMask" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#set:entries" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#set:entriesCapacity" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#set:entriesOffset" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#set:entriesCount" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=20
 )
 (func $~lib/array/Array<u64>#get:length_ (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array<u64>#get:dataStart (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $~lib/array/Array<u64>#set:length_ (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/rt/__visit_globals (param $0 i32)
  (local $1 i32)
  global.get $assembly/test/s1
  local.tee $1
  if
   local.get $1
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $assembly/test/s2
  local.tee $1
  if
   local.get $1
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $assembly/test/state
  local.tee $1
  if
   local.get $1
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  i32.const 336
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 544
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 7520
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 144
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 32
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 2880
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 3936
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 1312
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 1344
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 1376
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 1408
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 1440
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 1472
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 1504
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 1536
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 1568
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 1600
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 1632
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 1664
  local.get $0
  call $~lib/rt/itcms/__visit
  global.get $~lib/@hypercubed/as-mpz/assembly/index/MpZ.ZERO
  local.tee $1
  if
   local.get $1
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $~lib/@hypercubed/as-mpz/assembly/index/MpZ.ONE
  local.tee $1
  if
   local.get $1
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $~lib/@hypercubed/as-mpz/assembly/index/MpZ.TWO
  local.tee $1
  if
   local.get $1
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $~lib/@hypercubed/as-mpz/assembly/index/MpZ.TEN
  local.tee $1
  if
   local.get $1
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $~lib/as-test/assembly/coverage/Coverage.SN
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
  local.get $1
  call $~lib/object/Object~visit
  local.get $0
  i32.load
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $~lib/object/Object~visit (param $0 i32) (param $1 i32)
 )
 (func $~lib/as-test/assembly/coverage/Coverage~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  local.get $1
  call $~lib/object/Object~visit
  local.get $0
  i32.load
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $~lib/as-test/assembly/coverage/CoverPoint~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  local.get $1
  call $~lib/object/Object~visit
  local.get $0
  i32.load
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=4
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=16
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>~visit" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/object/Object~visit
  local.get $0
  local.get $1
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#__visit"
 )
 (func $~lib/as-variant/assembly/index/Variant#get:discriminator (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $~lib/as-variant/assembly/index/Variant~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/object/Object~visit
  local.get $0
  local.get $1
  call $~lib/as-variant/assembly/index/Variant#__visit
 )
 (func $~lib/@hypercubed/as-mpz/assembly/index/MpZ~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  local.get $1
  call $~lib/object/Object~visit
  local.get $0
  i32.load offset=4
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $~lib/typedarray/Uint8Array~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/arraybuffer/ArrayBufferView~visit
 )
 (func $~lib/dataview/DataView~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  local.get $1
  call $~lib/object/Object~visit
  local.get $0
  i32.load
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $assembly/test/NonFungibleToken~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  local.get $1
  call $~lib/object/Object~visit
  local.get $0
  i32.load
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=16
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=20
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=24
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $assembly/test/TokenMetaData~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  local.get $1
  call $~lib/object/Object~visit
  local.get $0
  i32.load offset=8
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=12
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $"~lib/map/Map<u64,assembly/test/TokenMetaData>~visit" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/object/Object~visit
  local.get $0
  local.get $1
  call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#__visit"
 )
 (func $"~lib/map/Map<u64,~lib/string/String>~visit" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/object/Object~visit
  local.get $0
  local.get $1
  call $"~lib/map/Map<u64,~lib/string/String>#__visit"
 )
 (func $~lib/array/Array<u64>#get:buffer (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $~lib/array/Array<u64>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/object/Object~visit
  local.get $0
  local.get $1
  call $~lib/array/Array<u64>#__visit
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>~visit" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/object/Object~visit
  local.get $0
  local.get $1
  call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#__visit"
 )
 (func $~lib/array/Array<i32>#get:buffer (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $~lib/array/Array<i32>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/object/Object~visit
  local.get $0
  local.get $1
  call $~lib/array/Array<i32>#__visit
 )
 (func $~lib/rt/__visit_members (param $0 i32) (param $1 i32)
  block $invalid
   block $~lib/array/Array<i32>
    block $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>"
     block $~lib/array/Array<u64>
      block $"~lib/map/Map<u64,~lib/string/String>"
       block $"~lib/map/Map<u64,assembly/test/TokenMetaData>"
        block $assembly/test/TokenMetaData
         block $assembly/test/NonFungibleToken
          block $~lib/dataview/DataView
           block $~lib/typedarray/Uint8Array
            block $~lib/json-as/assembly/index/JSON.Value
             block $~lib/staticarray/StaticArray<u32>
              block $~lib/@hypercubed/as-mpz/assembly/index/MpZ
               block $~lib/as-variant/assembly/index/Variant
                block $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>"
                 block $~lib/as-test/assembly/coverage/CoverPoint
                  block $~lib/as-test/assembly/coverage/Coverage
                   block $~lib/arraybuffer/ArrayBufferView
                    block $~lib/string/String
                     block $~lib/arraybuffer/ArrayBuffer
                      block $~lib/object/Object
                       local.get $0
                       i32.const 8
                       i32.sub
                       i32.load
                       br_table $~lib/object/Object $~lib/arraybuffer/ArrayBuffer $~lib/string/String $~lib/arraybuffer/ArrayBufferView $~lib/as-test/assembly/coverage/Coverage $~lib/as-test/assembly/coverage/CoverPoint $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>" $~lib/as-variant/assembly/index/Variant $~lib/@hypercubed/as-mpz/assembly/index/MpZ $~lib/staticarray/StaticArray<u32> $~lib/json-as/assembly/index/JSON.Value $~lib/typedarray/Uint8Array $~lib/dataview/DataView $assembly/test/NonFungibleToken $assembly/test/TokenMetaData $"~lib/map/Map<u64,assembly/test/TokenMetaData>" $"~lib/map/Map<u64,~lib/string/String>" $~lib/array/Array<u64> $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>" $~lib/array/Array<i32> $invalid
                      end
                      return
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
                  call $~lib/as-test/assembly/coverage/Coverage~visit
                  return
                 end
                 local.get $0
                 local.get $1
                 call $~lib/as-test/assembly/coverage/CoverPoint~visit
                 return
                end
                local.get $0
                local.get $1
                call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>~visit"
                return
               end
               local.get $0
               local.get $1
               call $~lib/as-variant/assembly/index/Variant~visit
               return
              end
              local.get $0
              local.get $1
              call $~lib/@hypercubed/as-mpz/assembly/index/MpZ~visit
              return
             end
             return
            end
            return
           end
           local.get $0
           local.get $1
           call $~lib/typedarray/Uint8Array~visit
           return
          end
          local.get $0
          local.get $1
          call $~lib/dataview/DataView~visit
          return
         end
         local.get $0
         local.get $1
         call $assembly/test/NonFungibleToken~visit
         return
        end
        local.get $0
        local.get $1
        call $assembly/test/TokenMetaData~visit
        return
       end
       local.get $0
       local.get $1
       call $"~lib/map/Map<u64,assembly/test/TokenMetaData>~visit"
       return
      end
      local.get $0
      local.get $1
      call $"~lib/map/Map<u64,~lib/string/String>~visit"
      return
     end
     local.get $0
     local.get $1
     call $~lib/array/Array<u64>~visit
     return
    end
    local.get $0
    local.get $1
    call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>~visit"
    return
   end
   local.get $0
   local.get $1
   call $~lib/array/Array<i32>~visit
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
  call $start:assembly/test
 )
 (func $~stack_check
  global.get $~lib/memory/__stack_pointer
  global.get $~lib/memory/__data_end
  i32.lt_s
  if
   i32.const 40576
   i32.const 40624
   i32.const 1
   i32.const 1
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
 )
 (func $~lib/string/String.__eq (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  local.get $1
  i32.eq
  if
   i32.const 1
   local.set $3
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $3
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
   local.set $3
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $3
   return
  end
  local.get $0
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  call $~lib/string/String#get:length
  local.set $2
  local.get $2
  local.get $1
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  call $~lib/string/String#get:length
  i32.ne
  if
   i32.const 0
   local.set $3
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $3
   return
  end
  local.get $0
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  i32.const 0
  local.get $1
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  i32.const 0
  local.get $2
  call $~lib/util/string/compareImpl
  i32.eqz
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
  return
 )
 (func $~lib/string/String.__ne (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  local.get $1
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $2
  call $~lib/string/String.__eq
  i32.eqz
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
  return
 )
 (func $~lib/wasi_internal/wasi_abort (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
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
  i32.const 0
  i32.const 12
  call $~lib/bindings/wasi_snapshot_preview1/iovec#set:buf
  i32.const 12
  local.set $4
  local.get $4
  i64.const 9071471065260641
  i64.store
  local.get $4
  i32.const 7
  i32.add
  local.set $4
  local.get $0
  local.set $10
  global.get $~lib/memory/__stack_pointer
  local.get $10
  i32.store
  local.get $10
  i32.const 0
  call $~lib/string/String.__ne
  if
   local.get $4
   local.get $0
   local.get $0
   local.set $10
   global.get $~lib/memory/__stack_pointer
   local.get $10
   i32.store
   local.get $10
   call $~lib/string/String#get:length
   local.get $4
   i32.const 0
   i32.const 3
   global.set $~argumentsLength
   i32.const 0
   call $~lib/string/String.UTF8.encodeUnsafe@varargs
   i32.add
   local.set $4
  end
  local.get $4
  i32.const 544106784
  i32.store
  local.get $4
  i32.const 4
  i32.add
  local.set $4
  local.get $1
  local.set $10
  global.get $~lib/memory/__stack_pointer
  local.get $10
  i32.store
  local.get $10
  i32.const 0
  call $~lib/string/String.__ne
  if
   local.get $4
   local.get $1
   local.get $1
   local.set $10
   global.get $~lib/memory/__stack_pointer
   local.get $10
   i32.store
   local.get $10
   call $~lib/string/String#get:length
   local.get $4
   i32.const 0
   i32.const 3
   global.set $~argumentsLength
   i32.const 0
   call $~lib/string/String.UTF8.encodeUnsafe@varargs
   i32.add
   local.set $4
  end
  local.get $4
  local.tee $5
  i32.const 1
  i32.add
  local.set $4
  local.get $5
  i32.const 40
  i32.store8
  local.get $2
  call $~lib/util/number/decimalCount32
  local.set $6
  local.get $4
  local.get $6
  i32.add
  local.set $4
  loop $do-loop|0
   local.get $2
   i32.const 10
   i32.div_u
   local.set $7
   local.get $4
   i32.const 1
   i32.sub
   local.tee $4
   i32.const 48
   local.get $2
   i32.const 10
   i32.rem_u
   i32.add
   i32.store8
   local.get $7
   local.set $2
   local.get $2
   br_if $do-loop|0
  end
  local.get $4
  local.get $6
  i32.add
  local.set $4
  local.get $4
  local.tee $8
  i32.const 1
  i32.add
  local.set $4
  local.get $8
  i32.const 58
  i32.store8
  local.get $3
  call $~lib/util/number/decimalCount32
  local.set $6
  local.get $4
  local.get $6
  i32.add
  local.set $4
  loop $do-loop|1
   local.get $3
   i32.const 10
   i32.div_u
   local.set $9
   local.get $4
   i32.const 1
   i32.sub
   local.tee $4
   i32.const 48
   local.get $3
   i32.const 10
   i32.rem_u
   i32.add
   i32.store8
   local.get $9
   local.set $3
   local.get $3
   br_if $do-loop|1
  end
  local.get $4
  local.get $6
  i32.add
  local.set $4
  local.get $4
  i32.const 2601
  i32.store16
  local.get $4
  i32.const 2
  i32.add
  local.set $4
  i32.const 0
  local.get $4
  i32.const 12
  i32.sub
  call $~lib/bindings/wasi_snapshot_preview1/iovec#set:buf_len
  i32.const 2
  i32.const 0
  i32.const 1
  i32.const 8
  call $~lib/bindings/wasi_snapshot_preview1/fd_write
  drop
  i32.const 255
  call $~lib/bindings/wasi_snapshot_preview1/proc_exit
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#constructor" (param $0 i32) (result i32)
  (local $1 i32)
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
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 24
   i32.const 6
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.const 4
  i32.const 4
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=8
  local.get $1
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:buckets"
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 4
  i32.const 1
  i32.sub
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:bucketsMask"
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.const 4
  block $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>|inlined.0" (result i32)
   i32.const 12
   br $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>|inlined.0"
  end
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=8
  local.get $1
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:entries"
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 4
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:entriesCapacity"
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:entriesOffset"
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:entriesCount"
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $~lib/as-test/assembly/coverage/Coverage#constructor (param $0 i32) (result i32)
  (local $1 i32)
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
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.const 4
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  call $~lib/object/Object#constructor
  local.tee $0
  i32.store
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#constructor"
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=8
  local.get $1
  call $~lib/as-test/assembly/coverage/Coverage#set:hashes
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $~lib/as-test/assembly/coverage/Coverage#set:points
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $~lib/as-test/assembly/coverage/CoverPoint#constructor (param $0 i32) (result i32)
  (local $1 i32)
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
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 21
   i32.const 5
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  call $~lib/object/Object#constructor
  local.tee $0
  i32.store
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 800
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=8
  local.get $1
  call $~lib/as-test/assembly/coverage/CoverPoint#set:file
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 800
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=8
  local.get $1
  call $~lib/as-test/assembly/coverage/CoverPoint#set:hash
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#set:line
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#set:column
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#set:type
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#set:executed
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $~lib/util/hash/HASH<~lib/string/String> (param $0 i32) (result i32)
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
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  (local $17 i32)
  (local $18 i32)
  (local $19 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  i32.const 1
  drop
  block $~lib/util/hash/hashStr|inlined.0 (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $0
   local.tee $1
   i32.store
   local.get $1
   i32.const 0
   i32.eq
   if
    i32.const 0
    br $~lib/util/hash/hashStr|inlined.0
   end
   local.get $1
   local.set $19
   global.get $~lib/memory/__stack_pointer
   local.get $19
   i32.store offset=4
   local.get $19
   call $~lib/string/String#get:length
   i32.const 1
   i32.shl
   local.set $2
   local.get $2
   local.set $3
   local.get $1
   local.set $4
   local.get $3
   i32.const 16
   i32.ge_u
   if
    i32.const 0
    i32.const -1640531535
    i32.add
    i32.const -2048144777
    i32.add
    local.set $5
    i32.const 0
    i32.const -2048144777
    i32.add
    local.set $6
    i32.const 0
    local.set $7
    i32.const 0
    i32.const -1640531535
    i32.sub
    local.set $8
    local.get $3
    local.get $4
    i32.add
    i32.const 16
    i32.sub
    local.set $9
    loop $while-continue|0
     local.get $4
     local.get $9
     i32.le_u
     if
      block $~lib/util/hash/mix|inlined.0 (result i32)
       local.get $5
       local.set $10
       local.get $4
       i32.load
       local.set $11
       local.get $10
       local.get $11
       i32.const -2048144777
       i32.mul
       i32.add
       i32.const 13
       i32.rotl
       i32.const -1640531535
       i32.mul
       br $~lib/util/hash/mix|inlined.0
      end
      local.set $5
      block $~lib/util/hash/mix|inlined.1 (result i32)
       local.get $6
       local.set $12
       local.get $4
       i32.load offset=4
       local.set $13
       local.get $12
       local.get $13
       i32.const -2048144777
       i32.mul
       i32.add
       i32.const 13
       i32.rotl
       i32.const -1640531535
       i32.mul
       br $~lib/util/hash/mix|inlined.1
      end
      local.set $6
      block $~lib/util/hash/mix|inlined.2 (result i32)
       local.get $7
       local.set $14
       local.get $4
       i32.load offset=8
       local.set $15
       local.get $14
       local.get $15
       i32.const -2048144777
       i32.mul
       i32.add
       i32.const 13
       i32.rotl
       i32.const -1640531535
       i32.mul
       br $~lib/util/hash/mix|inlined.2
      end
      local.set $7
      block $~lib/util/hash/mix|inlined.3 (result i32)
       local.get $8
       local.set $16
       local.get $4
       i32.load offset=12
       local.set $17
       local.get $16
       local.get $17
       i32.const -2048144777
       i32.mul
       i32.add
       i32.const 13
       i32.rotl
       i32.const -1640531535
       i32.mul
       br $~lib/util/hash/mix|inlined.3
      end
      local.set $8
      local.get $4
      i32.const 16
      i32.add
      local.set $4
      br $while-continue|0
     end
    end
    local.get $2
    local.get $5
    i32.const 1
    i32.rotl
    local.get $6
    i32.const 7
    i32.rotl
    i32.add
    local.get $7
    i32.const 12
    i32.rotl
    i32.add
    local.get $8
    i32.const 18
    i32.rotl
    i32.add
    i32.add
    local.set $2
   else
    local.get $2
    i32.const 0
    i32.const 374761393
    i32.add
    i32.add
    local.set $2
   end
   local.get $1
   local.get $3
   i32.add
   i32.const 4
   i32.sub
   local.set $18
   loop $while-continue|1
    local.get $4
    local.get $18
    i32.le_u
    if
     local.get $2
     local.get $4
     i32.load
     i32.const -1028477379
     i32.mul
     i32.add
     local.set $2
     local.get $2
     i32.const 17
     i32.rotl
     i32.const 668265263
     i32.mul
     local.set $2
     local.get $4
     i32.const 4
     i32.add
     local.set $4
     br $while-continue|1
    end
   end
   local.get $1
   local.get $3
   i32.add
   local.set $18
   loop $while-continue|2
    local.get $4
    local.get $18
    i32.lt_u
    if
     local.get $2
     local.get $4
     i32.load8_u
     i32.const 374761393
     i32.mul
     i32.add
     local.set $2
     local.get $2
     i32.const 11
     i32.rotl
     i32.const -1640531535
     i32.mul
     local.set $2
     local.get $4
     i32.const 1
     i32.add
     local.set $4
     br $while-continue|2
    end
   end
   local.get $2
   local.get $2
   i32.const 15
   i32.shr_u
   i32.xor
   local.set $2
   local.get $2
   i32.const -2048144777
   i32.mul
   local.set $2
   local.get $2
   local.get $2
   i32.const 13
   i32.shr_u
   i32.xor
   local.set $2
   local.get $2
   i32.const -1028477379
   i32.mul
   local.set $2
   local.get $2
   local.get $2
   i32.const 16
   i32.shr_u
   i32.xor
   local.set $2
   local.get $2
   br $~lib/util/hash/hashStr|inlined.0
  end
  local.set $19
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $19
  return
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#find" (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store
  local.get $5
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:buckets"
  local.get $2
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store
  local.get $5
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:bucketsMask"
  i32.and
  i32.const 4
  i32.mul
  i32.add
  i32.load
  local.set $3
  loop $while-continue|0
   local.get $3
   if
    local.get $3
    call $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:taggedNext"
    local.set $4
    local.get $4
    i32.const 1
    i32.and
    i32.eqz
    if (result i32)
     local.get $3
     call $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:key"
     local.set $5
     global.get $~lib/memory/__stack_pointer
     local.get $5
     i32.store
     local.get $5
     local.get $1
     local.set $5
     global.get $~lib/memory/__stack_pointer
     local.get $5
     i32.store offset=4
     local.get $5
     call $~lib/string/String.__eq
    else
     i32.const 0
    end
    if
     local.get $3
     local.set $5
     global.get $~lib/memory/__stack_pointer
     i32.const 8
     i32.add
     global.set $~lib/memory/__stack_pointer
     local.get $5
     return
    end
    local.get $4
    i32.const 1
    i32.const -1
    i32.xor
    i32.and
    local.set $3
    br $while-continue|0
   end
  end
  i32.const 0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $5
  return
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#rehash" (param $0 i32) (param $1 i32)
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
  i32.const 20
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 20
  memory.fill
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
  block $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>|inlined.1" (result i32)
   i32.const 12
   br $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>|inlined.1"
  end
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $5
  i32.store offset=4
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:entries"
  local.set $6
  local.get $6
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:entriesOffset"
  block $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>|inlined.2" (result i32)
   i32.const 12
   br $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>|inlined.2"
  end
  i32.mul
  i32.add
  local.set $7
  local.get $5
  local.set $8
  loop $while-continue|0
   local.get $6
   local.get $7
   i32.ne
   if
    local.get $6
    local.set $9
    local.get $9
    call $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:taggedNext"
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $8
     local.set $10
     global.get $~lib/memory/__stack_pointer
     local.get $9
     call $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:key"
     local.tee $11
     i32.store offset=12
     local.get $10
     local.get $11
     local.set $14
     global.get $~lib/memory/__stack_pointer
     local.get $14
     i32.store offset=8
     local.get $14
     call $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:key"
     local.get $10
     local.get $9
     call $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:value"
     local.set $14
     global.get $~lib/memory/__stack_pointer
     local.get $14
     i32.store offset=8
     local.get $14
     call $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:value"
     local.get $11
     local.set $14
     global.get $~lib/memory/__stack_pointer
     local.get $14
     i32.store offset=8
     local.get $14
     call $~lib/util/hash/HASH<~lib/string/String>
     local.get $1
     i32.and
     local.set $12
     local.get $3
     local.get $12
     i32.const 4
     i32.mul
     i32.add
     local.set $13
     local.get $10
     local.get $13
     i32.load
     call $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:taggedNext"
     local.get $13
     local.get $8
     i32.store
     local.get $8
     block $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>|inlined.3" (result i32)
      i32.const 12
      br $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>|inlined.3"
     end
     i32.add
     local.set $8
    end
    local.get $6
    block $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>|inlined.4" (result i32)
     i32.const 12
     br $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>|inlined.4"
    end
    i32.add
    local.set $6
    br $while-continue|0
   end
  end
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $3
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=16
  local.get $14
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:buckets"
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $1
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:bucketsMask"
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $5
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=16
  local.get $14
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:entries"
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $4
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:entriesCapacity"
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=16
  local.get $14
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:entriesCount"
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:entriesOffset"
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set" (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
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
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  call $~lib/util/hash/HASH<~lib/string/String>
  local.set $3
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  local.get $1
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store offset=4
  local.get $8
  local.get $3
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#find"
  local.set $4
  local.get $4
  if
   local.get $4
   local.get $2
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:value"
   i32.const 1
   drop
   local.get $0
   local.get $2
   i32.const 1
   call $~lib/rt/itcms/__link
  else
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:entriesOffset"
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:entriesCapacity"
   i32.eq
   if
    local.get $0
    local.set $8
    global.get $~lib/memory/__stack_pointer
    local.get $8
    i32.store
    local.get $8
    local.get $0
    local.set $8
    global.get $~lib/memory/__stack_pointer
    local.get $8
    i32.store offset=4
    local.get $8
    call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:entriesCount"
    local.get $0
    local.set $8
    global.get $~lib/memory/__stack_pointer
    local.get $8
    i32.store offset=4
    local.get $8
    call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:entriesCapacity"
    i32.const 3
    i32.mul
    i32.const 4
    i32.div_s
    i32.lt_s
    if (result i32)
     local.get $0
     local.set $8
     global.get $~lib/memory/__stack_pointer
     local.get $8
     i32.store offset=4
     local.get $8
     call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:bucketsMask"
    else
     local.get $0
     local.set $8
     global.get $~lib/memory/__stack_pointer
     local.get $8
     i32.store offset=4
     local.get $8
     call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:bucketsMask"
     i32.const 1
     i32.shl
     i32.const 1
     i32.or
    end
    call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#rehash"
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:entries"
   local.tee $5
   i32.store offset=8
   local.get $5
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store offset=4
   local.get $8
   call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:entriesOffset"
   local.tee $6
   i32.const 1
   i32.add
   call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:entriesOffset"
   local.get $6
   block $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>|inlined.5" (result i32)
    i32.const 12
    br $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>|inlined.5"
   end
   i32.mul
   i32.add
   local.set $4
   local.get $4
   local.get $1
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:key"
   i32.const 1
   drop
   local.get $0
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   local.get $4
   local.get $2
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:value"
   i32.const 1
   drop
   local.get $0
   local.get $2
   i32.const 1
   call $~lib/rt/itcms/__link
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store offset=4
   local.get $8
   call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:entriesCount"
   i32.const 1
   i32.add
   call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:entriesCount"
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:buckets"
   local.get $3
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:bucketsMask"
   i32.and
   i32.const 4
   i32.mul
   i32.add
   local.set $7
   local.get $4
   local.get $7
   i32.load
   call $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:taggedNext"
   local.get $7
   local.get $4
   i32.store
  end
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $8
  return
 )
 (func $~lib/as-test/assembly/coverage/__REGISTER (param $0 i32)
  (local $1 i32)
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
  global.get $~lib/as-test/assembly/coverage/Coverage.SN
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store
  local.get $1
  global.get $~lib/as-test/assembly/coverage/Coverage.SN
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  call $~lib/as-test/assembly/coverage/Coverage#get:points
  i32.const 1
  i32.add
  call $~lib/as-test/assembly/coverage/Coverage#set:points
  global.get $~lib/as-test/assembly/coverage/Coverage.SN
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=12
  local.get $1
  call $~lib/as-test/assembly/coverage/Coverage#get:hashes
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store
  local.get $1
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=12
  local.get $1
  call $~lib/as-test/assembly/coverage/CoverPoint#get:hash
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=8
  local.get $1
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set"
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/@hypercubed/as-mpz/assembly/index/MpZ#constructor (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
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
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.const 8
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store offset=4
  local.get $5
  i32.const 0
  call $~lib/@hypercubed/as-mpz/assembly/index/MpZ#set:_sgn_size
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store offset=4
  local.get $5
  i32.const 0
  call $~lib/@hypercubed/as-mpz/assembly/index/MpZ#set:_data
  local.get $1
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store offset=4
  local.get $5
  call $~lib/staticarray/StaticArray<u32>#get:length
  i32.const 0
  i32.gt_s
  i32.eqz
  if
   i32.const 1696
   i32.const 1776
   i32.const 159
   i32.const 5
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  local.get $1
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store offset=4
  local.get $5
  call $~lib/staticarray/StaticArray<u32>#get:length
  local.set $3
  loop $while-continue|0
   local.get $3
   i32.const 1
   i32.gt_s
   if (result i32)
    local.get $1
    local.set $5
    global.get $~lib/memory/__stack_pointer
    local.get $5
    i32.store offset=4
    local.get $5
    local.get $3
    i32.const 1
    i32.sub
    call $~lib/staticarray/StaticArray<u32>#__uget
    i32.const 0
    i32.eq
   else
    i32.const 0
   end
   if
    local.get $3
    i32.const 1
    i32.sub
    local.set $3
    br $while-continue|0
   end
  end
  local.get $3
  i32.const 0
  i32.eq
  if
   local.get $0
   local.set $5
   global.get $~lib/memory/__stack_pointer
   local.get $5
   i32.store offset=4
   local.get $5
   i32.const 4
   i32.const 9
   i32.const 1888
   call $~lib/rt/__newBuffer
   local.set $5
   global.get $~lib/memory/__stack_pointer
   local.get $5
   i32.store offset=8
   local.get $5
   call $~lib/@hypercubed/as-mpz/assembly/index/MpZ#set:_data
   local.get $0
   local.set $5
   global.get $~lib/memory/__stack_pointer
   local.get $5
   i32.store offset=4
   local.get $5
   i32.const 1
   call $~lib/@hypercubed/as-mpz/assembly/index/MpZ#set:_sgn_size
  else
   local.get $0
   local.set $5
   global.get $~lib/memory/__stack_pointer
   local.get $5
   i32.store offset=4
   local.get $5
   local.get $1
   local.set $5
   global.get $~lib/memory/__stack_pointer
   local.get $5
   i32.store offset=8
   local.get $5
   call $~lib/@hypercubed/as-mpz/assembly/index/MpZ#set:_data
   local.get $0
   local.set $5
   global.get $~lib/memory/__stack_pointer
   local.get $5
   i32.store offset=4
   local.get $5
   local.get $2
   if (result i32)
    i32.const 0
    local.get $3
    i32.sub
   else
    local.get $3
   end
   call $~lib/@hypercubed/as-mpz/assembly/index/MpZ#set:_sgn_size
  end
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $5
 )
 (func $start:~lib/@hypercubed/as-mpz/assembly/index
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  i32.const 0
  i32.const 4
  i32.const 9
  i32.const 1920
  call $~lib/rt/__newBuffer
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  call $~lib/@hypercubed/as-mpz/assembly/index/MpZ#constructor
  global.set $~lib/@hypercubed/as-mpz/assembly/index/MpZ.ZERO
  i32.const 0
  i32.const 4
  i32.const 9
  i32.const 1952
  call $~lib/rt/__newBuffer
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  call $~lib/@hypercubed/as-mpz/assembly/index/MpZ#constructor
  global.set $~lib/@hypercubed/as-mpz/assembly/index/MpZ.ONE
  i32.const 0
  i32.const 4
  i32.const 9
  i32.const 1984
  call $~lib/rt/__newBuffer
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  call $~lib/@hypercubed/as-mpz/assembly/index/MpZ#constructor
  global.set $~lib/@hypercubed/as-mpz/assembly/index/MpZ.TWO
  i32.const 0
  i32.const 4
  i32.const 9
  i32.const 2016
  call $~lib/rt/__newBuffer
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 0
  call $~lib/@hypercubed/as-mpz/assembly/index/MpZ#constructor
  global.set $~lib/@hypercubed/as-mpz/assembly/index/MpZ.TEN
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#has" (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
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
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  local.get $1
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $2
  local.get $1
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=8
  local.get $2
  call $~lib/util/hash/HASH<~lib/string/String>
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#find"
  i32.const 0
  i32.ne
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
  return
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#delete" (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
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
  local.get $0
  local.set $6
  global.get $~lib/memory/__stack_pointer
  local.get $6
  i32.store
  local.get $6
  local.get $1
  local.set $6
  global.get $~lib/memory/__stack_pointer
  local.get $6
  i32.store offset=4
  local.get $6
  local.get $1
  local.set $6
  global.get $~lib/memory/__stack_pointer
  local.get $6
  i32.store offset=8
  local.get $6
  call $~lib/util/hash/HASH<~lib/string/String>
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#find"
  local.set $2
  local.get $2
  i32.eqz
  if
   i32.const 0
   local.set $6
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $6
   return
  end
  local.get $2
  local.get $2
  call $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:taggedNext"
  i32.const 1
  i32.or
  call $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:taggedNext"
  local.get $0
  local.set $6
  global.get $~lib/memory/__stack_pointer
  local.get $6
  i32.store
  local.get $6
  local.get $0
  local.set $6
  global.get $~lib/memory/__stack_pointer
  local.get $6
  i32.store offset=4
  local.get $6
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:entriesCount"
  i32.const 1
  i32.sub
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#set:entriesCount"
  local.get $0
  local.set $6
  global.get $~lib/memory/__stack_pointer
  local.get $6
  i32.store
  local.get $6
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:bucketsMask"
  i32.const 1
  i32.shr_u
  local.set $3
  local.get $3
  i32.const 1
  i32.add
  i32.const 4
  local.tee $4
  local.get $0
  local.set $6
  global.get $~lib/memory/__stack_pointer
  local.get $6
  i32.store
  local.get $6
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:entriesCount"
  local.tee $5
  local.get $4
  local.get $5
  i32.gt_u
  select
  i32.ge_u
  if (result i32)
   local.get $0
   local.set $6
   global.get $~lib/memory/__stack_pointer
   local.get $6
   i32.store
   local.get $6
   call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:entriesCount"
   local.get $0
   local.set $6
   global.get $~lib/memory/__stack_pointer
   local.get $6
   i32.store
   local.get $6
   call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:entriesCapacity"
   i32.const 3
   i32.mul
   i32.const 4
   i32.div_s
   i32.lt_s
  else
   i32.const 0
  end
  if
   local.get $0
   local.set $6
   global.get $~lib/memory/__stack_pointer
   local.get $6
   i32.store
   local.get $6
   local.get $3
   call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#rehash"
  end
  i32.const 1
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
  return
 )
 (func $~lib/as-test/assembly/coverage/__COVER (param $0 i32)
  (local $1 i32)
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
  global.get $~lib/as-test/assembly/coverage/Coverage.SN
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=8
  local.get $1
  call $~lib/as-test/assembly/coverage/Coverage#get:hashes
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store
  local.get $1
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#has"
  if
   global.get $~lib/as-test/assembly/coverage/Coverage.SN
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   local.get $1
   call $~lib/as-test/assembly/coverage/Coverage#get:hashes
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store
   local.get $1
   local.get $0
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $1
   call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#delete"
   drop
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/string/String.UTF8.encode (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
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
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  local.get $1
  call $~lib/string/String.UTF8.byteLength
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $3
  i32.store offset=4
  local.get $0
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  call $~lib/string/String#get:length
  local.get $3
  local.get $1
  local.get $2
  call $~lib/string/String.UTF8.encodeUnsafe
  drop
  local.get $3
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
  return
 )
 (func $~lib/string/String.UTF8.encode@varargs (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  block $2of2
   block $1of2
    block $0of2
     block $outOfRange
      global.get $~argumentsLength
      i32.const 1
      i32.sub
      br_table $0of2 $1of2 $2of2 $outOfRange
     end
     unreachable
    end
    i32.const 0
    local.set $1
   end
   i32.const 0
   local.set $2
  end
  local.get $0
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  local.get $1
  local.get $2
  call $~lib/string/String.UTF8.encode
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
 )
 (func $~lib/typedarray/Uint8Array.wrap (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
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
  block $"~lib/typedarray/WRAP<~lib/typedarray/Uint8Array,u8>|inlined.0" (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $0
   local.tee $3
   i32.store
   local.get $1
   local.set $4
   local.get $2
   local.set $5
   local.get $3
   local.set $9
   global.get $~lib/memory/__stack_pointer
   local.get $9
   i32.store offset=4
   local.get $9
   call $~lib/arraybuffer/ArrayBuffer#get:byteLength
   local.set $7
   local.get $4
   local.get $7
   i32.gt_u
   local.get $4
   i32.const 0
   i32.and
   i32.or
   if
    i32.const 336
    i32.const 2096
    i32.const 1860
    i32.const 5
    call $~lib/wasi_internal/wasi_abort
    unreachable
   end
   local.get $5
   i32.const 0
   i32.lt_s
   if
    local.get $5
    i32.const -1
    i32.eq
    if
     local.get $7
     i32.const 0
     i32.and
     if
      i32.const 544
      i32.const 2096
      i32.const 1865
      i32.const 9
      call $~lib/wasi_internal/wasi_abort
      unreachable
     end
     local.get $7
     local.get $4
     i32.sub
     local.set $6
    else
     i32.const 544
     i32.const 2096
     i32.const 1869
     i32.const 7
     call $~lib/wasi_internal/wasi_abort
     unreachable
    end
   else
    local.get $5
    i32.const 0
    i32.shl
    local.set $6
    local.get $4
    local.get $6
    i32.add
    local.get $7
    i32.gt_s
    if
     i32.const 544
     i32.const 2096
     i32.const 1874
     i32.const 7
     call $~lib/wasi_internal/wasi_abort
     unreachable
    end
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.const 11
   call $~lib/rt/itcms/__new
   local.tee $8
   i32.store offset=8
   local.get $8
   local.get $3
   i32.store
   local.get $8
   local.get $3
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $8
   local.get $6
   i32.store offset=8
   local.get $8
   local.get $3
   local.get $4
   i32.add
   i32.store offset=4
   local.get $8
   br $"~lib/typedarray/WRAP<~lib/typedarray/Uint8Array,u8>|inlined.0"
  end
  local.set $9
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $9
  return
 )
 (func $~lib/typedarray/Uint8Array.wrap@varargs (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  block $2of2
   block $1of2
    block $0of2
     block $outOfRange
      global.get $~argumentsLength
      i32.const 1
      i32.sub
      br_table $0of2 $1of2 $2of2 $outOfRange
     end
     unreachable
    end
    i32.const 0
    local.set $1
   end
   i32.const -1
   local.set $2
  end
  local.get $0
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  local.get $1
  local.get $2
  call $~lib/typedarray/Uint8Array.wrap
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
 )
 (func $~lib/dataview/DataView#constructor (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 i32)
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
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.const 12
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store offset=4
  local.get $5
  i32.const 0
  call $~lib/dataview/DataView#set:buffer
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store offset=4
  local.get $5
  i32.const 0
  call $~lib/dataview/DataView#set:dataStart
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store offset=4
  local.get $5
  i32.const 0
  call $~lib/dataview/DataView#set:byteLength
  local.get $3
  i32.const 1073741820
  i32.gt_u
  local.get $2
  local.get $3
  i32.add
  local.get $1
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store offset=4
  local.get $5
  call $~lib/arraybuffer/ArrayBuffer#get:byteLength
  i32.gt_u
  i32.or
  if
   i32.const 544
   i32.const 2160
   i32.const 25
   i32.const 7
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store offset=4
  local.get $5
  local.get $1
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store offset=8
  local.get $5
  call $~lib/dataview/DataView#set:buffer
  local.get $1
  local.get $2
  i32.add
  local.set $4
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store offset=4
  local.get $5
  local.get $4
  call $~lib/dataview/DataView#set:dataStart
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store offset=4
  local.get $5
  local.get $3
  call $~lib/dataview/DataView#set:byteLength
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $5
 )
 (func $~lib/dataview/DataView#constructor@varargs (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
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
      i32.const 1
      i32.sub
      br_table $0of2 $1of2 $2of2 $outOfRange
     end
     unreachable
    end
    i32.const 0
    local.set $2
   end
   local.get $1
   local.set $4
   global.get $~lib/memory/__stack_pointer
   local.get $4
   i32.store
   local.get $4
   call $~lib/arraybuffer/ArrayBuffer#get:byteLength
   local.set $3
  end
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  local.get $1
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=4
  local.get $4
  local.get $2
  local.get $3
  call $~lib/dataview/DataView#constructor
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
 )
 (func $~lib/dataview/DataView#setUint32 (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  i32.const 31
  i32.shr_u
  local.get $1
  i32.const 4
  i32.add
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  call $~lib/dataview/DataView#get:byteLength
  i32.gt_s
  i32.or
  if
   i32.const 336
   i32.const 2160
   i32.const 142
   i32.const 7
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  call $~lib/dataview/DataView#get:dataStart
  local.get $1
  i32.add
  local.get $3
  if (result i32)
   local.get $2
  else
   local.get $2
   call $~lib/polyfills/bswap<u32>
  end
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/typedarray/Uint8Array#__get (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i32.ge_u
  if
   i32.const 336
   i32.const 2096
   i32.const 167
   i32.const 45
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:dataStart
  local.get $1
  i32.add
  i32.load8_u
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
  return
 )
 (func $~lib/dataview/DataView#setInt8 (param $0 i32) (param $1 i32) (param $2 i32)
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
  local.get $0
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  call $~lib/dataview/DataView#get:byteLength
  i32.ge_u
  if
   i32.const 336
   i32.const 2160
   i32.const 109
   i32.const 50
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  local.get $0
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  call $~lib/dataview/DataView#get:dataStart
  local.get $1
  i32.add
  local.get $2
  i32.store8
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/test/getLengthPrefixedString (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 20
  memory.fill
  i32.const 1216
  local.set $6
  global.get $~lib/memory/__stack_pointer
  local.get $6
  i32.store
  local.get $6
  call $~lib/as-test/assembly/coverage/__COVER
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.set $6
  global.get $~lib/memory/__stack_pointer
  local.get $6
  i32.store offset=4
  local.get $6
  i32.const 0
  i32.const 1
  global.set $~argumentsLength
  i32.const 0
  call $~lib/string/String.UTF8.encode@varargs
  local.set $6
  global.get $~lib/memory/__stack_pointer
  local.get $6
  i32.store
  local.get $6
  i32.const 0
  i32.const 1
  global.set $~argumentsLength
  i32.const 0
  call $~lib/typedarray/Uint8Array.wrap@varargs
  local.tee $1
  i32.store offset=8
  local.get $1
  local.set $6
  global.get $~lib/memory/__stack_pointer
  local.get $6
  i32.store
  local.get $6
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 4
  local.get $2
  i32.add
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $3
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  local.get $3
  local.set $6
  global.get $~lib/memory/__stack_pointer
  local.get $6
  i32.store
  local.get $6
  i32.const 0
  i32.const 1
  global.set $~argumentsLength
  i32.const 0
  call $~lib/dataview/DataView#constructor@varargs
  local.tee $4
  i32.store offset=16
  local.get $4
  local.set $6
  global.get $~lib/memory/__stack_pointer
  local.get $6
  i32.store
  local.get $6
  i32.const 0
  local.get $2
  i32.const 1
  call $~lib/dataview/DataView#setUint32
  i32.const 0
  local.set $5
  loop $for-loop|0
   local.get $5
   local.get $2
   i32.lt_s
   if
    i32.const 1264
    local.set $6
    global.get $~lib/memory/__stack_pointer
    local.get $6
    i32.store
    local.get $6
    call $~lib/as-test/assembly/coverage/__COVER
    local.get $4
    local.set $6
    global.get $~lib/memory/__stack_pointer
    local.get $6
    i32.store
    local.get $6
    i32.const 4
    local.get $5
    i32.add
    local.get $1
    local.set $6
    global.get $~lib/memory/__stack_pointer
    local.get $6
    i32.store offset=4
    local.get $6
    local.get $5
    call $~lib/typedarray/Uint8Array#__get
    call $~lib/dataview/DataView#setInt8
    local.get $5
    i32.const 1
    i32.add
    local.set $5
    br $for-loop|0
   end
  end
  local.get $3
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
  return
 )
 (func $~lib/typedarray/Uint8Array#get:length (param $0 i32) (result i32)
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
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store
  local.get $1
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
  return
 )
 (func $~lib/string/String#substring (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
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
  (local $17 i32)
  (local $18 i32)
  (local $19 i32)
  (local $20 i32)
  (local $21 i32)
  (local $22 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  local.set $22
  global.get $~lib/memory/__stack_pointer
  local.get $22
  i32.store
  local.get $22
  call $~lib/string/String#get:length
  local.set $3
  local.get $1
  local.tee $4
  i32.const 0
  local.tee $5
  local.get $4
  local.get $5
  i32.gt_s
  select
  local.tee $6
  local.get $3
  local.tee $7
  local.get $6
  local.get $7
  i32.lt_s
  select
  local.set $8
  local.get $2
  local.tee $9
  i32.const 0
  local.tee $10
  local.get $9
  local.get $10
  i32.gt_s
  select
  local.tee $11
  local.get $3
  local.tee $12
  local.get $11
  local.get $12
  i32.lt_s
  select
  local.set $13
  local.get $8
  local.tee $14
  local.get $13
  local.tee $15
  local.get $14
  local.get $15
  i32.lt_s
  select
  i32.const 1
  i32.shl
  local.set $16
  local.get $8
  local.tee $17
  local.get $13
  local.tee $18
  local.get $17
  local.get $18
  i32.gt_s
  select
  i32.const 1
  i32.shl
  local.set $19
  local.get $19
  local.get $16
  i32.sub
  local.set $20
  local.get $20
  i32.eqz
  if
   i32.const 800
   local.set $22
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $22
   return
  end
  local.get $16
  i32.eqz
  if (result i32)
   local.get $19
   local.get $3
   i32.const 1
   i32.shl
   i32.eq
  else
   i32.const 0
  end
  if
   local.get $0
   local.set $22
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $22
   return
  end
  global.get $~lib/memory/__stack_pointer
  local.get $20
  i32.const 2
  call $~lib/rt/itcms/__new
  local.tee $21
  i32.store offset=4
  local.get $21
  local.get $0
  local.get $16
  i32.add
  local.get $20
  memory.copy
  local.get $21
  local.set $22
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $22
  return
 )
 (func $~lib/util/string/joinIntegerArray<u8> (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
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
  i32.sub
  local.set $3
  local.get $3
  i32.const 0
  i32.lt_s
  if
   i32.const 800
   local.set $11
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $11
   return
  end
  local.get $3
  i32.eqz
  if
   local.get $0
   i32.load8_u
   local.set $4
   i32.const 0
   drop
   i32.const 1
   i32.const 4
   i32.le_u
   drop
   local.get $4
   i32.const 10
   call $~lib/util/number/utoa32
   local.set $11
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $11
   return
  end
  local.get $2
  local.set $11
  global.get $~lib/memory/__stack_pointer
  local.get $11
  i32.store
  local.get $11
  call $~lib/string/String#get:length
  local.set $5
  i32.const 10
  local.get $5
  i32.add
  local.get $3
  i32.mul
  i32.const 10
  i32.add
  local.set $6
  global.get $~lib/memory/__stack_pointer
  local.get $6
  i32.const 1
  i32.shl
  i32.const 2
  call $~lib/rt/itcms/__new
  local.tee $7
  i32.store offset=4
  i32.const 0
  local.set $8
  i32.const 0
  local.set $10
  loop $for-loop|0
   local.get $10
   local.get $3
   i32.lt_s
   if
    local.get $0
    local.get $10
    i32.const 0
    i32.shl
    i32.add
    i32.load8_u
    local.set $9
    local.get $8
    local.get $7
    local.get $8
    i32.const 1
    i32.shl
    i32.add
    local.get $9
    call $~lib/util/number/itoa_buffered<u8>
    i32.add
    local.set $8
    local.get $5
    if
     local.get $7
     local.get $8
     i32.const 1
     i32.shl
     i32.add
     local.get $2
     local.get $5
     i32.const 1
     i32.shl
     memory.copy
     local.get $8
     local.get $5
     i32.add
     local.set $8
    end
    local.get $10
    i32.const 1
    i32.add
    local.set $10
    br $for-loop|0
   end
  end
  local.get $0
  local.get $3
  i32.const 0
  i32.shl
  i32.add
  i32.load8_u
  local.set $9
  local.get $8
  local.get $7
  local.get $8
  i32.const 1
  i32.shl
  i32.add
  local.get $9
  call $~lib/util/number/itoa_buffered<u8>
  i32.add
  local.set $8
  local.get $6
  local.get $8
  i32.gt_s
  if
   local.get $7
   local.set $11
   global.get $~lib/memory/__stack_pointer
   local.get $11
   i32.store
   local.get $11
   i32.const 0
   local.get $8
   call $~lib/string/String#substring
   local.set $11
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $11
   return
  end
  local.get $7
  local.set $11
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $11
  return
 )
 (func $~lib/typedarray/Uint8Array#join (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:dataStart
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $2
  call $~lib/typedarray/Uint8Array#get:length
  local.get $1
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $~lib/util/string/joinIntegerArray<u8>
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
  return
 )
 (func $~lib/wasi_process/writeString (param $0 i32) (param $1 i32)
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
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  local.set $12
  global.get $~lib/memory/__stack_pointer
  local.get $12
  i32.store
  local.get $12
  call $~lib/string/String#get:length
  local.set $2
  i32.const 0
  local.set $3
  i32.const 0
  local.set $4
  i32.const 0
  local.set $5
  block $break|0
   block $case4|0
    block $case3|0
     block $case2|0
      block $case1|0
       block $case0|0
        local.get $2
        local.set $6
        local.get $6
        i32.const 4
        i32.eq
        br_if $case0|0
        local.get $6
        i32.const 3
        i32.eq
        br_if $case1|0
        local.get $6
        i32.const 2
        i32.eq
        br_if $case2|0
        local.get $6
        i32.const 1
        i32.eq
        br_if $case3|0
        local.get $6
        i32.const 0
        i32.eq
        br_if $case4|0
        br $break|0
       end
       local.get $1
       i32.load16_u offset=6
       local.set $5
       local.get $5
       i32.const 128
       i32.ge_u
       if
        br $break|0
       end
      end
      local.get $1
      i32.load16_u offset=4
      local.set $4
      local.get $4
      i32.const 128
      i32.ge_u
      if
       br $break|0
      end
     end
     local.get $1
     i32.load16_u offset=2
     local.set $3
     local.get $3
     i32.const 128
     i32.ge_u
     if
      br $break|0
     end
    end
    local.get $1
    i32.load16_u
    local.set $7
    local.get $7
    i32.const 128
    i32.ge_u
    if
     br $break|0
    end
    global.get $~lib/wasi_internal/tempbuf
    global.get $~lib/wasi_internal/tempbuf
    i32.const 2
    i32.const 4
    i32.mul
    i32.add
    i32.store
    global.get $~lib/wasi_internal/tempbuf
    local.get $2
    i32.store offset=4
    global.get $~lib/wasi_internal/tempbuf
    local.get $7
    local.get $3
    i32.const 8
    i32.shl
    i32.or
    local.get $4
    i32.const 16
    i32.shl
    i32.or
    local.get $5
    i32.const 24
    i32.shl
    i32.or
    i32.store offset=8
    local.get $0
    global.get $~lib/wasi_internal/tempbuf
    i32.const 1
    global.get $~lib/wasi_internal/tempbuf
    i32.const 3
    i32.const 4
    i32.mul
    i32.add
    call $~lib/bindings/wasi_snapshot_preview1/fd_write
    local.set $8
    local.get $8
    i32.const 65535
    i32.and
    if
     local.get $8
     call $~lib/bindings/wasi_snapshot_preview1/errnoToString
     i32.const 7040
     i32.const 177
     i32.const 16
     call $~lib/wasi_internal/wasi_abort
     unreachable
    end
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  local.get $1
  local.set $12
  global.get $~lib/memory/__stack_pointer
  local.get $12
  i32.store
  local.get $12
  i32.const 0
  call $~lib/string/String.UTF8.byteLength
  local.set $9
  local.get $9
  call $~lib/rt/tlsf/__alloc
  local.set $10
  local.get $1
  local.get $2
  local.get $10
  i32.const 0
  i32.const 3
  global.set $~argumentsLength
  i32.const 0
  call $~lib/string/String.UTF8.encodeUnsafe@varargs
  local.get $9
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 7040
   i32.const 183
   i32.const 3
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  global.get $~lib/wasi_internal/tempbuf
  local.get $10
  i32.store
  global.get $~lib/wasi_internal/tempbuf
  local.get $9
  i32.store offset=4
  local.get $0
  global.get $~lib/wasi_internal/tempbuf
  i32.const 1
  global.get $~lib/wasi_internal/tempbuf
  i32.const 2
  i32.const 4
  i32.mul
  i32.add
  call $~lib/bindings/wasi_snapshot_preview1/fd_write
  local.set $11
  local.get $10
  call $~lib/rt/tlsf/__free
  local.get $11
  i32.const 65535
  i32.and
  if
   local.get $11
   call $~lib/bindings/wasi_snapshot_preview1/errnoToString
   i32.const 7040
   i32.const 188
   i32.const 12
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/wasi_process/WritableStream#write<~lib/string/String> (param $0 i32) (param $1 i32)
  (local $2 i32)
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
  local.get $1
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $~lib/wasi_process/writeString
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/wasi_console/wasi_console.log (param $0 i32)
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
  global.get $~lib/wasi_process/wasi_process.stdout
  local.set $1
  local.get $1
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $~lib/wasi_process/WritableStream#write<~lib/string/String>
  local.get $1
  i32.const 7104
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $~lib/wasi_process/WritableStream#write<~lib/string/String>
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/arraybuffer/ArrayBufferView#constructor (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
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
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.const 3
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=4
  local.get $4
  i32.const 0
  call $~lib/arraybuffer/ArrayBufferView#set:buffer
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=4
  local.get $4
  i32.const 0
  call $~lib/arraybuffer/ArrayBufferView#set:dataStart
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=4
  local.get $4
  i32.const 0
  call $~lib/arraybuffer/ArrayBufferView#set:byteLength
  local.get $1
  i32.const 1073741820
  local.get $2
  i32.shr_u
  i32.gt_u
  if
   i32.const 544
   i32.const 592
   i32.const 19
   i32.const 57
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $1
  local.get $2
  i32.shl
  local.tee $1
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $3
  i32.store offset=8
  i32.const 2
  global.get $~lib/shared/runtime/Runtime.Incremental
  i32.ne
  drop
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=4
  local.get $4
  local.get $3
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=12
  local.get $4
  call $~lib/arraybuffer/ArrayBufferView#set:buffer
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=4
  local.get $4
  local.get $3
  call $~lib/arraybuffer/ArrayBufferView#set:dataStart
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=4
  local.get $4
  local.get $1
  call $~lib/arraybuffer/ArrayBufferView#set:byteLength
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
 )
 (func $~lib/typedarray/Uint8Array#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
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
   i32.const 12
   i32.const 11
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $2
  local.get $1
  i32.const 0
  call $~lib/arraybuffer/ArrayBufferView#constructor
  local.tee $0
  i32.store
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $~lib/typedarray/Uint8Array#__set (param $0 i32) (param $1 i32) (param $2 i32)
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
  local.get $0
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i32.ge_u
  if
   i32.const 336
   i32.const 2096
   i32.const 178
   i32.const 45
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  local.get $0
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  call $~lib/arraybuffer/ArrayBufferView#get:dataStart
  local.get $1
  i32.add
  local.get $2
  i32.store8
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/string/String.UTF8.decode (param $0 i32) (param $1 i32) (result i32)
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
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $~lib/arraybuffer/ArrayBuffer#get:byteLength
  local.get $1
  call $~lib/string/String.UTF8.decodeUnsafe
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
  return
 )
 (func $assembly/test/readStringFromMemory (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
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
  i32.const 1120
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store
  local.get $5
  call $~lib/as-test/assembly/coverage/__COVER
  local.get $0
  i32.load
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#constructor
  local.tee $2
  i32.store offset=4
  i32.const 0
  local.set $3
  loop $for-loop|0
   local.get $3
   local.get $1
   i32.lt_s
   if
    i32.const 1168
    local.set $5
    global.get $~lib/memory/__stack_pointer
    local.get $5
    i32.store
    local.get $5
    call $~lib/as-test/assembly/coverage/__COVER
    local.get $2
    local.set $5
    global.get $~lib/memory/__stack_pointer
    local.get $5
    i32.store
    local.get $5
    local.get $3
    local.get $0
    i32.const 4
    i32.add
    local.get $3
    i32.add
    i32.load8_u
    call $~lib/typedarray/Uint8Array#__set
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.get $2
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store offset=8
  local.get $5
  call $~lib/arraybuffer/ArrayBufferView#get:buffer
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store
  local.get $5
  i32.const 0
  call $~lib/string/String.UTF8.decode
  local.tee $4
  i32.store offset=12
  local.get $4
  local.set $5
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $5
  return
 )
 (func $~lib/string/String#trimStart (param $0 i32) (result i32)
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
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
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
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   return
  end
  local.get $1
  local.get $2
  i32.sub
  local.set $1
  local.get $1
  i32.eqz
  if
   i32.const 800
   local.set $4
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   return
  end
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.const 2
  call $~lib/rt/itcms/__new
  local.tee $3
  i32.store offset=4
  local.get $3
  local.get $0
  local.get $2
  i32.add
  local.get $1
  memory.copy
  local.get $3
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
  return
 )
 (func $assembly/test/NonFungibleToken#__INITIALIZE (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  i32.const 880
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store
  local.get $1
  call $~lib/as-test/assembly/coverage/__COVER
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
  return
 )
 (func $assembly/test/NonFungibleToken#__DESERIALIZE (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32) (result i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  i32.const 928
  local.set $6
  global.get $~lib/memory/__stack_pointer
  local.get $6
  i32.store
  local.get $6
  call $~lib/as-test/assembly/coverage/__COVER
  i32.const 0
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
  return
 )
 (func $~lib/json-as/assembly/index/JSON.parse<assembly/test/NonFungibleToken> (param $0 i32) (result i32)
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
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  (local $17 i32)
  (local $18 i32)
  (local $19 i32)
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
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  local.set $1
  i32.const 1
  drop
  block $~lib/json-as/assembly/deserialize/object/deserializeObject<assembly/test/NonFungibleToken>|inlined.0 (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $0
   local.set $19
   global.get $~lib/memory/__stack_pointer
   local.get $19
   i32.store
   local.get $19
   call $~lib/string/String#trimStart
   local.tee $2
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   i32.const 28
   i32.const 13
   call $~lib/rt/itcms/__new
   local.tee $3
   i32.store offset=8
   local.get $3
   local.set $19
   global.get $~lib/memory/__stack_pointer
   local.get $19
   i32.store
   local.get $19
   call $assembly/test/NonFungibleToken#__INITIALIZE
   drop
   i32.const 0
   local.set $4
   i32.const 0
   local.set $5
   i32.const 0
   local.set $6
   i32.const 0
   local.set $7
   i32.const 1
   local.set $8
   loop $for-loop|0
    local.get $8
    local.get $2
    local.set $19
    global.get $~lib/memory/__stack_pointer
    local.get $19
    i32.store
    local.get $19
    call $~lib/string/String#get:length
    i32.const 1
    i32.sub
    i32.lt_s
    if
     local.get $2
     local.set $19
     global.get $~lib/memory/__stack_pointer
     local.get $19
     i32.store
     local.get $19
     local.get $8
     call $~lib/json-as/assembly/util/unsafeCharCodeAt
     local.set $9
     local.get $9
     i32.const 91
     i32.eq
     if
      local.get $8
      local.set $10
      block $for-break1
       loop $for-loop|1
        local.get $10
        local.get $2
        local.set $19
        global.get $~lib/memory/__stack_pointer
        local.get $19
        i32.store
        local.get $19
        call $~lib/string/String#get:length
        i32.const 1
        i32.sub
        i32.lt_s
        if
         local.get $2
         local.set $19
         global.get $~lib/memory/__stack_pointer
         local.get $19
         i32.store
         local.get $19
         local.get $10
         call $~lib/json-as/assembly/util/unsafeCharCodeAt
         local.set $11
         local.get $11
         i32.const 91
         i32.eq
         if
          local.get $7
          i32.const 1
          i32.add
          local.set $7
         else
          local.get $11
          i32.const 93
          i32.eq
          if
           local.get $7
           i32.const 1
           i32.sub
           local.set $7
           local.get $7
           i32.const 0
           i32.eq
           if
            local.get $10
            i32.const 1
            i32.add
            local.set $10
            local.get $3
            local.set $19
            global.get $~lib/memory/__stack_pointer
            local.get $19
            i32.store
            local.get $19
            local.get $2
            local.set $19
            global.get $~lib/memory/__stack_pointer
            local.get $19
            i32.store offset=12
            local.get $19
            local.get $4
            local.get $5
            local.get $8
            local.get $10
            call $assembly/test/NonFungibleToken#__DESERIALIZE
            drop
            local.get $10
            local.set $8
            i32.const 0
            local.set $6
            br $for-break1
           end
          end
         end
         local.get $10
         i32.const 1
         i32.add
         local.set $10
         br $for-loop|1
        end
       end
      end
     else
      local.get $9
      i32.const 123
      i32.eq
      if
       local.get $8
       local.set $12
       block $for-break2
        loop $for-loop|2
         local.get $12
         local.get $2
         local.set $19
         global.get $~lib/memory/__stack_pointer
         local.get $19
         i32.store
         local.get $19
         call $~lib/string/String#get:length
         i32.const 1
         i32.sub
         i32.lt_s
         if
          local.get $2
          local.set $19
          global.get $~lib/memory/__stack_pointer
          local.get $19
          i32.store
          local.get $19
          local.get $12
          call $~lib/json-as/assembly/util/unsafeCharCodeAt
          local.set $13
          local.get $13
          i32.const 123
          i32.eq
          if
           local.get $7
           i32.const 1
           i32.add
           local.set $7
          else
           local.get $13
           i32.const 125
           i32.eq
           if
            local.get $7
            i32.const 1
            i32.sub
            local.set $7
            local.get $7
            i32.const 0
            i32.eq
            if
             local.get $12
             i32.const 1
             i32.add
             local.set $12
             local.get $3
             local.set $19
             global.get $~lib/memory/__stack_pointer
             local.get $19
             i32.store
             local.get $19
             local.get $2
             local.set $19
             global.get $~lib/memory/__stack_pointer
             local.get $19
             i32.store offset=12
             local.get $19
             local.get $4
             local.get $5
             local.get $8
             local.get $12
             call $assembly/test/NonFungibleToken#__DESERIALIZE
             drop
             local.get $12
             local.set $8
             i32.const 0
             local.set $6
             br $for-break2
            end
           end
          end
          local.get $12
          i32.const 1
          i32.add
          local.set $12
          br $for-loop|2
         end
        end
       end
      else
       local.get $9
       i32.const 34
       i32.eq
       if
        i32.const 0
        local.set $14
        local.get $8
        i32.const 1
        i32.add
        local.tee $8
        local.set $15
        block $for-break3
         loop $for-loop|3
          local.get $15
          local.get $2
          local.set $19
          global.get $~lib/memory/__stack_pointer
          local.get $19
          i32.store
          local.get $19
          call $~lib/string/String#get:length
          i32.const 1
          i32.sub
          i32.lt_s
          if
           local.get $2
           local.set $19
           global.get $~lib/memory/__stack_pointer
           local.get $19
           i32.store
           local.get $19
           local.get $15
           call $~lib/json-as/assembly/util/unsafeCharCodeAt
           local.set $16
           local.get $16
           i32.const 92
           i32.eq
           if (result i32)
            local.get $14
            i32.eqz
           else
            i32.const 0
           end
           if
            i32.const 1
            local.set $14
           else
            local.get $16
            i32.const 34
            i32.eq
            if (result i32)
             local.get $14
             i32.eqz
            else
             i32.const 0
            end
            if
             local.get $6
             i32.const 0
             i32.eq
             if
              local.get $8
              local.set $4
              local.get $15
              local.set $5
              i32.const 1
              local.set $6
             else
              local.get $3
              local.set $19
              global.get $~lib/memory/__stack_pointer
              local.get $19
              i32.store
              local.get $19
              local.get $2
              local.set $19
              global.get $~lib/memory/__stack_pointer
              local.get $19
              i32.store offset=12
              local.get $19
              local.get $4
              local.get $5
              local.get $8
              i32.const 1
              i32.sub
              local.get $15
              i32.const 1
              i32.add
              call $assembly/test/NonFungibleToken#__DESERIALIZE
              drop
              i32.const 0
              local.set $6
             end
             local.get $15
             i32.const 1
             i32.add
             local.tee $15
             local.set $8
             br $for-break3
            end
            i32.const 0
            local.set $14
           end
           local.get $15
           i32.const 1
           i32.add
           local.set $15
           br $for-loop|3
          end
         end
        end
       else
        local.get $9
        i32.const 110
        i32.eq
        if (result i32)
         local.get $2
         local.set $19
         global.get $~lib/memory/__stack_pointer
         local.get $19
         i32.store
         local.get $19
         local.get $8
         i32.const 1
         i32.add
         call $~lib/json-as/assembly/util/unsafeCharCodeAt
         i32.const 117
         i32.eq
        else
         i32.const 0
        end
        if (result i32)
         local.get $2
         local.set $19
         global.get $~lib/memory/__stack_pointer
         local.get $19
         i32.store
         local.get $19
         local.get $8
         i32.const 2
         i32.add
         call $~lib/json-as/assembly/util/unsafeCharCodeAt
         i32.const 108
         i32.eq
        else
         i32.const 0
        end
        if (result i32)
         local.get $2
         local.set $19
         global.get $~lib/memory/__stack_pointer
         local.get $19
         i32.store
         local.get $19
         local.get $8
         i32.const 3
         i32.add
         call $~lib/json-as/assembly/util/unsafeCharCodeAt
         i32.const 108
         i32.eq
        else
         i32.const 0
        end
        if
         local.get $3
         local.set $19
         global.get $~lib/memory/__stack_pointer
         local.get $19
         i32.store
         local.get $19
         local.get $2
         local.set $19
         global.get $~lib/memory/__stack_pointer
         local.get $19
         i32.store offset=12
         local.get $19
         local.get $4
         local.get $5
         local.get $8
         local.get $8
         i32.const 4
         i32.add
         call $assembly/test/NonFungibleToken#__DESERIALIZE
         drop
         local.get $8
         i32.const 3
         i32.add
         local.set $8
         i32.const 0
         local.set $6
        else
         local.get $9
         i32.const 116
         i32.eq
         if (result i32)
          local.get $2
          local.set $19
          global.get $~lib/memory/__stack_pointer
          local.get $19
          i32.store
          local.get $19
          local.get $8
          i32.const 1
          i32.add
          call $~lib/json-as/assembly/util/unsafeCharCodeAt
          i32.const 114
          i32.eq
         else
          i32.const 0
         end
         if (result i32)
          local.get $2
          local.set $19
          global.get $~lib/memory/__stack_pointer
          local.get $19
          i32.store
          local.get $19
          local.get $8
          i32.const 2
          i32.add
          call $~lib/json-as/assembly/util/unsafeCharCodeAt
          i32.const 117
          i32.eq
         else
          i32.const 0
         end
         if (result i32)
          local.get $2
          local.set $19
          global.get $~lib/memory/__stack_pointer
          local.get $19
          i32.store
          local.get $19
          local.get $8
          i32.const 3
          i32.add
          call $~lib/json-as/assembly/util/unsafeCharCodeAt
          i32.const 101
          i32.eq
         else
          i32.const 0
         end
         if
          local.get $3
          local.set $19
          global.get $~lib/memory/__stack_pointer
          local.get $19
          i32.store
          local.get $19
          local.get $2
          local.set $19
          global.get $~lib/memory/__stack_pointer
          local.get $19
          i32.store offset=12
          local.get $19
          local.get $4
          local.get $5
          local.get $8
          local.get $8
          i32.const 4
          i32.add
          call $assembly/test/NonFungibleToken#__DESERIALIZE
          drop
          local.get $8
          i32.const 3
          i32.add
          local.set $8
          i32.const 0
          local.set $6
         else
          local.get $9
          i32.const 102
          i32.eq
          if (result i32)
           local.get $2
           local.set $19
           global.get $~lib/memory/__stack_pointer
           local.get $19
           i32.store
           local.get $19
           local.get $8
           i32.const 1
           i32.add
           call $~lib/json-as/assembly/util/unsafeCharCodeAt
           i32.const 97
           i32.eq
          else
           i32.const 0
          end
          if (result i32)
           local.get $2
           local.set $19
           global.get $~lib/memory/__stack_pointer
           local.get $19
           i32.store
           local.get $19
           local.get $8
           i32.const 2
           i32.add
           call $~lib/json-as/assembly/util/unsafeCharCodeAt
           i32.const 108
           i32.eq
          else
           i32.const 0
          end
          if (result i32)
           local.get $2
           local.set $19
           global.get $~lib/memory/__stack_pointer
           local.get $19
           i32.store
           local.get $19
           local.get $8
           i32.const 3
           i32.add
           call $~lib/json-as/assembly/util/unsafeCharCodeAt
           i32.const 115
           i32.eq
          else
           i32.const 0
          end
          if (result i32)
           local.get $2
           local.set $19
           global.get $~lib/memory/__stack_pointer
           local.get $19
           i32.store
           local.get $19
           local.get $8
           i32.const 4
           i32.add
           call $~lib/json-as/assembly/util/unsafeCharCodeAt
           i32.const 101
           i32.eq
          else
           i32.const 0
          end
          if
           local.get $3
           local.set $19
           global.get $~lib/memory/__stack_pointer
           local.get $19
           i32.store
           local.get $19
           local.get $2
           local.set $19
           global.get $~lib/memory/__stack_pointer
           local.get $19
           i32.store offset=12
           local.get $19
           local.get $4
           local.get $5
           local.get $8
           local.get $8
           i32.const 5
           i32.add
           call $assembly/test/NonFungibleToken#__DESERIALIZE
           drop
           local.get $8
           i32.const 4
           i32.add
           local.set $8
           i32.const 0
           local.set $6
          else
           local.get $9
           i32.const 48
           i32.ge_s
           if (result i32)
            local.get $9
            i32.const 57
            i32.le_s
           else
            i32.const 0
           end
           if (result i32)
            i32.const 1
           else
            local.get $9
            i32.const 45
            i32.eq
           end
           if
            local.get $8
            i32.const 1
            i32.add
            local.tee $8
            local.set $17
            block $for-break4
             loop $for-loop|4
              local.get $17
              local.get $2
              local.set $19
              global.get $~lib/memory/__stack_pointer
              local.get $19
              i32.store
              local.get $19
              call $~lib/string/String#get:length
              i32.lt_s
              if
               local.get $2
               local.set $19
               global.get $~lib/memory/__stack_pointer
               local.get $19
               i32.store
               local.get $19
               local.get $17
               call $~lib/json-as/assembly/util/unsafeCharCodeAt
               local.set $18
               local.get $18
               i32.const 44
               i32.eq
               if (result i32)
                i32.const 1
               else
                local.get $18
                i32.const 125
                i32.eq
               end
               if (result i32)
                i32.const 1
               else
                local.get $18
                call $~lib/util/string/isSpace
               end
               if
                local.get $3
                local.set $19
                global.get $~lib/memory/__stack_pointer
                local.get $19
                i32.store
                local.get $19
                local.get $2
                local.set $19
                global.get $~lib/memory/__stack_pointer
                local.get $19
                i32.store offset=12
                local.get $19
                local.get $4
                local.get $5
                local.get $8
                i32.const 1
                i32.sub
                local.get $17
                call $assembly/test/NonFungibleToken#__DESERIALIZE
                drop
                local.get $17
                local.set $8
                i32.const 0
                local.set $6
                br $for-break4
               end
               local.get $17
               i32.const 1
               i32.add
               local.set $17
               br $for-loop|4
              end
             end
            end
           end
          end
         end
        end
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
   local.get $3
   br $~lib/json-as/assembly/deserialize/object/deserializeObject<assembly/test/NonFungibleToken>|inlined.0
  end
  local.set $19
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $19
  return
 )
 (func $assembly/test/TokenMetaData#constructor (param $0 i32) (param $1 i64) (param $2 i32) (param $3 i32) (result i32)
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
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=4
  local.get $4
  i64.const 0
  call $assembly/test/TokenMetaData#set:id
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=4
  local.get $4
  i32.const 0
  call $assembly/test/TokenMetaData#set:name
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=4
  local.get $4
  i32.const 0
  call $assembly/test/TokenMetaData#set:uri
  i32.const 720
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=4
  local.get $4
  call $~lib/as-test/assembly/coverage/__COVER
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=4
  local.get $4
  local.get $1
  call $assembly/test/TokenMetaData#set:id
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=4
  local.get $4
  local.get $2
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=8
  local.get $4
  call $assembly/test/TokenMetaData#set:name
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=4
  local.get $4
  local.get $3
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=8
  local.get $4
  call $assembly/test/TokenMetaData#set:uri
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
 )
 (func $"~lib/map/Map<u64,assembly/test/TokenMetaData>#find" (param $0 i32) (param $1 i64) (param $2 i32) (result i32)
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
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store
  local.get $5
  call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:buckets"
  local.get $2
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store
  local.get $5
  call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:bucketsMask"
  i32.and
  i32.const 4
  i32.mul
  i32.add
  i32.load
  local.set $3
  loop $while-continue|0
   local.get $3
   if
    local.get $3
    call $"~lib/map/MapEntry<u64,assembly/test/TokenMetaData>#get:taggedNext"
    local.set $4
    local.get $4
    i32.const 1
    i32.and
    i32.eqz
    if (result i32)
     local.get $3
     call $"~lib/map/MapEntry<u64,assembly/test/TokenMetaData>#get:key"
     local.get $1
     i64.eq
    else
     i32.const 0
    end
    if
     local.get $3
     local.set $5
     global.get $~lib/memory/__stack_pointer
     i32.const 4
     i32.add
     global.set $~lib/memory/__stack_pointer
     local.get $5
     return
    end
    local.get $4
    i32.const 1
    i32.const -1
    i32.xor
    i32.and
    local.set $3
    br $while-continue|0
   end
  end
  i32.const 0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $5
  return
 )
 (func $"~lib/map/Map<u64,assembly/test/TokenMetaData>#rehash" (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i64)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
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
  block $"~lib/map/ENTRY_SIZE<u64,assembly/test/TokenMetaData>|inlined.0" (result i32)
   i32.const 16
   br $"~lib/map/ENTRY_SIZE<u64,assembly/test/TokenMetaData>|inlined.0"
  end
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $5
  i32.store offset=4
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:entries"
  local.set $6
  local.get $6
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:entriesOffset"
  block $"~lib/map/ENTRY_SIZE<u64,assembly/test/TokenMetaData>|inlined.1" (result i32)
   i32.const 16
   br $"~lib/map/ENTRY_SIZE<u64,assembly/test/TokenMetaData>|inlined.1"
  end
  i32.mul
  i32.add
  local.set $7
  local.get $5
  local.set $8
  loop $while-continue|0
   local.get $6
   local.get $7
   i32.ne
   if
    local.get $6
    local.set $9
    local.get $9
    call $"~lib/map/MapEntry<u64,assembly/test/TokenMetaData>#get:taggedNext"
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $8
     local.set $10
     local.get $9
     call $"~lib/map/MapEntry<u64,assembly/test/TokenMetaData>#get:key"
     local.set $11
     local.get $10
     local.get $11
     call $"~lib/map/MapEntry<u64,assembly/test/TokenMetaData>#set:key"
     local.get $10
     local.get $9
     call $"~lib/map/MapEntry<u64,assembly/test/TokenMetaData>#get:value"
     local.set $14
     global.get $~lib/memory/__stack_pointer
     local.get $14
     i32.store offset=8
     local.get $14
     call $"~lib/map/MapEntry<u64,assembly/test/TokenMetaData>#set:value"
     local.get $11
     call $~lib/util/hash/HASH<u64>
     local.get $1
     i32.and
     local.set $12
     local.get $3
     local.get $12
     i32.const 4
     i32.mul
     i32.add
     local.set $13
     local.get $10
     local.get $13
     i32.load
     call $"~lib/map/MapEntry<u64,assembly/test/TokenMetaData>#set:taggedNext"
     local.get $13
     local.get $8
     i32.store
     local.get $8
     block $"~lib/map/ENTRY_SIZE<u64,assembly/test/TokenMetaData>|inlined.2" (result i32)
      i32.const 16
      br $"~lib/map/ENTRY_SIZE<u64,assembly/test/TokenMetaData>|inlined.2"
     end
     i32.add
     local.set $8
    end
    local.get $6
    block $"~lib/map/ENTRY_SIZE<u64,assembly/test/TokenMetaData>|inlined.3" (result i32)
     i32.const 16
     br $"~lib/map/ENTRY_SIZE<u64,assembly/test/TokenMetaData>|inlined.3"
    end
    i32.add
    local.set $6
    br $while-continue|0
   end
  end
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $3
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#set:buckets"
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $1
  call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#set:bucketsMask"
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $5
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#set:entries"
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $4
  call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#set:entriesCapacity"
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:entriesCount"
  call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#set:entriesOffset"
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $"~lib/map/Map<u64,assembly/test/TokenMetaData>#set" (param $0 i32) (param $1 i64) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
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
  call $~lib/util/hash/HASH<u64>
  local.set $3
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  local.get $1
  local.get $3
  call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#find"
  local.set $4
  local.get $4
  if
   local.get $4
   local.get $2
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/MapEntry<u64,assembly/test/TokenMetaData>#set:value"
   i32.const 1
   drop
   local.get $0
   local.get $2
   i32.const 1
   call $~lib/rt/itcms/__link
  else
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:entriesOffset"
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:entriesCapacity"
   i32.eq
   if
    local.get $0
    local.set $8
    global.get $~lib/memory/__stack_pointer
    local.get $8
    i32.store
    local.get $8
    local.get $0
    local.set $8
    global.get $~lib/memory/__stack_pointer
    local.get $8
    i32.store offset=4
    local.get $8
    call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:entriesCount"
    local.get $0
    local.set $8
    global.get $~lib/memory/__stack_pointer
    local.get $8
    i32.store offset=4
    local.get $8
    call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:entriesCapacity"
    i32.const 3
    i32.mul
    i32.const 4
    i32.div_s
    i32.lt_s
    if (result i32)
     local.get $0
     local.set $8
     global.get $~lib/memory/__stack_pointer
     local.get $8
     i32.store offset=4
     local.get $8
     call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:bucketsMask"
    else
     local.get $0
     local.set $8
     global.get $~lib/memory/__stack_pointer
     local.get $8
     i32.store offset=4
     local.get $8
     call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:bucketsMask"
     i32.const 1
     i32.shl
     i32.const 1
     i32.or
    end
    call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#rehash"
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:entries"
   local.tee $5
   i32.store offset=8
   local.get $5
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store offset=4
   local.get $8
   call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:entriesOffset"
   local.tee $6
   i32.const 1
   i32.add
   call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#set:entriesOffset"
   local.get $6
   block $"~lib/map/ENTRY_SIZE<u64,assembly/test/TokenMetaData>|inlined.4" (result i32)
    i32.const 16
    br $"~lib/map/ENTRY_SIZE<u64,assembly/test/TokenMetaData>|inlined.4"
   end
   i32.mul
   i32.add
   local.set $4
   local.get $4
   local.get $1
   call $"~lib/map/MapEntry<u64,assembly/test/TokenMetaData>#set:key"
   i32.const 0
   drop
   local.get $4
   local.get $2
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/MapEntry<u64,assembly/test/TokenMetaData>#set:value"
   i32.const 1
   drop
   local.get $0
   local.get $2
   i32.const 1
   call $~lib/rt/itcms/__link
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store offset=4
   local.get $8
   call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:entriesCount"
   i32.const 1
   i32.add
   call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#set:entriesCount"
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:buckets"
   local.get $3
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:bucketsMask"
   i32.and
   i32.const 4
   i32.mul
   i32.add
   local.set $7
   local.get $4
   local.get $7
   i32.load
   call $"~lib/map/MapEntry<u64,assembly/test/TokenMetaData>#set:taggedNext"
   local.get $7
   local.get $4
   i32.store
  end
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $8
  return
 )
 (func $"~lib/map/Map<u64,~lib/string/String>#find" (param $0 i32) (param $1 i64) (param $2 i32) (result i32)
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
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store
  local.get $5
  call $"~lib/map/Map<u64,~lib/string/String>#get:buckets"
  local.get $2
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store
  local.get $5
  call $"~lib/map/Map<u64,~lib/string/String>#get:bucketsMask"
  i32.and
  i32.const 4
  i32.mul
  i32.add
  i32.load
  local.set $3
  loop $while-continue|0
   local.get $3
   if
    local.get $3
    call $"~lib/map/MapEntry<u64,~lib/string/String>#get:taggedNext"
    local.set $4
    local.get $4
    i32.const 1
    i32.and
    i32.eqz
    if (result i32)
     local.get $3
     call $"~lib/map/MapEntry<u64,~lib/string/String>#get:key"
     local.get $1
     i64.eq
    else
     i32.const 0
    end
    if
     local.get $3
     local.set $5
     global.get $~lib/memory/__stack_pointer
     i32.const 4
     i32.add
     global.set $~lib/memory/__stack_pointer
     local.get $5
     return
    end
    local.get $4
    i32.const 1
    i32.const -1
    i32.xor
    i32.and
    local.set $3
    br $while-continue|0
   end
  end
  i32.const 0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $5
  return
 )
 (func $"~lib/map/Map<u64,~lib/string/String>#rehash" (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i64)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
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
  block $"~lib/map/ENTRY_SIZE<u64,~lib/string/String>|inlined.0" (result i32)
   i32.const 16
   br $"~lib/map/ENTRY_SIZE<u64,~lib/string/String>|inlined.0"
  end
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $5
  i32.store offset=4
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  call $"~lib/map/Map<u64,~lib/string/String>#get:entries"
  local.set $6
  local.get $6
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  call $"~lib/map/Map<u64,~lib/string/String>#get:entriesOffset"
  block $"~lib/map/ENTRY_SIZE<u64,~lib/string/String>|inlined.1" (result i32)
   i32.const 16
   br $"~lib/map/ENTRY_SIZE<u64,~lib/string/String>|inlined.1"
  end
  i32.mul
  i32.add
  local.set $7
  local.get $5
  local.set $8
  loop $while-continue|0
   local.get $6
   local.get $7
   i32.ne
   if
    local.get $6
    local.set $9
    local.get $9
    call $"~lib/map/MapEntry<u64,~lib/string/String>#get:taggedNext"
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $8
     local.set $10
     local.get $9
     call $"~lib/map/MapEntry<u64,~lib/string/String>#get:key"
     local.set $11
     local.get $10
     local.get $11
     call $"~lib/map/MapEntry<u64,~lib/string/String>#set:key"
     local.get $10
     local.get $9
     call $"~lib/map/MapEntry<u64,~lib/string/String>#get:value"
     local.set $14
     global.get $~lib/memory/__stack_pointer
     local.get $14
     i32.store offset=8
     local.get $14
     call $"~lib/map/MapEntry<u64,~lib/string/String>#set:value"
     local.get $11
     call $~lib/util/hash/HASH<u64>
     local.get $1
     i32.and
     local.set $12
     local.get $3
     local.get $12
     i32.const 4
     i32.mul
     i32.add
     local.set $13
     local.get $10
     local.get $13
     i32.load
     call $"~lib/map/MapEntry<u64,~lib/string/String>#set:taggedNext"
     local.get $13
     local.get $8
     i32.store
     local.get $8
     block $"~lib/map/ENTRY_SIZE<u64,~lib/string/String>|inlined.2" (result i32)
      i32.const 16
      br $"~lib/map/ENTRY_SIZE<u64,~lib/string/String>|inlined.2"
     end
     i32.add
     local.set $8
    end
    local.get $6
    block $"~lib/map/ENTRY_SIZE<u64,~lib/string/String>|inlined.3" (result i32)
     i32.const 16
     br $"~lib/map/ENTRY_SIZE<u64,~lib/string/String>|inlined.3"
    end
    i32.add
    local.set $6
    br $while-continue|0
   end
  end
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $3
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $"~lib/map/Map<u64,~lib/string/String>#set:buckets"
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $1
  call $"~lib/map/Map<u64,~lib/string/String>#set:bucketsMask"
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $5
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $"~lib/map/Map<u64,~lib/string/String>#set:entries"
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $4
  call $"~lib/map/Map<u64,~lib/string/String>#set:entriesCapacity"
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $"~lib/map/Map<u64,~lib/string/String>#get:entriesCount"
  call $"~lib/map/Map<u64,~lib/string/String>#set:entriesOffset"
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $"~lib/map/Map<u64,~lib/string/String>#set" (param $0 i32) (param $1 i64) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
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
  call $~lib/util/hash/HASH<u64>
  local.set $3
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  local.get $1
  local.get $3
  call $"~lib/map/Map<u64,~lib/string/String>#find"
  local.set $4
  local.get $4
  if
   local.get $4
   local.get $2
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/MapEntry<u64,~lib/string/String>#set:value"
   i32.const 1
   drop
   local.get $0
   local.get $2
   i32.const 1
   call $~lib/rt/itcms/__link
  else
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<u64,~lib/string/String>#get:entriesOffset"
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<u64,~lib/string/String>#get:entriesCapacity"
   i32.eq
   if
    local.get $0
    local.set $8
    global.get $~lib/memory/__stack_pointer
    local.get $8
    i32.store
    local.get $8
    local.get $0
    local.set $8
    global.get $~lib/memory/__stack_pointer
    local.get $8
    i32.store offset=4
    local.get $8
    call $"~lib/map/Map<u64,~lib/string/String>#get:entriesCount"
    local.get $0
    local.set $8
    global.get $~lib/memory/__stack_pointer
    local.get $8
    i32.store offset=4
    local.get $8
    call $"~lib/map/Map<u64,~lib/string/String>#get:entriesCapacity"
    i32.const 3
    i32.mul
    i32.const 4
    i32.div_s
    i32.lt_s
    if (result i32)
     local.get $0
     local.set $8
     global.get $~lib/memory/__stack_pointer
     local.get $8
     i32.store offset=4
     local.get $8
     call $"~lib/map/Map<u64,~lib/string/String>#get:bucketsMask"
    else
     local.get $0
     local.set $8
     global.get $~lib/memory/__stack_pointer
     local.get $8
     i32.store offset=4
     local.get $8
     call $"~lib/map/Map<u64,~lib/string/String>#get:bucketsMask"
     i32.const 1
     i32.shl
     i32.const 1
     i32.or
    end
    call $"~lib/map/Map<u64,~lib/string/String>#rehash"
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<u64,~lib/string/String>#get:entries"
   local.tee $5
   i32.store offset=8
   local.get $5
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store offset=4
   local.get $8
   call $"~lib/map/Map<u64,~lib/string/String>#get:entriesOffset"
   local.tee $6
   i32.const 1
   i32.add
   call $"~lib/map/Map<u64,~lib/string/String>#set:entriesOffset"
   local.get $6
   block $"~lib/map/ENTRY_SIZE<u64,~lib/string/String>|inlined.4" (result i32)
    i32.const 16
    br $"~lib/map/ENTRY_SIZE<u64,~lib/string/String>|inlined.4"
   end
   i32.mul
   i32.add
   local.set $4
   local.get $4
   local.get $1
   call $"~lib/map/MapEntry<u64,~lib/string/String>#set:key"
   i32.const 0
   drop
   local.get $4
   local.get $2
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/MapEntry<u64,~lib/string/String>#set:value"
   i32.const 1
   drop
   local.get $0
   local.get $2
   i32.const 1
   call $~lib/rt/itcms/__link
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store offset=4
   local.get $8
   call $"~lib/map/Map<u64,~lib/string/String>#get:entriesCount"
   i32.const 1
   i32.add
   call $"~lib/map/Map<u64,~lib/string/String>#set:entriesCount"
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<u64,~lib/string/String>#get:buckets"
   local.get $3
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<u64,~lib/string/String>#get:bucketsMask"
   i32.and
   i32.const 4
   i32.mul
   i32.add
   local.set $7
   local.get $4
   local.get $7
   i32.load
   call $"~lib/map/MapEntry<u64,~lib/string/String>#set:taggedNext"
   local.get $7
   local.get $4
   i32.store
  end
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $8
  return
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#find" (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store
  local.get $5
  call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:buckets"
  local.get $2
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store
  local.get $5
  call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:bucketsMask"
  i32.and
  i32.const 4
  i32.mul
  i32.add
  i32.load
  local.set $3
  loop $while-continue|0
   local.get $3
   if
    local.get $3
    call $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#get:taggedNext"
    local.set $4
    local.get $4
    i32.const 1
    i32.and
    i32.eqz
    if (result i32)
     local.get $3
     call $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#get:key"
     local.set $5
     global.get $~lib/memory/__stack_pointer
     local.get $5
     i32.store
     local.get $5
     local.get $1
     local.set $5
     global.get $~lib/memory/__stack_pointer
     local.get $5
     i32.store offset=4
     local.get $5
     call $~lib/string/String.__eq
    else
     i32.const 0
    end
    if
     local.get $3
     local.set $5
     global.get $~lib/memory/__stack_pointer
     i32.const 8
     i32.add
     global.set $~lib/memory/__stack_pointer
     local.get $5
     return
    end
    local.get $4
    i32.const 1
    i32.const -1
    i32.xor
    i32.and
    local.set $3
    br $while-continue|0
   end
  end
  i32.const 0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $5
  return
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#has" (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
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
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  local.get $1
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $2
  local.get $1
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=8
  local.get $2
  call $~lib/util/hash/HASH<~lib/string/String>
  call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#find"
  i32.const 0
  i32.ne
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
  return
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#rehash" (param $0 i32) (param $1 i32)
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
  i32.const 20
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 20
  memory.fill
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
  block $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/array/Array<u64>>|inlined.0" (result i32)
   i32.const 12
   br $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/array/Array<u64>>|inlined.0"
  end
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $5
  i32.store offset=4
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:entries"
  local.set $6
  local.get $6
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:entriesOffset"
  block $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/array/Array<u64>>|inlined.1" (result i32)
   i32.const 12
   br $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/array/Array<u64>>|inlined.1"
  end
  i32.mul
  i32.add
  local.set $7
  local.get $5
  local.set $8
  loop $while-continue|0
   local.get $6
   local.get $7
   i32.ne
   if
    local.get $6
    local.set $9
    local.get $9
    call $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#get:taggedNext"
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $8
     local.set $10
     global.get $~lib/memory/__stack_pointer
     local.get $9
     call $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#get:key"
     local.tee $11
     i32.store offset=12
     local.get $10
     local.get $11
     local.set $14
     global.get $~lib/memory/__stack_pointer
     local.get $14
     i32.store offset=8
     local.get $14
     call $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#set:key"
     local.get $10
     local.get $9
     call $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#get:value"
     local.set $14
     global.get $~lib/memory/__stack_pointer
     local.get $14
     i32.store offset=8
     local.get $14
     call $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#set:value"
     local.get $11
     local.set $14
     global.get $~lib/memory/__stack_pointer
     local.get $14
     i32.store offset=8
     local.get $14
     call $~lib/util/hash/HASH<~lib/string/String>
     local.get $1
     i32.and
     local.set $12
     local.get $3
     local.get $12
     i32.const 4
     i32.mul
     i32.add
     local.set $13
     local.get $10
     local.get $13
     i32.load
     call $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#set:taggedNext"
     local.get $13
     local.get $8
     i32.store
     local.get $8
     block $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/array/Array<u64>>|inlined.2" (result i32)
      i32.const 12
      br $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/array/Array<u64>>|inlined.2"
     end
     i32.add
     local.set $8
    end
    local.get $6
    block $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/array/Array<u64>>|inlined.3" (result i32)
     i32.const 12
     br $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/array/Array<u64>>|inlined.3"
    end
    i32.add
    local.set $6
    br $while-continue|0
   end
  end
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $3
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=16
  local.get $14
  call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#set:buckets"
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $1
  call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#set:bucketsMask"
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $5
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=16
  local.get $14
  call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#set:entries"
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $4
  call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#set:entriesCapacity"
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=16
  local.get $14
  call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:entriesCount"
  call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#set:entriesOffset"
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#set" (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
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
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  call $~lib/util/hash/HASH<~lib/string/String>
  local.set $3
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  local.get $1
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store offset=4
  local.get $8
  local.get $3
  call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#find"
  local.set $4
  local.get $4
  if
   local.get $4
   local.get $2
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#set:value"
   i32.const 1
   drop
   local.get $0
   local.get $2
   i32.const 1
   call $~lib/rt/itcms/__link
  else
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:entriesOffset"
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:entriesCapacity"
   i32.eq
   if
    local.get $0
    local.set $8
    global.get $~lib/memory/__stack_pointer
    local.get $8
    i32.store
    local.get $8
    local.get $0
    local.set $8
    global.get $~lib/memory/__stack_pointer
    local.get $8
    i32.store offset=4
    local.get $8
    call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:entriesCount"
    local.get $0
    local.set $8
    global.get $~lib/memory/__stack_pointer
    local.get $8
    i32.store offset=4
    local.get $8
    call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:entriesCapacity"
    i32.const 3
    i32.mul
    i32.const 4
    i32.div_s
    i32.lt_s
    if (result i32)
     local.get $0
     local.set $8
     global.get $~lib/memory/__stack_pointer
     local.get $8
     i32.store offset=4
     local.get $8
     call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:bucketsMask"
    else
     local.get $0
     local.set $8
     global.get $~lib/memory/__stack_pointer
     local.get $8
     i32.store offset=4
     local.get $8
     call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:bucketsMask"
     i32.const 1
     i32.shl
     i32.const 1
     i32.or
    end
    call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#rehash"
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:entries"
   local.tee $5
   i32.store offset=8
   local.get $5
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store offset=4
   local.get $8
   call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:entriesOffset"
   local.tee $6
   i32.const 1
   i32.add
   call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#set:entriesOffset"
   local.get $6
   block $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/array/Array<u64>>|inlined.4" (result i32)
    i32.const 12
    br $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/array/Array<u64>>|inlined.4"
   end
   i32.mul
   i32.add
   local.set $4
   local.get $4
   local.get $1
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#set:key"
   i32.const 1
   drop
   local.get $0
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   local.get $4
   local.get $2
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#set:value"
   i32.const 1
   drop
   local.get $0
   local.get $2
   i32.const 1
   call $~lib/rt/itcms/__link
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store offset=4
   local.get $8
   call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:entriesCount"
   i32.const 1
   i32.add
   call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#set:entriesCount"
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:buckets"
   local.get $3
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:bucketsMask"
   i32.and
   i32.const 4
   i32.mul
   i32.add
   local.set $7
   local.get $4
   local.get $7
   i32.load
   call $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#set:taggedNext"
   local.get $7
   local.get $4
   i32.store
  end
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $8
  return
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get" (param $0 i32) (param $1 i32) (result i32)
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
  local.get $0
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  local.get $1
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  local.get $1
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=8
  local.get $3
  call $~lib/util/hash/HASH<~lib/string/String>
  call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#find"
  local.set $2
  local.get $2
  i32.eqz
  if
   i32.const 7520
   i32.const 7584
   i32.const 105
   i32.const 17
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  local.get $2
  call $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#get:value"
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
  return
 )
 (func $~lib/array/ensureCapacity (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
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
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
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
    i32.const 544
    i32.const 7632
    i32.const 19
    i32.const 48
    call $~lib/wasi_internal/wasi_abort
    unreachable
   end
   local.get $0
   local.set $14
   global.get $~lib/memory/__stack_pointer
   local.get $14
   i32.store
   local.get $14
   call $~lib/arraybuffer/ArrayBufferView#get:buffer
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
   local.set $8
   local.get $3
   if
    local.get $4
    i32.const 1
    i32.shl
    local.tee $9
    i32.const 1073741820
    local.tee $10
    local.get $9
    local.get $10
    i32.lt_u
    select
    local.tee $11
    local.get $8
    local.tee $12
    local.get $11
    local.get $12
    i32.gt_u
    select
    local.set $8
   end
   local.get $5
   local.get $8
   call $~lib/rt/itcms/__renew
   local.set $13
   i32.const 2
   global.get $~lib/shared/runtime/Runtime.Incremental
   i32.ne
   drop
   local.get $13
   local.get $5
   i32.ne
   if
    local.get $0
    local.get $13
    i32.store
    local.get $0
    local.get $13
    i32.store offset=4
    local.get $0
    local.get $13
    i32.const 0
    call $~lib/rt/itcms/__link
   end
   local.get $0
   local.get $8
   i32.store offset=8
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/array/Array<u64>#push (param $0 i32) (param $1 i64) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
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
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  call $~lib/array/Array<u64>#get:length_
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
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  call $~lib/array/Array<u64>#get:dataStart
  local.get $2
  i32.const 3
  i32.shl
  i32.add
  local.get $1
  i64.store
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  local.get $3
  call $~lib/array/Array<u64>#set:length_
  local.get $3
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
  return
 )
 (func $assembly/test/NonFungibleToken#mint (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i64)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i64)
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 20
  memory.fill
  i32.const 1024
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  call $~lib/as-test/assembly/coverage/__COVER
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store offset=4
  local.get $8
  call $assembly/test/NonFungibleToken#get:counter
  i64.const 1
  i64.add
  call $assembly/test/NonFungibleToken#set:counter
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  call $assembly/test/NonFungibleToken#get:counter
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  local.get $4
  local.get $1
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  local.get $2
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store offset=4
  local.get $8
  call $assembly/test/TokenMetaData#constructor
  local.tee $5
  i32.store offset=8
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store offset=12
  local.get $8
  call $assembly/test/NonFungibleToken#get:tokens
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  local.get $4
  local.get $5
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store offset=4
  local.get $8
  call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#set"
  drop
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store offset=12
  local.get $8
  call $assembly/test/NonFungibleToken#get:owners
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  local.get $4
  local.get $3
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store offset=4
  local.get $8
  call $"~lib/map/Map<u64,~lib/string/String>#set"
  drop
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store offset=12
  local.get $8
  call $assembly/test/NonFungibleToken#get:balances
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  local.get $3
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store offset=4
  local.get $8
  call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#has"
  i32.eqz
  if
   i32.const 1072
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $~lib/as-test/assembly/coverage/__COVER
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store offset=16
   local.get $8
   call $assembly/test/NonFungibleToken#get:balances
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   local.get $3
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store offset=4
   local.get $8
   i32.const 0
   i32.const 3
   i32.const 17
   i32.const 7488
   call $~lib/rt/__newArray
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store offset=12
   local.get $8
   call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#set"
   drop
  end
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store offset=16
  local.get $8
  call $assembly/test/NonFungibleToken#get:balances
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store offset=4
  local.get $8
  local.get $3
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store offset=12
  local.get $8
  call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get"
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  local.get $4
  call $~lib/array/Array<u64>#push
  drop
  local.get $4
  local.set $9
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $9
  return
 )
 (func $assembly/test/NonFungibleToken#__SERIALIZE (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  i32.const 832
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store
  local.get $1
  call $~lib/as-test/assembly/coverage/__COVER
  i32.const 7680
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
  return
 )
 (func $~lib/json-as/assembly/index/JSON.stringify<assembly/test/NonFungibleToken> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
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
  i32.const 0
  drop
  i32.const 1
  drop
  block $~lib/json-as/assembly/serialize/object/serializeObject<assembly/test/NonFungibleToken>|inlined.0 (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $0
   local.tee $1
   i32.store
   local.get $1
   local.set $2
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store offset=4
   local.get $2
   call $assembly/test/NonFungibleToken#__SERIALIZE
   br $~lib/json-as/assembly/serialize/object/serializeObject<assembly/test/NonFungibleToken>|inlined.0
  end
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
  return
 )
 (func $start:assembly/test
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
  (local $13 i32)
  (local $14 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 72
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 72
  memory.fill
  call $start:~lib/as-test/assembly/coverage
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#constructor
  local.tee $0
  i32.store offset=4
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 656
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:file
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 720
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:hash
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 9
  call $~lib/as-test/assembly/coverage/CoverPoint#set:line
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 53
  call $~lib/as-test/assembly/coverage/CoverPoint#set:column
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 768
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:type
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#set:executed
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  call $~lib/as-test/assembly/coverage/__REGISTER
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#constructor
  local.tee $1
  i32.store offset=16
  local.get $1
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 656
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:file
  local.get $1
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 832
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:hash
  local.get $1
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 1
  call $~lib/as-test/assembly/coverage/CoverPoint#set:line
  local.get $1
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 23
  call $~lib/as-test/assembly/coverage/CoverPoint#set:column
  local.get $1
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 768
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:type
  local.get $1
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#set:executed
  local.get $1
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  call $~lib/as-test/assembly/coverage/__REGISTER
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#constructor
  local.tee $2
  i32.store offset=20
  local.get $2
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 656
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:file
  local.get $2
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 880
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:hash
  local.get $2
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 1
  call $~lib/as-test/assembly/coverage/CoverPoint#set:line
  local.get $2
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 22
  call $~lib/as-test/assembly/coverage/CoverPoint#set:column
  local.get $2
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 768
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:type
  local.get $2
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#set:executed
  local.get $2
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  call $~lib/as-test/assembly/coverage/__REGISTER
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#constructor
  local.tee $3
  i32.store offset=24
  local.get $3
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 656
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:file
  local.get $3
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 928
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:hash
  local.get $3
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 1
  call $~lib/as-test/assembly/coverage/CoverPoint#set:line
  local.get $3
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 102
  call $~lib/as-test/assembly/coverage/CoverPoint#set:column
  local.get $3
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 768
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:type
  local.get $3
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#set:executed
  local.get $3
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  call $~lib/as-test/assembly/coverage/__REGISTER
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#constructor
  local.tee $4
  i32.store offset=28
  local.get $4
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 656
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:file
  local.get $4
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 976
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:hash
  local.get $4
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 24
  call $~lib/as-test/assembly/coverage/CoverPoint#set:line
  local.get $4
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 19
  call $~lib/as-test/assembly/coverage/CoverPoint#set:column
  local.get $4
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 768
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:type
  local.get $4
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#set:executed
  local.get $4
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  call $~lib/as-test/assembly/coverage/__REGISTER
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#constructor
  local.tee $5
  i32.store offset=32
  local.get $5
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 656
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:file
  local.get $5
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 1024
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:hash
  local.get $5
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 26
  call $~lib/as-test/assembly/coverage/CoverPoint#set:line
  local.get $5
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 61
  call $~lib/as-test/assembly/coverage/CoverPoint#set:column
  local.get $5
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 768
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:type
  local.get $5
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#set:executed
  local.get $5
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  call $~lib/as-test/assembly/coverage/__REGISTER
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#constructor
  local.tee $6
  i32.store offset=36
  local.get $6
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 656
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:file
  local.get $6
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 1072
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:hash
  local.get $6
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 35
  call $~lib/as-test/assembly/coverage/CoverPoint#set:line
  local.get $6
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 44
  call $~lib/as-test/assembly/coverage/CoverPoint#set:column
  local.get $6
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 768
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:type
  local.get $6
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#set:executed
  local.get $6
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  call $~lib/as-test/assembly/coverage/__REGISTER
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#constructor
  local.tee $7
  i32.store offset=40
  local.get $7
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 656
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:file
  local.get $7
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 832
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:hash
  local.get $7
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 1
  call $~lib/as-test/assembly/coverage/CoverPoint#set:line
  local.get $7
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 23
  call $~lib/as-test/assembly/coverage/CoverPoint#set:column
  local.get $7
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 768
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:type
  local.get $7
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#set:executed
  local.get $7
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  call $~lib/as-test/assembly/coverage/__REGISTER
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#constructor
  local.tee $8
  i32.store offset=44
  local.get $8
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 656
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:file
  local.get $8
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 880
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:hash
  local.get $8
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 1
  call $~lib/as-test/assembly/coverage/CoverPoint#set:line
  local.get $8
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 22
  call $~lib/as-test/assembly/coverage/CoverPoint#set:column
  local.get $8
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 768
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:type
  local.get $8
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#set:executed
  local.get $8
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  call $~lib/as-test/assembly/coverage/__REGISTER
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#constructor
  local.tee $9
  i32.store offset=48
  local.get $9
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 656
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:file
  local.get $9
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 928
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:hash
  local.get $9
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 1
  call $~lib/as-test/assembly/coverage/CoverPoint#set:line
  local.get $9
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 102
  call $~lib/as-test/assembly/coverage/CoverPoint#set:column
  local.get $9
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 768
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:type
  local.get $9
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#set:executed
  local.get $9
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  call $~lib/as-test/assembly/coverage/__REGISTER
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#constructor
  local.tee $10
  i32.store offset=52
  local.get $10
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 656
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:file
  local.get $10
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 1120
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:hash
  local.get $10
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 44
  call $~lib/as-test/assembly/coverage/CoverPoint#set:line
  local.get $10
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 51
  call $~lib/as-test/assembly/coverage/CoverPoint#set:column
  local.get $10
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 768
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:type
  local.get $10
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#set:executed
  local.get $10
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  call $~lib/as-test/assembly/coverage/__REGISTER
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#constructor
  local.tee $11
  i32.store offset=56
  local.get $11
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 656
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:file
  local.get $11
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 1168
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:hash
  local.get $11
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 48
  call $~lib/as-test/assembly/coverage/CoverPoint#set:line
  local.get $11
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 35
  call $~lib/as-test/assembly/coverage/CoverPoint#set:column
  local.get $11
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 768
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:type
  local.get $11
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#set:executed
  local.get $11
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  call $~lib/as-test/assembly/coverage/__REGISTER
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#constructor
  local.tee $12
  i32.store offset=60
  local.get $12
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 656
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:file
  local.get $12
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 1216
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:hash
  local.get $12
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 56
  call $~lib/as-test/assembly/coverage/CoverPoint#set:line
  local.get $12
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 58
  call $~lib/as-test/assembly/coverage/CoverPoint#set:column
  local.get $12
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 768
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:type
  local.get $12
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#set:executed
  local.get $12
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  call $~lib/as-test/assembly/coverage/__REGISTER
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#constructor
  local.tee $13
  i32.store offset=64
  local.get $13
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 656
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:file
  local.get $13
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 1264
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:hash
  local.get $13
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 64
  call $~lib/as-test/assembly/coverage/CoverPoint#set:line
  local.get $13
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 38
  call $~lib/as-test/assembly/coverage/CoverPoint#set:column
  local.get $13
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 768
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/as-test/assembly/coverage/CoverPoint#set:type
  local.get $13
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 0
  call $~lib/as-test/assembly/coverage/CoverPoint#set:executed
  local.get $13
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  call $~lib/as-test/assembly/coverage/__REGISTER
  call $start:~lib/json-as/assembly/index
  i32.const 2048
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  call $assembly/test/getLengthPrefixedString
  global.set $assembly/test/s1
  global.get $assembly/test/s1
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=68
  local.get $14
  i32.const 0
  i32.const 1
  global.set $~argumentsLength
  i32.const 0
  call $~lib/typedarray/Uint8Array.wrap@varargs
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 2224
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  call $~lib/typedarray/Uint8Array#join
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  call $~lib/wasi_console/wasi_console.log
  global.get $assembly/test/s1
  call $assembly/test/readStringFromMemory
  global.set $assembly/test/s2
  global.get $assembly/test/s2
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  call $~lib/wasi_console/wasi_console.log
  i32.const 7136
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  call $~lib/json-as/assembly/index/JSON.parse<assembly/test/NonFungibleToken>
  global.set $assembly/test/state
  global.get $assembly/test/state
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  i32.const 7392
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  i32.const 7424
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=12
  local.get $14
  i32.const 7456
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=68
  local.get $14
  call $assembly/test/NonFungibleToken#mint
  drop
  global.get $assembly/test/state
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  call $~lib/json-as/assembly/index/JSON.stringify<assembly/test/NonFungibleToken>
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store
  local.get $14
  call $~lib/wasi_console/wasi_console.log
  global.get $~lib/memory/__stack_pointer
  i32.const 72
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#__visit" (param $0 i32) (param $1 i32)
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
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:buckets"
  local.get $1
  call $~lib/rt/itcms/__visit
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:entries"
  local.set $2
  i32.const 1
  drop
  local.get $2
  local.set $3
  local.get $3
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  call $"~lib/map/Map<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:entriesOffset"
  block $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>|inlined.6" (result i32)
   i32.const 12
   br $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>|inlined.6"
  end
  i32.mul
  i32.add
  local.set $4
  loop $while-continue|0
   local.get $3
   local.get $4
   i32.lt_u
   if
    local.get $3
    local.set $5
    local.get $5
    call $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:taggedNext"
    i32.const 1
    i32.and
    i32.eqz
    if
     i32.const 1
     drop
     local.get $5
     call $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:key"
     local.set $6
     i32.const 0
     drop
     local.get $6
     local.get $1
     call $~lib/rt/itcms/__visit
     i32.const 1
     drop
     local.get $5
     call $"~lib/map/MapEntry<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>#get:value"
     local.set $7
     i32.const 0
     drop
     local.get $7
     local.get $1
     call $~lib/rt/itcms/__visit
    end
    local.get $3
    block $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>|inlined.7" (result i32)
     i32.const 12
     br $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/as-test/assembly/coverage/CoverPoint>|inlined.7"
    end
    i32.add
    local.set $3
    br $while-continue|0
   end
  end
  local.get $2
  local.get $1
  call $~lib/rt/itcms/__visit
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/as-variant/assembly/index/Variant#__visit (param $0 i32) (param $1 i32)
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
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  call $~lib/as-variant/assembly/index/Variant#get:discriminator
  i32.const 12
  i32.ge_s
  if
   block $~lib/as-variant/assembly/index/Variant#getUnchecked<usize>|inlined.0 (result i32)
    global.get $~lib/memory/__stack_pointer
    local.get $0
    local.tee $2
    i32.store offset=4
    local.get $2
    i32.load offset=8
    br $~lib/as-variant/assembly/index/Variant#getUnchecked<usize>|inlined.0
   end
   local.set $3
   local.get $3
   if
    local.get $3
    local.get $1
    call $~lib/rt/itcms/__visit
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $"~lib/map/Map<u64,assembly/test/TokenMetaData>#__visit" (param $0 i32) (param $1 i32)
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
  local.get $0
  local.set $7
  global.get $~lib/memory/__stack_pointer
  local.get $7
  i32.store
  local.get $7
  call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:buckets"
  local.get $1
  call $~lib/rt/itcms/__visit
  local.get $0
  local.set $7
  global.get $~lib/memory/__stack_pointer
  local.get $7
  i32.store
  local.get $7
  call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:entries"
  local.set $2
  i32.const 1
  drop
  local.get $2
  local.set $3
  local.get $3
  local.get $0
  local.set $7
  global.get $~lib/memory/__stack_pointer
  local.get $7
  i32.store
  local.get $7
  call $"~lib/map/Map<u64,assembly/test/TokenMetaData>#get:entriesOffset"
  block $"~lib/map/ENTRY_SIZE<u64,assembly/test/TokenMetaData>|inlined.5" (result i32)
   i32.const 16
   br $"~lib/map/ENTRY_SIZE<u64,assembly/test/TokenMetaData>|inlined.5"
  end
  i32.mul
  i32.add
  local.set $4
  loop $while-continue|0
   local.get $3
   local.get $4
   i32.lt_u
   if
    local.get $3
    local.set $5
    local.get $5
    call $"~lib/map/MapEntry<u64,assembly/test/TokenMetaData>#get:taggedNext"
    i32.const 1
    i32.and
    i32.eqz
    if
     i32.const 0
     drop
     i32.const 1
     drop
     local.get $5
     call $"~lib/map/MapEntry<u64,assembly/test/TokenMetaData>#get:value"
     local.set $6
     i32.const 0
     drop
     local.get $6
     local.get $1
     call $~lib/rt/itcms/__visit
    end
    local.get $3
    block $"~lib/map/ENTRY_SIZE<u64,assembly/test/TokenMetaData>|inlined.6" (result i32)
     i32.const 16
     br $"~lib/map/ENTRY_SIZE<u64,assembly/test/TokenMetaData>|inlined.6"
    end
    i32.add
    local.set $3
    br $while-continue|0
   end
  end
  local.get $2
  local.get $1
  call $~lib/rt/itcms/__visit
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $"~lib/map/Map<u64,~lib/string/String>#__visit" (param $0 i32) (param $1 i32)
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
  local.get $0
  local.set $7
  global.get $~lib/memory/__stack_pointer
  local.get $7
  i32.store
  local.get $7
  call $"~lib/map/Map<u64,~lib/string/String>#get:buckets"
  local.get $1
  call $~lib/rt/itcms/__visit
  local.get $0
  local.set $7
  global.get $~lib/memory/__stack_pointer
  local.get $7
  i32.store
  local.get $7
  call $"~lib/map/Map<u64,~lib/string/String>#get:entries"
  local.set $2
  i32.const 1
  drop
  local.get $2
  local.set $3
  local.get $3
  local.get $0
  local.set $7
  global.get $~lib/memory/__stack_pointer
  local.get $7
  i32.store
  local.get $7
  call $"~lib/map/Map<u64,~lib/string/String>#get:entriesOffset"
  block $"~lib/map/ENTRY_SIZE<u64,~lib/string/String>|inlined.5" (result i32)
   i32.const 16
   br $"~lib/map/ENTRY_SIZE<u64,~lib/string/String>|inlined.5"
  end
  i32.mul
  i32.add
  local.set $4
  loop $while-continue|0
   local.get $3
   local.get $4
   i32.lt_u
   if
    local.get $3
    local.set $5
    local.get $5
    call $"~lib/map/MapEntry<u64,~lib/string/String>#get:taggedNext"
    i32.const 1
    i32.and
    i32.eqz
    if
     i32.const 0
     drop
     i32.const 1
     drop
     local.get $5
     call $"~lib/map/MapEntry<u64,~lib/string/String>#get:value"
     local.set $6
     i32.const 0
     drop
     local.get $6
     local.get $1
     call $~lib/rt/itcms/__visit
    end
    local.get $3
    block $"~lib/map/ENTRY_SIZE<u64,~lib/string/String>|inlined.6" (result i32)
     i32.const 16
     br $"~lib/map/ENTRY_SIZE<u64,~lib/string/String>|inlined.6"
    end
    i32.add
    local.set $3
    br $while-continue|0
   end
  end
  local.get $2
  local.get $1
  call $~lib/rt/itcms/__visit
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/array/Array<u64>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  i32.const 0
  drop
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $~lib/array/Array<u64>#get:buffer
  local.get $1
  call $~lib/rt/itcms/__visit
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#__visit" (param $0 i32) (param $1 i32)
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
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:buckets"
  local.get $1
  call $~lib/rt/itcms/__visit
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:entries"
  local.set $2
  i32.const 1
  drop
  local.get $2
  local.set $3
  local.get $3
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  call $"~lib/map/Map<~lib/string/String,~lib/array/Array<u64>>#get:entriesOffset"
  block $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/array/Array<u64>>|inlined.5" (result i32)
   i32.const 12
   br $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/array/Array<u64>>|inlined.5"
  end
  i32.mul
  i32.add
  local.set $4
  loop $while-continue|0
   local.get $3
   local.get $4
   i32.lt_u
   if
    local.get $3
    local.set $5
    local.get $5
    call $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#get:taggedNext"
    i32.const 1
    i32.and
    i32.eqz
    if
     i32.const 1
     drop
     local.get $5
     call $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#get:key"
     local.set $6
     i32.const 0
     drop
     local.get $6
     local.get $1
     call $~lib/rt/itcms/__visit
     i32.const 1
     drop
     local.get $5
     call $"~lib/map/MapEntry<~lib/string/String,~lib/array/Array<u64>>#get:value"
     local.set $7
     i32.const 0
     drop
     local.get $7
     local.get $1
     call $~lib/rt/itcms/__visit
    end
    local.get $3
    block $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/array/Array<u64>>|inlined.6" (result i32)
     i32.const 12
     br $"~lib/map/ENTRY_SIZE<~lib/string/String,~lib/array/Array<u64>>|inlined.6"
    end
    i32.add
    local.set $3
    br $while-continue|0
   end
  end
  local.get $2
  local.get $1
  call $~lib/rt/itcms/__visit
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/array/Array<i32>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  i32.const 0
  drop
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $~lib/array/Array<i32>#get:buffer
  local.get $1
  call $~lib/rt/itcms/__visit
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/object/Object#constructor (param $0 i32) (result i32)
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
   i32.const 0
   i32.const 0
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
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
   i32.const 544
   i32.const 592
   i32.const 52
   i32.const 43
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.const 1
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
  return
 )
 (func $~lib/util/number/utoa32 (param $0 i32) (param $1 i32) (result i32)
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
   i32.const 2256
   i32.const 2384
   i32.const 350
   i32.const 5
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  local.get $0
  i32.eqz
  if
   i32.const 2448
   local.set $12
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $12
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
   i32.const 2
   call $~lib/rt/itcms/__new
   local.tee $2
   i32.store
   local.get $2
   local.set $4
   local.get $0
   local.set $5
   local.get $3
   local.set $6
   i32.const 0
   i32.const 1
   i32.ge_s
   drop
   local.get $4
   local.get $5
   local.get $6
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
    local.set $7
    global.get $~lib/memory/__stack_pointer
    local.get $7
    i32.const 1
    i32.shl
    i32.const 2
    call $~lib/rt/itcms/__new
    local.tee $2
    i32.store
    local.get $2
    local.set $8
    local.get $0
    local.set $9
    local.get $7
    local.set $10
    i32.const 0
    i32.const 1
    i32.ge_s
    drop
    local.get $8
    local.get $9
    i64.extend_i32_u
    local.get $10
    call $~lib/util/number/utoa_hex_lut
   else
    local.get $0
    i64.extend_i32_u
    local.get $1
    call $~lib/util/number/ulog_base
    local.set $11
    global.get $~lib/memory/__stack_pointer
    local.get $11
    i32.const 1
    i32.shl
    i32.const 2
    call $~lib/rt/itcms/__new
    local.tee $2
    i32.store
    local.get $2
    local.get $0
    i64.extend_i32_u
    local.get $11
    local.get $1
    call $~lib/util/number/utoa64_any_core
   end
  end
  local.get $2
  local.set $12
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $12
  return
 )
 (func $~lib/string/String.UTF8.decodeUnsafe (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
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
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  local.set $3
  local.get $0
  local.get $1
  i32.add
  local.set $4
  local.get $4
  local.get $3
  i32.ge_u
  i32.eqz
  if
   i32.const 0
   i32.const 96
   i32.const 770
   i32.const 7
   call $~lib/wasi_internal/wasi_abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.const 1
  i32.shl
  i32.const 2
  call $~lib/rt/itcms/__new
  local.tee $5
  i32.store
  local.get $5
  local.set $6
  block $while-break|0
   loop $while-continue|0
    local.get $3
    local.get $4
    i32.lt_u
    if
     local.get $3
     i32.load8_u
     local.set $7
     local.get $3
     i32.const 1
     i32.add
     local.set $3
     local.get $7
     i32.const 128
     i32.and
     i32.eqz
     if
      local.get $2
      local.get $7
      i32.eqz
      i32.and
      if
       br $while-break|0
      end
      local.get $6
      local.get $7
      i32.store16
     else
      local.get $4
      local.get $3
      i32.eq
      if
       br $while-break|0
      end
      local.get $3
      i32.load8_u
      i32.const 63
      i32.and
      local.set $8
      local.get $3
      i32.const 1
      i32.add
      local.set $3
      local.get $7
      i32.const 224
      i32.and
      i32.const 192
      i32.eq
      if
       local.get $6
       local.get $7
       i32.const 31
       i32.and
       i32.const 6
       i32.shl
       local.get $8
       i32.or
       i32.store16
      else
       local.get $4
       local.get $3
       i32.eq
       if
        br $while-break|0
       end
       local.get $3
       i32.load8_u
       i32.const 63
       i32.and
       local.set $9
       local.get $3
       i32.const 1
       i32.add
       local.set $3
       local.get $7
       i32.const 240
       i32.and
       i32.const 224
       i32.eq
       if
        local.get $7
        i32.const 15
        i32.and
        i32.const 12
        i32.shl
        local.get $8
        i32.const 6
        i32.shl
        i32.or
        local.get $9
        i32.or
        local.set $7
       else
        local.get $4
        local.get $3
        i32.eq
        if
         br $while-break|0
        end
        local.get $7
        i32.const 7
        i32.and
        i32.const 18
        i32.shl
        local.get $8
        i32.const 12
        i32.shl
        i32.or
        local.get $9
        i32.const 6
        i32.shl
        i32.or
        local.get $3
        i32.load8_u
        i32.const 63
        i32.and
        i32.or
        local.set $7
        local.get $3
        i32.const 1
        i32.add
        local.set $3
       end
       local.get $7
       i32.const 65536
       i32.lt_u
       if
        local.get $6
        local.get $7
        i32.store16
       else
        local.get $7
        i32.const 65536
        i32.sub
        local.set $7
        local.get $7
        i32.const 10
        i32.shr_u
        i32.const 55296
        i32.or
        local.set $10
        local.get $7
        i32.const 1023
        i32.and
        i32.const 56320
        i32.or
        local.set $11
        local.get $6
        local.get $10
        local.get $11
        i32.const 16
        i32.shl
        i32.or
        i32.store
        local.get $6
        i32.const 2
        i32.add
        local.set $6
       end
      end
     end
     local.get $6
     i32.const 2
     i32.add
     local.set $6
     br $while-continue|0
    end
   end
  end
  local.get $5
  local.get $6
  local.get $5
  i32.sub
  call $~lib/rt/itcms/__renew
  local.set $12
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $12
  return
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
  i32.const 1
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
  return
 )
)
