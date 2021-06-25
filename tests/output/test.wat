(module
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $i32_=>_none (func (param i32)))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $none_=>_none (func))
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $none_=>_i32 (func (result i32)))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (type $f64_=>_i32 (func (param f64) (result i32)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $i64_i32_i64_i32_i64_i32_=>_i32 (func (param i64 i32 i64 i32 i64 i32) (result i32)))
 (type $none_=>_f64 (func (result f64)))
 (type $i32_=>_f64 (func (param i32) (result f64)))
 (type $f64_i32_=>_f64 (func (param f64 i32) (result f64)))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (import "consoleBindings" "_log" (func $~lib/as-console/index/_log (param i32)))
 (global $~lib/rt/itcms/white (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/iter (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/toSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/state (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/total (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/threshold (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/visitCount (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/pinSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/fromSpace (mut i32) (i32.const 0))
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $assembly/test/helloworld (mut i32) (i32.const 0))
 (global $assembly/test/nameage (mut i32) (i32.const 0))
 (global $~lib/util/number/_frc_plus (mut i64) (i64.const 0))
 (global $~lib/util/number/_frc_minus (mut i64) (i64.const 0))
 (global $~lib/util/number/_exp (mut i32) (i32.const 0))
 (global $~lib/util/number/_K (mut i32) (i32.const 0))
 (global $~lib/util/number/_frc_pow (mut i64) (i64.const 0))
 (global $~lib/util/number/_exp_pow (mut i32) (i32.const 0))
 (global $~lib/util/string/__fixmulShift (mut i64) (i64.const 0))
 (global $~lib/rt/__rtti_base i32 (i32.const 12128))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 28716))
 (global $~started (mut i32) (i32.const 0))
 (memory $0 1)
 (data (i32.const 1036) "\1c")
 (data (i32.const 1048) "\01\00\00\00\08\00\00\00n\00u\00l\00l")
 (data (i32.const 1068) "\1c")
 (data (i32.const 1080) "\01\00\00\00\n\00\00\00w\00o\00r\00l\00d")
 (data (i32.const 1100) "<")
 (data (i32.const 1112) "\01\00\00\00 \00\00\00~\00l\00i\00b\00/\00r\00t\00/\00i\00t\00c\00m\00s\00.\00t\00s")
 (data (i32.const 1196) "<")
 (data (i32.const 1208) "\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e")
 (data (i32.const 1260) ",")
 (data (i32.const 1272) "\01\00\00\00\14\00\00\00~\00l\00i\00b\00/\00r\00t\00.\00t\00s")
 (data (i32.const 1308) "<")
 (data (i32.const 1320) "\01\00\00\00(\00\00\00A\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e")
 (data (i32.const 1436) "<")
 (data (i32.const 1448) "\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s")
 (data (i32.const 1500) "\1c")
 (data (i32.const 1512) "\01\00\00\00\0c\00\00\00J\00a\00i\00r\00u\00s")
 (data (i32.const 1532) "L")
 (data (i32.const 1544) "\01\00\00\000\00\00\00C\00h\00e\00c\00k\00i\00n\00g\00 \00S\00e\00r\00i\00a\00l\00i\00z\00a\00t\00i\00o\00n\00\n\00\n")
 (data (i32.const 1612) "\1c")
 (data (i32.const 1624) "\01")
 (data (i32.const 1644) "\1c")
 (data (i32.const 1656) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00`\06")
 (data (i32.const 1676) "\\")
 (data (i32.const 1688) "\01\00\00\00H\00\00\00\n\00S\00e\00r\00i\00a\00l\00i\00z\00e\00 \00S\00t\00r\00i\00n\00g\00:\00\n\00> > > > > > > > > > > > > > > > > ")
 (data (i32.const 1772) "<")
 (data (i32.const 1784) "\01\00\00\00(\00\00\00 \00-\00 \00\"\00H\00e\00l\00l\00o\00 \00W\00o\00r\00l\00d\00\"\00 \00-\00>\00 ")
 (data (i32.const 1836) "\1c")
 (data (i32.const 1848) "\06\00\00\00\0c\00\00\00\00\07\00\00\00\00\00\00`\06")
 (data (i32.const 1868) ",")
 (data (i32.const 1880) "\01\00\00\00\16\00\00\00H\00e\00l\00l\00o\00 \00W\00o\00r\00l\00d")
 (data (i32.const 1916) "\1c")
 (data (i32.const 1928) "\01\00\00\00\02\00\00\00\"")
 (data (i32.const 1948) "\1c")
 (data (i32.const 1960) "\06\00\00\00\0c\00\00\00\90\07\00\00\00\00\00\00\90\07")
 (data (i32.const 1980) "<")
 (data (i32.const 1992) "\01\00\00\00,\00\00\00 \00-\00 \00\"\00H\00e\00l\00l\00o\00 \00W\00o\00\\\00\"\00r\00l\00d\00\"\00 \00-\00>\00 ")
 (data (i32.const 2044) "\1c")
 (data (i32.const 2056) "\06\00\00\00\0c\00\00\00\d0\07\00\00\00\00\00\00`\06")
 (data (i32.const 2076) ",")
 (data (i32.const 2088) "\01\00\00\00\18\00\00\00H\00e\00l\00l\00o\00 \00W\00o\00\"\00r\00l\00d")
 (data (i32.const 2124) "\\")
 (data (i32.const 2136) "\01\00\00\00H\00\00\00\n\00S\00e\00r\00i\00a\00l\00i\00z\00e\00 \00N\00u\00m\00b\00e\00r\00:\00\n\00> > > > > > > > > > > > > > > > > ")
 (data (i32.const 2220) ",")
 (data (i32.const 2232) "\01\00\00\00\14\00\00\00 \00-\00 \001\002\003\00 \00-\00>\00 ")
 (data (i32.const 2268) "\1c")
 (data (i32.const 2280) "\06\00\00\00\0c\00\00\00\c0\08\00\00\00\00\00\00`\06")
 (data (i32.const 2300) "\1c")
 (data (i32.const 2312) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00`\06")
 (data (i32.const 2332) "|")
 (data (i32.const 2344) "\01\00\00\00d\00\00\00t\00o\00S\00t\00r\00i\00n\00g\00(\00)\00 \00r\00a\00d\00i\00x\00 \00a\00r\00g\00u\00m\00e\00n\00t\00 \00m\00u\00s\00t\00 \00b\00e\00 \00b\00e\00t\00w\00e\00e\00n\00 \002\00 \00a\00n\00d\00 \003\006")
 (data (i32.const 2460) "<")
 (data (i32.const 2472) "\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00u\00t\00i\00l\00/\00n\00u\00m\00b\00e\00r\00.\00t\00s")
 (data (i32.const 2524) "\1c")
 (data (i32.const 2536) "\01\00\00\00\02\00\00\000")
 (data (i32.const 2556) "0\000\000\001\000\002\000\003\000\004\000\005\000\006\000\007\000\008\000\009\001\000\001\001\001\002\001\003\001\004\001\005\001\006\001\007\001\008\001\009\002\000\002\001\002\002\002\003\002\004\002\005\002\006\002\007\002\008\002\009\003\000\003\001\003\002\003\003\003\004\003\005\003\006\003\007\003\008\003\009\004\000\004\001\004\002\004\003\004\004\004\005\004\006\004\007\004\008\004\009\005\000\005\001\005\002\005\003\005\004\005\005\005\006\005\007\005\008\005\009\006\000\006\001\006\002\006\003\006\004\006\005\006\006\006\007\006\008\006\009\007\000\007\001\007\002\007\003\007\004\007\005\007\006\007\007\007\008\007\009\008\000\008\001\008\002\008\003\008\004\008\005\008\006\008\007\008\008\008\009\009\000\009\001\009\002\009\003\009\004\009\005\009\006\009\007\009\008\009\009")
 (data (i32.const 2956) "\1c\04")
 (data (i32.const 2968) "\01\00\00\00\00\04\00\000\000\000\001\000\002\000\003\000\004\000\005\000\006\000\007\000\008\000\009\000\00a\000\00b\000\00c\000\00d\000\00e\000\00f\001\000\001\001\001\002\001\003\001\004\001\005\001\006\001\007\001\008\001\009\001\00a\001\00b\001\00c\001\00d\001\00e\001\00f\002\000\002\001\002\002\002\003\002\004\002\005\002\006\002\007\002\008\002\009\002\00a\002\00b\002\00c\002\00d\002\00e\002\00f\003\000\003\001\003\002\003\003\003\004\003\005\003\006\003\007\003\008\003\009\003\00a\003\00b\003\00c\003\00d\003\00e\003\00f\004\000\004\001\004\002\004\003\004\004\004\005\004\006\004\007\004\008\004\009\004\00a\004\00b\004\00c\004\00d\004\00e\004\00f\005\000\005\001\005\002\005\003\005\004\005\005\005\006\005\007\005\008\005\009\005\00a\005\00b\005\00c\005\00d\005\00e\005\00f\006\000\006\001\006\002\006\003\006\004\006\005\006\006\006\007\006\008\006\009\006\00a\006\00b\006\00c\006\00d\006\00e\006\00f\007\000\007\001\007\002\007\003\007\004\007\005\007\006\007\007\007\008\007\009\007\00a\007\00b\007\00c\007\00d\007\00e\007\00f\008\000\008\001\008\002\008\003\008\004\008\005\008\006\008\007\008\008\008\009\008\00a\008\00b\008\00c\008\00d\008\00e\008\00f\009\000\009\001\009\002\009\003\009\004\009\005\009\006\009\007\009\008\009\009\009\00a\009\00b\009\00c\009\00d\009\00e\009\00f\00a\000\00a\001\00a\002\00a\003\00a\004\00a\005\00a\006\00a\007\00a\008\00a\009\00a\00a\00a\00b\00a\00c\00a\00d\00a\00e\00a\00f\00b\000\00b\001\00b\002\00b\003\00b\004\00b\005\00b\006\00b\007\00b\008\00b\009\00b\00a\00b\00b\00b\00c\00b\00d\00b\00e\00b\00f\00c\000\00c\001\00c\002\00c\003\00c\004\00c\005\00c\006\00c\007\00c\008\00c\009\00c\00a\00c\00b\00c\00c\00c\00d\00c\00e\00c\00f\00d\000\00d\001\00d\002\00d\003\00d\004\00d\005\00d\006\00d\007\00d\008\00d\009\00d\00a\00d\00b\00d\00c\00d\00d\00d\00e\00d\00f\00e\000\00e\001\00e\002\00e\003\00e\004\00e\005\00e\006\00e\007\00e\008\00e\009\00e\00a\00e\00b\00e\00c\00e\00d\00e\00e\00e\00f\00f\000\00f\001\00f\002\00f\003\00f\004\00f\005\00f\006\00f\007\00f\008\00f\009\00f\00a\00f\00b\00f\00c\00f\00d\00f\00e\00f\00f")
 (data (i32.const 4012) "\\")
 (data (i32.const 4024) "\01\00\00\00H\00\00\000\001\002\003\004\005\006\007\008\009\00a\00b\00c\00d\00e\00f\00g\00h\00i\00j\00k\00l\00m\00n\00o\00p\00q\00r\00s\00t\00u\00v\00w\00x\00y\00z")
 (data (i32.const 4108) ",")
 (data (i32.const 4120) "\01\00\00\00\16\00\00\00 \00-\00 \001\00.\002\005\00 \00-\00>\00 ")
 (data (i32.const 4156) "\1c")
 (data (i32.const 4168) "\06\00\00\00\0c\00\00\00 \10\00\00\00\00\00\00`\06")
 (data (i32.const 4188) "\1c")
 (data (i32.const 4200) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00`\06")
 (data (i32.const 4220) "\1c")
 (data (i32.const 4232) "\01\00\00\00\06\00\00\000\00.\000")
 (data (i32.const 4252) "\1c")
 (data (i32.const 4264) "\01\00\00\00\06\00\00\00N\00a\00N")
 (data (i32.const 4284) ",")
 (data (i32.const 4296) "\01\00\00\00\12\00\00\00-\00I\00n\00f\00i\00n\00i\00t\00y")
 (data (i32.const 4332) ",")
 (data (i32.const 4344) "\01\00\00\00\10\00\00\00I\00n\00f\00i\00n\00i\00t\00y")
 (data (i32.const 4440) "\88\02\1c\08\a0\d5\8f\fav\bf>\a2\7f\e1\ae\bav\acU0 \fb\16\8b\ea5\ce]J\89B\cf-;eU\aa\b0k\9a\dfE\1a=\03\cf\1a\e6\ca\c6\9a\c7\17\fep\abO\dc\bc\be\fc\b1w\ff\0c\d6kA\ef\91V\be<\fc\7f\90\ad\1f\d0\8d\83\9aU1(\\Q\d3\b5\c9\a6\ad\8f\acq\9d\cb\8b\ee#w\"\9c\eamSx@\91I\cc\aeW\ce\b6]y\12<\827V\fbM6\94\10\c2O\98H8o\ea\96\90\c7:\82%\cb\85t\d7\f4\97\bf\97\cd\cf\86\a0\e5\ac*\17\98\n4\ef\8e\b25*\fbg8\b2;?\c6\d2\df\d4\c8\84\ba\cd\d3\1a\'D\dd\c5\96\c9%\bb\ce\9fk\93\84\a5b}$l\ac\db\f6\da_\0dXf\ab\a3&\f1\c3\de\93\f8\e2\f3\b8\80\ff\aa\a8\ad\b5\b5\8bJ|l\05_b\87S0\c14`\ff\bc\c9U&\ba\91\8c\85N\96\bd~)p$w\f9\df\8f\b8\e5\b8\9f\bd\df\a6\94}t\88\cf_\a9\f8\cf\9b\a8\8f\93pD\b9k\15\0f\bf\f8\f0\08\8a\b611eU%\b0\cd\ac\7f{\d0\c6\e2?\99\06;+*\c4\10\\\e4\d3\92si\99$$\aa\0e\ca\00\83\f2\b5\87\fd\eb\1a\11\92d\08\e5\bc\cc\88Po\t\cc\bc\8c,e\19\e2X\17\b7\d1\00\00\00\00\00\00@\9c\00\00\00\00\10\a5\d4\e8\00\00b\ac\c5\ebx\ad\84\t\94\f8x9?\81\b3\15\07\c9{\ce\97\c0p\\\ea{\ce2~\8fh\80\e9\ab\a48\d2\d5E\"\9a\17&\'O\9f\'\fb\c4\d41\a2c\ed\a8\ad\c8\8c8e\de\b0\dbe\ab\1a\8e\08\c7\83\9a\1dqB\f9\1d]\c4X\e7\1b\a6,iM\92\ea\8dp\1ad\ee\01\daJw\ef\9a\99\a3m\a2\85k}\b4{x\t\f2w\18\ddy\a1\e4T\b4\c2\c5\9b[\92\86[\86=]\96\c8\c5S5\c8\b3\a0\97\fa\\\b4*\95\e3_\a0\99\bd\9fF\de%\8c9\db4\c2\9b\a5\\\9f\98\a3r\9a\c6\f6\ce\be\e9TS\bf\dc\b7\e2A\"\f2\17\f3\fc\88\a5x\\\d3\9b\ce \cc\dfS!{\f3Z\16\98:0\1f\97\dc\b5\a0\e2\96\b3\e3\\S\d1\d9\a8<D\a7\a4\d9|\9b\fb\10D\a4\a7LLv\bb\1a\9c@\b6\ef\8e\ab\8b,\84W\a6\10\ef\1f\d0)1\91\e9\e5\a4\10\9b\9d\0c\9c\a1\fb\9b\10\e7)\f4;b\d9 (\ac\85\cf\a7z^KD\80-\dd\ac\03@\e4!\bf\8f\ffD^/\9cg\8eA\b8\8c\9c\9d\173\d4\a9\1b\e3\b4\92\db\19\9e\d9w\df\ban\bf\96\ebk\ee\f0\9b;\02\87\af")
 (data (i32.const 5136) "<\fbW\fbr\fb\8c\fb\a7\fb\c1\fb\dc\fb\f6\fb\11\fc,\fcF\fca\fc{\fc\96\fc\b1\fc\cb\fc\e6\fc\00\fd\1b\fd5\fdP\fdk\fd\85\fd\a0\fd\ba\fd\d5\fd\ef\fd\n\fe%\fe?\feZ\fet\fe\8f\fe\a9\fe\c4\fe\df\fe\f9\fe\14\ff.\ffI\ffc\ff~\ff\99\ff\b3\ff\ce\ff\e8\ff\03\00\1e\008\00S\00m\00\88\00\a2\00\bd\00\d8\00\f2\00\0d\01\'\01B\01\\\01w\01\92\01\ac\01\c7\01\e1\01\fc\01\16\021\02L\02f\02\81\02\9b\02\b6\02\d0\02\eb\02\06\03 \03;\03U\03p\03\8b\03\a5\03\c0\03\da\03\f5\03\0f\04*\04")
 (data (i32.const 5312) "\01\00\00\00\n\00\00\00d\00\00\00\e8\03\00\00\10\'\00\00\a0\86\01\00@B\0f\00\80\96\98\00\00\e1\f5\05\00\ca\9a;")
 (data (i32.const 5356) "\\")
 (data (i32.const 5368) "\01\00\00\00L\00\00\00\n\00S\00e\00r\00i\00a\00l\00i\00z\00e\00 \00B\00o\00o\00l\00e\00a\00n\00:\00\n\00> > > > > > > > > > > > > > > > > > ")
 (data (i32.const 5452) ",")
 (data (i32.const 5464) "\01\00\00\00\16\00\00\00 \00-\00 \00t\00r\00u\00e\00 \00-\00>\00 ")
 (data (i32.const 5500) "\1c")
 (data (i32.const 5512) "\06\00\00\00\0c\00\00\00`\15\00\00\00\00\00\00`\06")
 (data (i32.const 5532) "\1c")
 (data (i32.const 5544) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00`\06")
 (data (i32.const 5564) "\1c")
 (data (i32.const 5576) "\01\00\00\00\08\00\00\00t\00r\00u\00e")
 (data (i32.const 5596) "\1c")
 (data (i32.const 5608) "\01\00\00\00\n\00\00\00f\00a\00l\00s\00e")
 (data (i32.const 5628) ",")
 (data (i32.const 5640) "\01\00\00\00\18\00\00\00 \00-\00 \00f\00a\00l\00s\00e\00 \00-\00>\00 ")
 (data (i32.const 5676) "\1c")
 (data (i32.const 5688) "\06\00\00\00\0c\00\00\00\10\16\00\00\00\00\00\00`\06")
 (data (i32.const 5708) "\\")
 (data (i32.const 5720) "\01\00\00\00D\00\00\00\n\00S\00e\00r\00i\00a\00l\00i\00z\00e\00 \00A\00r\00r\00a\00y\00:\00\n\00> > > > > > > > > > > > > > > > ")
 (data (i32.const 5804) "L")
 (data (i32.const 5816) "\01\00\00\002\00\00\00 \00-\00 \00[\00\"\00h\00e\00l\00l\00o\00\"\00,\00 \00\"\00w\00o\00r\00l\00d\00\"\00]\00 \00-\00>\00 ")
 (data (i32.const 5884) "\1c")
 (data (i32.const 5896) "\01\00\00\00\02\00\00\00\n")
 (data (i32.const 5916) "\1c")
 (data (i32.const 5928) "\06\00\00\00\0c\00\00\00\c0\16\00\00\00\00\00\00\10\17")
 (data (i32.const 5948) "\1c")
 (data (i32.const 5960) "\01\00\00\00\n\00\00\00h\00e\00l\00l\00o")
 (data (i32.const 5980) "\1c")
 (data (i32.const 5996) "\08\00\00\00P\17\00\00@\04")
 (data (i32.const 6012) "\1c")
 (data (i32.const 6024) "\01\00\00\00\02\00\00\00[")
 (data (i32.const 6044) "\1c")
 (data (i32.const 6056) "\01\00\00\00\02\00\00\00,")
 (data (i32.const 6076) "\1c")
 (data (i32.const 6088) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\b0\17")
 (data (i32.const 6108) "\1c")
 (data (i32.const 6120) "\01\00\00\00\02\00\00\00]")
 (data (i32.const 6140) "\1c")
 (data (i32.const 6152) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\f0\17")
 (data (i32.const 6172) "\\")
 (data (i32.const 6184) "\01\00\00\00B\00\00\00 \00-\00 \00[\00[\00\"\00p\00e\00r\00s\00o\00n\001\00\"\00]\00,\00 \00[\00\"\00p\00e\00r\00s\00o\00n\002\00\"\00]\00]\00 \00-\00>\00 ")
 (data (i32.const 6268) "\1c")
 (data (i32.const 6280) "\06\00\00\00\0c\00\00\000\18\00\00\00\00\00\00\10\17")
 (data (i32.const 6300) ",")
 (data (i32.const 6312) "\01\00\00\00\0e\00\00\00p\00e\00r\00s\00o\00n\001")
 (data (i32.const 6348) "\1c")
 (data (i32.const 6364) "\04\00\00\00\b0\18")
 (data (i32.const 6380) ",")
 (data (i32.const 6392) "\01\00\00\00\0e\00\00\00p\00e\00r\00s\00o\00n\002")
 (data (i32.const 6428) "\1c")
 (data (i32.const 6444) "\04\00\00\00\00\19")
 (data (i32.const 6460) "\1c")
 (data (i32.const 6472) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\b0\17")
 (data (i32.const 6492) "\1c")
 (data (i32.const 6504) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\f0\17")
 (data (i32.const 6524) "|")
 (data (i32.const 6536) "\01\00\00\00^\00\00\00 \00-\00 \00[\00[\00\"\00k\00e\00y\001\00\"\00,\00 \00\"\00v\00a\00l\00u\00e\001\00\"\00]\00,\00 \00[\00\"\00k\00e\00y\002\00\"\00,\00 \00\"\00v\00a\00l\00u\00e\002\00\"\00]\00]\00 \00-\00>\00 ")
 (data (i32.const 6652) "\1c")
 (data (i32.const 6664) "\06\00\00\00\0c\00\00\00\90\19\00\00\00\00\00\00\10\17")
 (data (i32.const 6684) "\1c")
 (data (i32.const 6696) "\01\00\00\00\08\00\00\00k\00e\00y\001")
 (data (i32.const 6716) "\1c")
 (data (i32.const 6728) "\01\00\00\00\0c\00\00\00v\00a\00l\00u\00e\001")
 (data (i32.const 6748) "\1c")
 (data (i32.const 6764) "\08\00\00\000\1a\00\00P\1a")
 (data (i32.const 6780) "\1c")
 (data (i32.const 6792) "\01\00\00\00\08\00\00\00k\00e\00y\002")
 (data (i32.const 6812) "\1c")
 (data (i32.const 6824) "\01\00\00\00\0c\00\00\00v\00a\00l\00u\00e\002")
 (data (i32.const 6844) "\1c")
 (data (i32.const 6860) "\08\00\00\00\90\1a\00\00\b0\1a")
 (data (i32.const 6876) "\ac")
 (data (i32.const 6888) "\01\00\00\00\92\00\00\00 \00-\00 \00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00 \00\"\00K\00i\00n\00g\00 \00O\00f\00 \00T\00h\00e\00 \00M\00o\00u\00n\00t\00a\00i\00n\00 \00A\00r\00r\00a\00y\00 \00=\d8Q\dc \00\"\00 \00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00 \00-\00>\00 ")
 (data (i32.const 7052) "\1c")
 (data (i32.const 7064) "\06\00\00\00\0c\00\00\00\f0\1a\00\00\00\00\00\00\10\17")
 (data (i32.const 7084) "L")
 (data (i32.const 7096) "\01\00\00\00<\00\00\00K\00i\00n\00g\00 \00O\00f\00 \00T\00h\00e\00 \00M\00o\00u\00n\00t\00a\00i\00n\00 \00A\00r\00r\00a\00y\00 \00=\d8Q\dc ")
 (data (i32.const 7164) "\1c")
 (data (i32.const 7180) "\04\00\00\00\c0\1b")
 (data (i32.const 7196) "\1c")
 (data (i32.const 7208) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\b0\17")
 (data (i32.const 7228) "\1c")
 (data (i32.const 7240) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\b0\17")
 (data (i32.const 7260) "\1c")
 (data (i32.const 7272) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\b0\17")
 (data (i32.const 7292) "\1c")
 (data (i32.const 7304) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\b0\17")
 (data (i32.const 7324) "\1c")
 (data (i32.const 7336) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\b0\17")
 (data (i32.const 7356) "\1c")
 (data (i32.const 7368) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\b0\17")
 (data (i32.const 7388) "\1c")
 (data (i32.const 7400) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\b0\17")
 (data (i32.const 7420) "\1c")
 (data (i32.const 7432) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\b0\17")
 (data (i32.const 7452) "\1c")
 (data (i32.const 7464) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\b0\17")
 (data (i32.const 7484) "\1c")
 (data (i32.const 7496) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\b0\17")
 (data (i32.const 7516) "\1c")
 (data (i32.const 7528) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\b0\17")
 (data (i32.const 7548) "\1c")
 (data (i32.const 7560) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\b0\17")
 (data (i32.const 7580) "\1c")
 (data (i32.const 7592) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\b0\17")
 (data (i32.const 7612) "\1c")
 (data (i32.const 7624) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\b0\17")
 (data (i32.const 7644) "\1c")
 (data (i32.const 7656) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\f0\17")
 (data (i32.const 7676) "\1c")
 (data (i32.const 7688) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\f0\17")
 (data (i32.const 7708) "\1c")
 (data (i32.const 7720) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\f0\17")
 (data (i32.const 7740) "\1c")
 (data (i32.const 7752) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\f0\17")
 (data (i32.const 7772) "\1c")
 (data (i32.const 7784) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\f0\17")
 (data (i32.const 7804) "\1c")
 (data (i32.const 7816) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\f0\17")
 (data (i32.const 7836) "\1c")
 (data (i32.const 7848) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\f0\17")
 (data (i32.const 7868) "\1c")
 (data (i32.const 7880) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\f0\17")
 (data (i32.const 7900) "\1c")
 (data (i32.const 7912) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\f0\17")
 (data (i32.const 7932) "\1c")
 (data (i32.const 7944) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\f0\17")
 (data (i32.const 7964) "\1c")
 (data (i32.const 7976) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\f0\17")
 (data (i32.const 7996) "\1c")
 (data (i32.const 8008) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\f0\17")
 (data (i32.const 8028) "\1c")
 (data (i32.const 8040) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\f0\17")
 (data (i32.const 8060) "\1c")
 (data (i32.const 8072) "\06\00\00\00\0c\00\00\00`\06\00\00\00\00\00\00\f0\17")
 (data (i32.const 8092) "\\")
 (data (i32.const 8104) "\01\00\00\00H\00\00\00\n\00S\00e\00r\00i\00a\00l\00i\00z\00e\00 \00O\00b\00j\00e\00c\00t\00:\00\n\00> > > > > > > > > > > > > > > > > ")
 (data (i32.const 8188) "L")
 (data (i32.const 8200) "\01\00\00\002\00\00\00 \00-\00 \00{\00 \00h\00e\00l\00l\00o\00:\00 \00\"\00w\00o\00r\00l\00d\00\"\00 \00}\00 \00-\00>\00 ")
 (data (i32.const 8268) "\1c")
 (data (i32.const 8280) "\06\00\00\00\0c\00\00\00\10 \00\00\00\00\00\00\10\17")
 (data (i32.const 8300) "\1c")
 (data (i32.const 8312) "\01\00\00\00\02\00\00\00:")
 (data (i32.const 8332) "\1c")
 (data (i32.const 8344) "\01\00\00\00\02\00\00\00{")
 (data (i32.const 8364) "\1c")
 (data (i32.const 8376) "\01\00\00\00\02\00\00\00}")
 (data (i32.const 8396) "\1c")
 (data (i32.const 8408) "\06\00\00\00\0c\00\00\00\a0 \00\00\00\00\00\00\c0 ")
 (data (i32.const 8428) "\\")
 (data (i32.const 8440) "\01\00\00\00D\00\00\00 \00-\00 \00{\00 \00n\00a\00m\00e\00:\00 \00\'\00J\00a\00i\00r\00u\00s\00\'\00,\00 \00a\00g\00e\00:\00 \001\004\00 \00}\00 \00-\00>\00 ")
 (data (i32.const 8524) "\1c")
 (data (i32.const 8536) "\06\00\00\00\0c\00\00\00\00!\00\00\00\00\00\00\10\17")
 (data (i32.const 8556) "\1c")
 (data (i32.const 8568) "\01\00\00\00\08\00\00\00n\00a\00m\00e")
 (data (i32.const 8588) "\1c")
 (data (i32.const 8600) "\01\00\00\00\06\00\00\00a\00g\00e")
 (data (i32.const 8620) "\1c")
 (data (i32.const 8632) "\06\00\00\00\0c\00\00\00\a0 \00\00\00\00\00\00\c0 ")
 (data (i32.const 8652) "L")
 (data (i32.const 8664) "\01\00\00\004\00\00\00C\00h\00e\00c\00k\00i\00n\00g\00 \00D\00e\00s\00e\00r\00i\00a\00l\00i\00z\00a\00t\00i\00o\00n\00\n\00\n")
 (data (i32.const 8732) "l")
 (data (i32.const 8744) "\01\00\00\00P\00\00\00\n\00D\00e\00s\00e\00r\00i\00a\00l\00i\00z\00e\00 \00S\00t\00r\00i\00n\00g\00:\00\n\00> > > > > > > > > > > > > > > > > > > ")
 (data (i32.const 8844) "\1c")
 (data (i32.const 8856) "\01\00\00\00\06\00\00\00 \00-\00 ")
 (data (i32.const 8876) "<")
 (data (i32.const 8888) "\01\00\00\00\"\00\00\00 \00-\00>\00 \00\"\00H\00e\00l\00l\00o\00 \00W\00o\00r\00l\00d\00\"")
 (data (i32.const 8940) "\1c")
 (data (i32.const 8952) "\06\00\00\00\0c\00\00\00\a0\"\00\00\00\00\00\00\c0\"")
 (data (i32.const 8972) ",")
 (data (i32.const 8984) "\01\00\00\00\1a\00\00\00\"\00H\00e\00l\00l\00o\00 \00W\00o\00r\00l\00d\00\"")
 (data (i32.const 9020) "<")
 (data (i32.const 9032) "\01\00\00\00\"\00\00\00 \00-\00>\00\"\00H\00e\00l\00l\00o\00 \00W\00o\00\"\00r\00l\00d\00\"")
 (data (i32.const 9084) "\1c")
 (data (i32.const 9096) "\06\00\00\00\0c\00\00\00\a0\"\00\00\00\00\00\00P#")
 (data (i32.const 9116) "<")
 (data (i32.const 9128) "\01\00\00\00\1e\00\00\00\"\00H\00e\00l\00l\00o\00 \00W\00o\00\\\00\"\00r\00l\00d\00\"")
 (data (i32.const 9180) "l")
 (data (i32.const 9192) "\01\00\00\00P\00\00\00\n\00D\00e\00s\00e\00r\00i\00a\00l\00i\00z\00e\00 \00N\00u\00m\00b\00e\00r\00:\00\n\00> > > > > > > > > > > > > > > > > > > ")
 (data (i32.const 9292) ",")
 (data (i32.const 9304) "\01\00\00\00\0e\00\00\00 \00-\00>\00 \001\002\003")
 (data (i32.const 9340) "\1c")
 (data (i32.const 9352) "\06\00\00\00\0c\00\00\00\a0\"\00\00\00\00\00\00`$")
 (data (i32.const 9372) "\1c")
 (data (i32.const 9384) "\01\00\00\00\06\00\00\001\002\003")
 (data (i32.const 9404) ",")
 (data (i32.const 9416) "\01\00\00\00\10\00\00\00 \00-\00>\00 \001\00.\002\005")
 (data (i32.const 9452) "\1c")
 (data (i32.const 9464) "\06\00\00\00\0c\00\00\00\a0\"\00\00\00\00\00\00\d0$")
 (data (i32.const 9484) "\1c")
 (data (i32.const 9496) "\01\00\00\00\08\00\00\001\00.\002\005")
 (data (i32.const 9526) "\f0?\00\00\00\00\00\00$@\00\00\00\00\00\00Y@\00\00\00\00\00@\8f@\00\00\00\00\00\88\c3@\00\00\00\00\00j\f8@\00\00\00\00\80\84.A\00\00\00\00\d0\12cA\00\00\00\00\84\d7\97A\00\00\00\00e\cd\cdA\00\00\00 _\a0\02B\00\00\00\e8vH7B\00\00\00\a2\94\1amB\00\00@\e5\9c0\a2B\00\00\90\1e\c4\bc\d6B\00\004&\f5k\0cC\00\80\e07y\c3AC\00\a0\d8\85W4vC\00\c8Ngm\c1\abC\00=\91`\e4X\e1C@\8c\b5x\1d\af\15DP\ef\e2\d6\e4\1aKD\92\d5M\06\cf\f0\80D")
 (data (i32.const 9708) "l")
 (data (i32.const 9720) "\01\00\00\00T\00\00\00\n\00D\00e\00s\00e\00r\00i\00a\00l\00i\00z\00e\00 \00B\00o\00o\00l\00e\00a\00n\00:\00\n\00> > > > > > > > > > > > > > > > > > > > ")
 (data (i32.const 9820) ",")
 (data (i32.const 9832) "\01\00\00\00\12\00\00\00 \00-\00>\00 \00 \00t\00r\00u\00e")
 (data (i32.const 9868) "\1c")
 (data (i32.const 9880) "\06\00\00\00\0c\00\00\00\a0\"\00\00\00\00\00\00p&")
 (data (i32.const 9900) ",")
 (data (i32.const 9912) "\01\00\00\00\12\00\00\00 \00-\00>\00 \00f\00a\00l\00s\00e")
 (data (i32.const 9948) "\1c")
 (data (i32.const 9960) "\06\00\00\00\0c\00\00\00\a0\"\00\00\00\00\00\00\c0&")
 (data (i32.const 9980) "\\")
 (data (i32.const 9992) "\01\00\00\00L\00\00\00\n\00D\00e\00s\00e\00r\00i\00a\00l\00i\00z\00e\00 \00A\00r\00r\00a\00y\00:\00\n\00> > > > > > > > > > > > > > > > > > ")
 (data (i32.const 10076) "<")
 (data (i32.const 10088) "\01\00\00\00\"\00\00\00[\00\"\00h\00e\00l\00l\00o\00\"\00,\00\"\00w\00o\00r\00l\00d\00\"\00]")
 (data (i32.const 10140) ",")
 (data (i32.const 10152) "\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h")
 (data (i32.const 10188) ",")
 (data (i32.const 10200) "\01\00\00\00\1a\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00.\00t\00s")
 (data (i32.const 10236) "\1c")
 (data (i32.const 10248) "\01\00\00\00\04\00\00\00\\\00\"")
 (data (i32.const 10268) "l")
 (data (i32.const 10280) "\01\00\00\00V\00\00\00 \00-\00 \00[\00\"\00h\00e\00l\00l\00o\00\"\00,\00\"\00w\00o\00r\00l\00d\00\"\00]\00 \00-\00>\00 \00[\00\"\00h\00e\00l\00l\00o\00\"\00,\00 \00\"\00w\00o\00r\00l\00d\00\"\00]\00\n")
 (data (i32.const 10380) "L")
 (data (i32.const 10392) "\01\00\00\002\00\00\00[\00[\00\"\00p\00e\00r\00s\00o\00n\001\00\"\00]\00,\00[\00\"\00p\00e\00r\00s\00o\00n\002\00\"\00]\00]")
 (data (i32.const 10460) "\8c")
 (data (i32.const 10472) "\01\00\00\00v\00\00\00 \00-\00 \00[\00[\00\"\00p\00e\00r\00s\00o\00n\001\00\"\00]\00,\00[\00\"\00p\00e\00r\00s\00o\00n\002\00\"\00]\00]\00 \00-\00>\00 \00[\00[\00\"\00p\00e\00r\00s\00o\00n\001\00\"\00]\00,\00 \00[\00\"\00p\00e\00r\00s\00o\00n\002\00\"\00]\00]\00\n")
 (data (i32.const 10604) "\\")
 (data (i32.const 10616) "\01\00\00\00J\00\00\00[\00[\00\"\00k\00e\00y\001\00\"\00,\00\"\00v\00a\00l\00u\00e\001\00\"\00]\00,\00[\00\"\00k\00e\00y\002\00\"\00,\00\"\00v\00a\00l\00u\00e\002\00\"\00]\00]")
 (data (i32.const 10700) "\bc")
 (data (i32.const 10712) "\01\00\00\00\aa\00\00\00 \00-\00 \00[\00[\00\"\00k\00e\00y\001\00\"\00,\00\"\00v\00a\00l\00u\00e\001\00\"\00]\00,\00[\00\"\00k\00e\00y\002\00\"\00,\00\"\00v\00a\00l\00u\00e\002\00\"\00]\00]\00 \00-\00>\00 \00[\00[\00\"\00k\00e\00y\001\00\"\00,\00 \00\"\00v\00a\00l\00u\00e\001\00\"\00]\00,\00 \00[\00\"\00k\00e\00y\002\00\"\00,\00 \00\"\00v\00a\00l\00u\00e\002\00\"\00]\00]\00\n")
 (data (i32.const 10892) "\9c")
 (data (i32.const 10904) "\01\00\00\00\84\00\00\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00 \00\"\00K\00i\00n\00g\00 \00O\00f\00 \00T\00h\00e\00 \00M\00o\00u\00n\00t\00a\00i\00n\00 \00A\00r\00r\00a\00y\00 \00=\d8Q\dc \00\"\00 \00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]")
 (data (i32.const 11052) ",\01")
 (data (i32.const 11064) "\01\00\00\00\10\01\00\00 \00-\00 \00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00\"\00K\00i\00n\00g\00 \00O\00f\00 \00T\00h\00e\00 \00M\00o\00u\00n\00t\00a\00i\00n\00 \00A\00r\00r\00a\00y\00 \00=\d8Q\dc \00\"\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00 \00-\00>\00 \00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00[\00\"\00K\00i\00n\00g\00 \00O\00f\00 \00T\00h\00e\00 \00M\00o\00u\00n\00t\00a\00i\00n\00 \00A\00r\00r\00a\00y\00 \00=\d8Q\dc \00\"\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00]\00\n")
 (data (i32.const 11356) "l")
 (data (i32.const 11368) "\01\00\00\00P\00\00\00\n\00D\00e\00s\00e\00r\00i\00a\00l\00i\00z\00e\00 \00O\00b\00j\00e\00c\00t\00:\00\n\00> > > > > > > > > > > > > > > > > > > ")
 (data (i32.const 11468) "<")
 (data (i32.const 11480) "\01\00\00\00\"\00\00\00{\00\"\00h\00e\00l\00l\00o\00\"\00:\00\"\00w\00o\00r\00l\00d\00\"\00}")
 (data (i32.const 11532) "|")
 (data (i32.const 11544) "\01\00\00\00^\00\00\00E\00l\00e\00m\00e\00n\00t\00 \00t\00y\00p\00e\00 \00m\00u\00s\00t\00 \00b\00e\00 \00n\00u\00l\00l\00a\00b\00l\00e\00 \00i\00f\00 \00a\00r\00r\00a\00y\00 \00i\00s\00 \00h\00o\00l\00e\00y")
 (data (i32.const 11660) "l")
 (data (i32.const 11672) "\01\00\00\00V\00\00\00 \00-\00 \00{\00\"\00h\00e\00l\00l\00o\00\"\00:\00\"\00w\00o\00r\00l\00d\00\"\00}\00 \00-\00>\00 \00{\00 \00h\00e\00l\00l\00o\00:\00 \00\"\00w\00o\00r\00l\00d\00\"\00 \00}\00\n")
 (data (i32.const 11772) "L")
 (data (i32.const 11784) "\01\00\00\004\00\00\00{\00\"\00n\00a\00m\00e\00\"\00:\00\"\00J\00a\00i\00r\00u\00s\00\"\00,\00\"\00a\00g\00e\00\"\00:\001\004\00}")
 (data (i32.const 11852) "\8c")
 (data (i32.const 11864) "\01\00\00\00z\00\00\00 \00-\00 \00{\00\"\00n\00a\00m\00e\00\"\00:\00\"\00J\00a\00i\00r\00u\00s\00\"\00,\00\"\00a\00g\00e\00\"\00:\001\004\00}\00 \00-\00>\00 \00{\00 \00n\00a\00m\00e\00:\00 \00\'\00J\00a\00i\00r\00u\00s\00\'\00,\00 \00a\00g\00e\00:\00 \001\004\00 \00}\00\n")
 (data (i32.const 11996) "<")
 (data (i32.const 12008) "\01\00\00\00*\00\00\00O\00b\00j\00e\00c\00t\00 \00a\00l\00r\00e\00a\00d\00y\00 \00p\00i\00n\00n\00e\00d")
 (data (i32.const 12060) "<")
 (data (i32.const 12072) "\01\00\00\00(\00\00\00O\00b\00j\00e\00c\00t\00 \00i\00s\00 \00n\00o\00t\00 \00p\00i\00n\00n\00e\00d")
 (data (i32.const 12128) "\19\00\00\00 \00\00\00\00\00\00\00 ")
 (data (i32.const 12180) "\04A\00\00\00\00\00\00\02A\00\00\00\00\00\00\02\t\00\00\00\00\00\00\02A\00\00\00\00\00\00\02A\00\00\00\00\00\00\02A\00\00\00\00\00\00\02A\00\00\00\00\00\00\02A\00\00\00\00\00\00\02A\00\00\00\00\00\00\02A\00\00\00\00\00\00\02A\00\00\00\00\00\00\02A\00\00\00\00\00\00\02A\00\00\00\00\00\00\02A\00\00\00\00\00\00\02A\00\00\00\00\00\00\02A\00\00\00\00\00\00\02A\00\00\00\00\00\00\02A\00\00\00\00\00\00\02A")
 (export "__new" (func $~lib/rt/itcms/__new))
 (export "__pin" (func $~lib/rt/itcms/__pin))
 (export "__unpin" (func $~lib/rt/itcms/__unpin))
 (export "__collect" (func $~lib/rt/itcms/__collect))
 (export "__rtti_base" (global $~lib/rt/__rtti_base))
 (export "memory" (memory $0))
 (export "_start" (func $~start))
 (func $~lib/rt/itcms/Object#unlink (param $0 i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.const -4
  i32.and
  local.tee $1
  i32.eqz
  if
   i32.const 0
   local.get $0
   i32.const 28716
   i32.lt_u
   local.get $0
   i32.load offset=8
   select
   i32.eqz
   if
    i32.const 0
    i32.const 1120
    i32.const 127
    i32.const 18
    call $~lib/builtins/abort
    unreachable
   end
   return
  end
  local.get $0
  i32.load offset=8
  local.tee $0
  i32.eqz
  if
   i32.const 0
   i32.const 1120
   i32.const 131
   i32.const 16
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $0
  i32.store offset=8
  local.get $0
  local.get $1
  local.get $0
  i32.load offset=4
  i32.const 3
  i32.and
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/itcms/Object#makeGray (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  global.get $~lib/rt/itcms/iter
  i32.eq
  if
   local.get $0
   i32.load offset=8
   local.tee $1
   i32.eqz
   if
    i32.const 0
    i32.const 1120
    i32.const 147
    i32.const 30
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   global.set $~lib/rt/itcms/iter
  end
  local.get $0
  call $~lib/rt/itcms/Object#unlink
  global.get $~lib/rt/itcms/toSpace
  local.set $2
  local.get $0
  i32.load offset=12
  local.tee $1
  i32.const 1
  i32.le_u
  if (result i32)
   i32.const 1
  else
   local.get $1
   i32.const 12128
   i32.load
   i32.gt_u
   if
    i32.const 1216
    i32.const 1280
    i32.const 22
    i32.const 28
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   i32.const 3
   i32.shl
   i32.const 12132
   i32.add
   i32.load
   i32.const 32
   i32.and
  end
  if (result i32)
   global.get $~lib/rt/itcms/white
   i32.eqz
  else
   i32.const 2
  end
  local.set $3
  local.get $2
  i32.load offset=8
  local.set $1
  local.get $0
  local.get $2
  local.get $3
  i32.or
  i32.store offset=4
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $1
  local.get $0
  local.get $1
  i32.load offset=4
  i32.const 3
  i32.and
  i32.or
  i32.store offset=4
  local.get $2
  local.get $0
  i32.store offset=8
 )
 (func $~lib/rt/itcms/__link (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $1
  i32.eqz
  if
   return
  end
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 1120
   i32.const 294
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/white
  local.get $1
  i32.const 20
  i32.sub
  local.tee $1
  i32.load offset=4
  i32.const 3
  i32.and
  i32.eq
  if
   local.get $0
   i32.const 20
   i32.sub
   local.tee $0
   i32.load offset=4
   i32.const 3
   i32.and
   local.tee $3
   global.get $~lib/rt/itcms/white
   i32.eqz
   i32.eq
   if
    local.get $2
    if
     local.get $0
     call $~lib/rt/itcms/Object#makeGray
    else
     local.get $1
     call $~lib/rt/itcms/Object#makeGray
    end
   else
    global.get $~lib/rt/itcms/state
    i32.const 1
    i32.eq
    i32.const 0
    local.get $3
    i32.const 3
    i32.eq
    select
    if
     local.get $1
     call $~lib/rt/itcms/Object#makeGray
    end
   end
  end
 )
 (func $~lib/rt/itcms/visitRoots
  (local $0 i32)
  (local $1 i32)
  global.get $assembly/test/helloworld
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $assembly/test/nameage
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  i32.const 1216
  call $~lib/rt/itcms/__visit
  i32.const 10160
  call $~lib/rt/itcms/__visit
  i32.const 11552
  call $~lib/rt/itcms/__visit
  i32.const 1328
  call $~lib/rt/itcms/__visit
  i32.const 12016
  call $~lib/rt/itcms/__visit
  i32.const 12080
  call $~lib/rt/itcms/__visit
  i32.const 2976
  call $~lib/rt/itcms/__visit
  i32.const 4032
  call $~lib/rt/itcms/__visit
  i32.const 1056
  call $~lib/rt/itcms/__visit
  global.get $~lib/rt/itcms/pinSpace
  local.tee $1
  i32.load offset=4
  i32.const -4
  i32.and
  local.set $0
  loop $while-continue|0
   local.get $0
   local.get $1
   i32.ne
   if
    local.get $0
    i32.load offset=4
    i32.const 3
    i32.and
    i32.const 3
    i32.ne
    if
     i32.const 0
     i32.const 1120
     i32.const 159
     i32.const 16
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    i32.const 20
    i32.add
    call $~lib/rt/__visit_members
    local.get $0
    i32.load offset=4
    i32.const -4
    i32.and
    local.set $0
    br $while-continue|0
   end
  end
 )
 (func $~lib/rt/itcms/__visit (param $0 i32)
  local.get $0
  i32.eqz
  if
   return
  end
  global.get $~lib/rt/itcms/white
  local.get $0
  i32.const 20
  i32.sub
  local.tee $0
  i32.load offset=4
  i32.const 3
  i32.and
  i32.eq
  if
   local.get $0
   call $~lib/rt/itcms/Object#makeGray
   global.get $~lib/rt/itcms/visitCount
   i32.const 1
   i32.add
   global.set $~lib/rt/itcms/visitCount
  end
 )
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1456
   i32.const 268
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const -4
  i32.and
  local.tee $2
  i32.const 12
  i32.lt_u
  if
   i32.const 0
   i32.const 1456
   i32.const 270
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const 256
  i32.lt_u
  if
   local.get $2
   i32.const 4
   i32.shr_u
   local.set $2
  else
   i32.const 31
   local.get $2
   i32.const 1073741820
   local.get $2
   i32.const 1073741820
   i32.lt_u
   select
   local.tee $2
   i32.clz
   i32.sub
   local.set $3
   local.get $2
   local.get $3
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $2
   local.get $3
   i32.const 7
   i32.sub
   local.set $3
  end
  local.get $2
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $3
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1456
   i32.const 284
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load offset=8
  local.set $4
  local.get $1
  i32.load offset=4
  local.tee $5
  if
   local.get $5
   local.get $4
   i32.store offset=8
  end
  local.get $4
  if
   local.get $4
   local.get $5
   i32.store offset=4
  end
  local.get $1
  local.get $0
  local.get $2
  local.get $3
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  i32.eq
  if
   local.get $0
   local.get $2
   local.get $3
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   i32.add
   local.get $4
   i32.store offset=96
   local.get $4
   i32.eqz
   if
    local.get $0
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    local.tee $4
    i32.load offset=4
    i32.const -2
    local.get $2
    i32.rotl
    i32.and
    local.set $1
    local.get $4
    local.get $1
    i32.store offset=4
    local.get $1
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const -2
     local.get $3
     i32.rotl
     i32.and
     i32.store
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
  local.get $1
  i32.eqz
  if
   i32.const 0
   i32.const 1456
   i32.const 201
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load
  local.tee $3
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1456
   i32.const 203
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.add
  local.get $1
  i32.load
  i32.const -4
  i32.and
  i32.add
  local.tee $4
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  if
   local.get $0
   local.get $4
   call $~lib/rt/tlsf/removeBlock
   local.get $1
   local.get $3
   i32.const 4
   i32.add
   local.get $2
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.store
   local.get $1
   i32.const 4
   i32.add
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.tee $4
   i32.load
   local.set $2
  end
  local.get $3
  i32.const 2
  i32.and
  if
   local.get $1
   i32.const 4
   i32.sub
   i32.load
   local.tee $1
   i32.load
   local.tee $6
   i32.const 1
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 1456
    i32.const 221
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/removeBlock
   local.get $1
   local.get $6
   i32.const 4
   i32.add
   local.get $3
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.store
  end
  local.get $4
  local.get $2
  i32.const 2
  i32.or
  i32.store
  local.get $3
  i32.const -4
  i32.and
  local.tee $3
  i32.const 12
  i32.lt_u
  if
   i32.const 0
   i32.const 1456
   i32.const 233
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  local.get $1
  i32.const 4
  i32.add
  i32.add
  local.get $4
  i32.ne
  if
   i32.const 0
   i32.const 1456
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
  local.get $3
  i32.const 256
  i32.lt_u
  if (result i32)
   local.get $3
   i32.const 4
   i32.shr_u
  else
   i32.const 31
   local.get $3
   i32.const 1073741820
   local.get $3
   i32.const 1073741820
   i32.lt_u
   select
   local.tee $3
   i32.clz
   i32.sub
   local.tee $4
   i32.const 7
   i32.sub
   local.set $5
   local.get $3
   local.get $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
  end
  local.tee $3
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $5
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1456
   i32.const 251
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $3
  local.get $5
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  local.set $4
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  local.get $4
  i32.store offset=8
  local.get $4
  if
   local.get $4
   local.get $1
   i32.store offset=4
  end
  local.get $0
  local.get $3
  local.get $5
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store offset=96
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $5
  i32.shl
  i32.or
  i32.store
  local.get $0
  local.get $5
  i32.const 2
  i32.shl
  i32.add
  local.tee $0
  local.get $0
  i32.load offset=4
  i32.const 1
  local.get $3
  i32.shl
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  local.get $2
  i32.gt_u
  if
   i32.const 0
   i32.const 1456
   i32.const 377
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.set $1
  local.get $2
  i32.const -16
  i32.and
  local.get $0
  i32.load offset=1568
  local.tee $2
  if
   local.get $1
   local.get $2
   i32.const 4
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 1456
    i32.const 384
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $2
   local.get $1
   i32.const 16
   i32.sub
   i32.eq
   if
    local.get $2
    i32.load
    local.set $4
    local.get $1
    i32.const 16
    i32.sub
    local.set $1
   end
  else
   local.get $1
   local.get $0
   i32.const 1572
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 1456
    i32.const 397
    i32.const 5
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $1
  i32.sub
  local.tee $2
  i32.const 20
  i32.lt_u
  if
   return
  end
  local.get $1
  local.get $4
  i32.const 2
  i32.and
  local.get $2
  i32.const 8
  i32.sub
  local.tee $2
  i32.const 1
  i32.or
  i32.or
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $2
  local.get $1
  i32.const 4
  i32.add
  i32.add
  local.tee $2
  i32.const 2
  i32.store
  local.get $0
  local.get $2
  i32.store offset=1568
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/initialize
  (local $0 i32)
  (local $1 i32)
  memory.size
  local.tee $0
  i32.const 1
  i32.lt_s
  if (result i32)
   i32.const 1
   local.get $0
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
  i32.const 28720
  i32.const 0
  i32.store
  i32.const 30288
  i32.const 0
  i32.store
  loop $for-loop|0
   local.get $1
   i32.const 23
   i32.lt_u
   if
    local.get $1
    i32.const 2
    i32.shl
    i32.const 28720
    i32.add
    i32.const 0
    i32.store offset=4
    i32.const 0
    local.set $0
    loop $for-loop|1
     local.get $0
     i32.const 16
     i32.lt_u
     if
      local.get $0
      local.get $1
      i32.const 4
      i32.shl
      i32.add
      i32.const 2
      i32.shl
      i32.const 28720
      i32.add
      i32.const 0
      i32.store offset=96
      local.get $0
      i32.const 1
      i32.add
      local.set $0
      br $for-loop|1
     end
    end
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $for-loop|0
   end
  end
  i32.const 28720
  i32.const 30292
  memory.size
  i32.const 16
  i32.shl
  call $~lib/rt/tlsf/addMemory
  i32.const 28720
  global.set $~lib/rt/tlsf/ROOT
 )
 (func $~lib/rt/itcms/step (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  block $folding-inner0
   block $break|0
    block $case2|0
     block $case1|0
      block $case0|0
       global.get $~lib/rt/itcms/state
       br_table $case0|0 $case1|0 $case2|0 $break|0
      end
      i32.const 1
      global.set $~lib/rt/itcms/state
      i32.const 0
      global.set $~lib/rt/itcms/visitCount
      call $~lib/rt/itcms/visitRoots
      global.get $~lib/rt/itcms/toSpace
      global.set $~lib/rt/itcms/iter
      br $folding-inner0
     end
     global.get $~lib/rt/itcms/white
     i32.eqz
     local.set $1
     global.get $~lib/rt/itcms/iter
     i32.load offset=4
     i32.const -4
     i32.and
     local.set $0
     loop $while-continue|1
      local.get $0
      global.get $~lib/rt/itcms/toSpace
      i32.ne
      if
       local.get $0
       global.set $~lib/rt/itcms/iter
       local.get $1
       local.get $0
       i32.load offset=4
       i32.const 3
       i32.and
       i32.ne
       if
        local.get $0
        local.get $1
        local.get $0
        i32.load offset=4
        i32.const -4
        i32.and
        i32.or
        i32.store offset=4
        i32.const 0
        global.set $~lib/rt/itcms/visitCount
        local.get $0
        i32.const 20
        i32.add
        call $~lib/rt/__visit_members
        br $folding-inner0
       end
       local.get $0
       i32.load offset=4
       i32.const -4
       i32.and
       local.set $0
       br $while-continue|1
      end
     end
     i32.const 0
     global.set $~lib/rt/itcms/visitCount
     call $~lib/rt/itcms/visitRoots
     global.get $~lib/rt/itcms/toSpace
     global.get $~lib/rt/itcms/iter
     i32.load offset=4
     i32.const -4
     i32.and
     i32.eq
     if
      global.get $~lib/memory/__stack_pointer
      local.set $0
      loop $while-continue|0
       local.get $0
       i32.const 28716
       i32.lt_u
       if
        local.get $0
        i32.load
        call $~lib/rt/itcms/__visit
        local.get $0
        i32.const 4
        i32.add
        local.set $0
        br $while-continue|0
       end
      end
      global.get $~lib/rt/itcms/iter
      i32.load offset=4
      i32.const -4
      i32.and
      local.set $0
      loop $while-continue|2
       local.get $0
       global.get $~lib/rt/itcms/toSpace
       i32.ne
       if
        local.get $1
        local.get $0
        i32.load offset=4
        i32.const 3
        i32.and
        i32.ne
        if
         local.get $0
         local.get $1
         local.get $0
         i32.load offset=4
         i32.const -4
         i32.and
         i32.or
         i32.store offset=4
         local.get $0
         i32.const 20
         i32.add
         call $~lib/rt/__visit_members
        end
        local.get $0
        i32.load offset=4
        i32.const -4
        i32.and
        local.set $0
        br $while-continue|2
       end
      end
      global.get $~lib/rt/itcms/fromSpace
      local.set $0
      global.get $~lib/rt/itcms/toSpace
      global.set $~lib/rt/itcms/fromSpace
      local.get $0
      global.set $~lib/rt/itcms/toSpace
      local.get $1
      global.set $~lib/rt/itcms/white
      local.get $0
      i32.load offset=4
      i32.const -4
      i32.and
      global.set $~lib/rt/itcms/iter
      i32.const 2
      global.set $~lib/rt/itcms/state
     end
     br $folding-inner0
    end
    global.get $~lib/rt/itcms/iter
    local.tee $0
    global.get $~lib/rt/itcms/toSpace
    i32.ne
    if
     local.get $0
     i32.load offset=4
     i32.const -4
     i32.and
     global.set $~lib/rt/itcms/iter
     global.get $~lib/rt/itcms/white
     i32.eqz
     local.get $0
     i32.load offset=4
     i32.const 3
     i32.and
     i32.ne
     if
      i32.const 0
      i32.const 1120
      i32.const 228
      i32.const 20
      call $~lib/builtins/abort
      unreachable
     end
     local.get $0
     i32.const 28716
     i32.lt_u
     if
      local.get $0
      i32.const 0
      i32.store offset=4
      local.get $0
      i32.const 0
      i32.store offset=8
     else
      global.get $~lib/rt/itcms/total
      local.get $0
      i32.load
      i32.const -4
      i32.and
      i32.const 4
      i32.add
      i32.sub
      global.set $~lib/rt/itcms/total
      local.get $0
      i32.const 4
      i32.add
      local.tee $0
      i32.const 28716
      i32.ge_u
      if
       global.get $~lib/rt/tlsf/ROOT
       i32.eqz
       if
        call $~lib/rt/tlsf/initialize
       end
       global.get $~lib/rt/tlsf/ROOT
       local.get $0
       i32.const 4
       i32.sub
       local.set $1
       local.get $0
       i32.const 15
       i32.and
       i32.eqz
       i32.const 0
       local.get $0
       select
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
        i32.const 1456
        i32.const 559
        i32.const 3
        call $~lib/builtins/abort
        unreachable
       end
       local.get $1
       local.tee $0
       i32.load
       i32.const 1
       i32.or
       local.set $1
       local.get $0
       local.get $1
       i32.store
       local.get $0
       call $~lib/rt/tlsf/insertBlock
      end
     end
     i32.const 10
     return
    end
    global.get $~lib/rt/itcms/toSpace
    local.tee $0
    local.get $0
    i32.store offset=4
    global.get $~lib/rt/itcms/toSpace
    local.tee $0
    local.get $0
    i32.store offset=8
    i32.const 0
    global.set $~lib/rt/itcms/state
   end
   i32.const 0
   return
  end
  global.get $~lib/rt/itcms/visitCount
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if
   local.get $1
   i32.const 4
   i32.shr_u
   local.set $1
  else
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
    i32.add
    i32.const 1
    i32.sub
    local.set $1
   end
   local.get $1
   i32.const 31
   local.get $1
   i32.clz
   i32.sub
   local.tee $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $1
   local.get $2
   i32.const 7
   i32.sub
   local.set $2
  end
  local.get $1
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $2
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1456
   i32.const 330
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
  i32.const -1
  local.get $1
  i32.shl
  i32.and
  local.tee $1
  if (result i32)
   local.get $0
   local.get $1
   i32.ctz
   local.get $2
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=96
  else
   local.get $0
   i32.load
   i32.const -1
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.tee $1
   if (result i32)
    local.get $0
    local.get $1
    i32.ctz
    local.tee $1
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    local.tee $2
    i32.eqz
    if
     i32.const 0
     i32.const 1456
     i32.const 343
     i32.const 18
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    local.get $2
    i32.ctz
    local.get $1
    i32.const 4
    i32.shl
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
   else
    i32.const 0
   end
  end
 )
 (func $~lib/memory/memory.fill (param $0 i32) (param $1 i32)
  (local $2 i32)
  block $~lib/util/memory/memset|inlined.0
   local.get $1
   i32.eqz
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8
   local.get $0
   local.get $1
   i32.add
   local.tee $2
   i32.const 1
   i32.sub
   i32.const 0
   i32.store8
   local.get $1
   i32.const 2
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8 offset=1
   local.get $0
   i32.const 0
   i32.store8 offset=2
   local.get $2
   i32.const 2
   i32.sub
   i32.const 0
   i32.store8
   local.get $2
   i32.const 3
   i32.sub
   i32.const 0
   i32.store8
   local.get $1
   i32.const 6
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8 offset=3
   local.get $2
   i32.const 4
   i32.sub
   i32.const 0
   i32.store8
   local.get $1
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   local.get $0
   i32.sub
   i32.const 3
   i32.and
   local.tee $2
   i32.add
   local.tee $0
   i32.const 0
   i32.store
   local.get $0
   local.get $1
   local.get $2
   i32.sub
   i32.const -4
   i32.and
   local.tee $2
   i32.add
   local.tee $1
   i32.const 4
   i32.sub
   i32.const 0
   i32.store
   local.get $2
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store offset=4
   local.get $0
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 12
   i32.sub
   i32.const 0
   i32.store
   local.get $1
   i32.const 8
   i32.sub
   i32.const 0
   i32.store
   local.get $2
   i32.const 24
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store offset=12
   local.get $0
   i32.const 0
   i32.store offset=16
   local.get $0
   i32.const 0
   i32.store offset=20
   local.get $0
   i32.const 0
   i32.store offset=24
   local.get $1
   i32.const 28
   i32.sub
   i32.const 0
   i32.store
   local.get $1
   i32.const 24
   i32.sub
   i32.const 0
   i32.store
   local.get $1
   i32.const 20
   i32.sub
   i32.const 0
   i32.store
   local.get $1
   i32.const 16
   i32.sub
   i32.const 0
   i32.store
   local.get $0
   local.get $0
   i32.const 4
   i32.and
   i32.const 24
   i32.add
   local.tee $1
   i32.add
   local.set $0
   local.get $2
   local.get $1
   i32.sub
   local.set $1
   loop $while-continue|0
    local.get $1
    i32.const 32
    i32.ge_u
    if
     local.get $0
     i64.const 0
     i64.store
     local.get $0
     i64.const 0
     i64.store offset=8
     local.get $0
     i64.const 0
     i64.store offset=16
     local.get $0
     i64.const 0
     i64.store offset=24
     local.get $1
     i32.const 32
     i32.sub
     local.set $1
     local.get $0
     i32.const 32
     i32.add
     local.set $0
     br $while-continue|0
    end
   end
  end
 )
 (func $~lib/rt/itcms/__new (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  i32.const 1073741804
  i32.ge_u
  if
   i32.const 1328
   i32.const 1120
   i32.const 260
   i32.const 31
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/total
  global.get $~lib/rt/itcms/threshold
  i32.ge_u
  if
   block $__inlined_func$~lib/rt/itcms/interrupt
    i32.const 2048
    local.set $3
    loop $do-continue|0
     local.get $3
     call $~lib/rt/itcms/step
     i32.sub
     local.set $3
     global.get $~lib/rt/itcms/state
     i32.eqz
     if
      global.get $~lib/rt/itcms/total
      i64.extend_i32_u
      i64.const 200
      i64.mul
      i64.const 100
      i64.div_u
      i32.wrap_i64
      i32.const 1024
      i32.add
      global.set $~lib/rt/itcms/threshold
      br $__inlined_func$~lib/rt/itcms/interrupt
     end
     local.get $3
     i32.const 0
     i32.gt_s
     br_if $do-continue|0
    end
    global.get $~lib/rt/itcms/total
    local.tee $3
    local.get $3
    global.get $~lib/rt/itcms/threshold
    i32.sub
    i32.const 1024
    i32.lt_u
    i32.const 10
    i32.shl
    i32.add
    global.set $~lib/rt/itcms/threshold
   end
  end
  local.get $0
  i32.const 16
  i32.add
  local.set $6
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.get $6
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 1328
   i32.const 1456
   i32.const 458
   i32.const 29
   call $~lib/builtins/abort
   unreachable
  end
  local.tee $2
  local.get $6
  i32.const 12
  i32.le_u
  if (result i32)
   i32.const 12
  else
   local.get $6
   i32.const 19
   i32.add
   i32.const -16
   i32.and
   i32.const 4
   i32.sub
  end
  local.tee $3
  call $~lib/rt/tlsf/searchBlock
  local.tee $6
  i32.eqz
  if
   local.get $3
   i32.const 536870910
   i32.lt_u
   if (result i32)
    local.get $3
    i32.const 1
    i32.const 27
    local.get $3
    i32.clz
    i32.sub
    i32.shl
    i32.const 1
    i32.sub
    i32.add
   else
    local.get $3
   end
   i32.const 4
   memory.size
   local.tee $6
   i32.const 16
   i32.shl
   i32.const 4
   i32.sub
   local.get $2
   i32.load offset=1568
   i32.ne
   i32.shl
   i32.add
   i32.const 65535
   i32.add
   i32.const -65536
   i32.and
   i32.const 16
   i32.shr_u
   local.set $5
   local.get $6
   local.get $5
   local.get $5
   local.get $6
   i32.lt_s
   select
   memory.grow
   i32.const 0
   i32.lt_s
   if
    local.get $5
    memory.grow
    i32.const 0
    i32.lt_s
    if
     unreachable
    end
   end
   local.get $2
   local.get $6
   i32.const 16
   i32.shl
   memory.size
   i32.const 16
   i32.shl
   call $~lib/rt/tlsf/addMemory
   local.get $2
   local.get $3
   call $~lib/rt/tlsf/searchBlock
   local.tee $6
   i32.eqz
   if
    i32.const 0
    i32.const 1456
    i32.const 496
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $3
  local.get $6
  i32.load
  i32.const -4
  i32.and
  i32.gt_u
  if
   i32.const 0
   i32.const 1456
   i32.const 498
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.get $6
  call $~lib/rt/tlsf/removeBlock
  local.get $6
  i32.load
  local.set $5
  local.get $3
  i32.const 4
  i32.add
  i32.const 15
  i32.and
  if
   i32.const 0
   i32.const 1456
   i32.const 357
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $5
  i32.const -4
  i32.and
  local.get $3
  i32.sub
  local.tee $4
  i32.const 16
  i32.ge_u
  if
   local.get $6
   local.get $3
   local.get $5
   i32.const 2
   i32.and
   i32.or
   i32.store
   local.get $3
   local.get $6
   i32.const 4
   i32.add
   i32.add
   local.tee $3
   local.get $4
   i32.const 4
   i32.sub
   i32.const 1
   i32.or
   i32.store
   local.get $2
   local.get $3
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $6
   local.get $5
   i32.const -2
   i32.and
   i32.store
   local.get $6
   i32.const 4
   i32.add
   local.tee $3
   local.get $6
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.get $3
   local.get $6
   i32.load
   i32.const -4
   i32.and
   i32.add
   i32.load
   i32.const -3
   i32.and
   i32.store
  end
  local.get $6
  local.get $1
  i32.store offset=12
  local.get $6
  local.get $0
  i32.store offset=16
  global.get $~lib/rt/itcms/fromSpace
  local.tee $3
  i32.load offset=8
  local.set $1
  local.get $6
  local.get $3
  global.get $~lib/rt/itcms/white
  i32.or
  i32.store offset=4
  local.get $6
  local.get $1
  i32.store offset=8
  local.get $1
  local.get $6
  local.get $1
  i32.load offset=4
  i32.const 3
  i32.and
  i32.or
  i32.store offset=4
  local.get $3
  local.get $6
  i32.store offset=8
  global.get $~lib/rt/itcms/total
  local.get $6
  i32.load
  i32.const -4
  i32.and
  i32.const 4
  i32.add
  i32.add
  global.set $~lib/rt/itcms/total
  local.get $6
  i32.const 20
  i32.add
  local.tee $1
  local.get $0
  call $~lib/memory/memory.fill
  local.get $1
 )
 (func $~lib/util/memory/memcpy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  loop $while-continue|0
   local.get $1
   i32.const 3
   i32.and
   i32.const 0
   local.get $2
   select
   if
    local.get $0
    local.tee $3
    i32.const 1
    i32.add
    local.set $0
    local.get $1
    local.tee $4
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    local.get $4
    i32.load8_u
    i32.store8
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    br $while-continue|0
   end
  end
  local.get $0
  i32.const 3
  i32.and
  i32.eqz
  if
   loop $while-continue|1
    local.get $2
    i32.const 16
    i32.ge_u
    if
     local.get $0
     local.get $1
     i32.load
     i32.store
     local.get $0
     local.get $1
     i32.load offset=4
     i32.store offset=4
     local.get $0
     local.get $1
     i32.load offset=8
     i32.store offset=8
     local.get $0
     local.get $1
     i32.load offset=12
     i32.store offset=12
     local.get $1
     i32.const 16
     i32.add
     local.set $1
     local.get $0
     i32.const 16
     i32.add
     local.set $0
     local.get $2
     i32.const 16
     i32.sub
     local.set $2
     br $while-continue|1
    end
   end
   local.get $2
   i32.const 8
   i32.and
   if
    local.get $0
    local.get $1
    i32.load
    i32.store
    local.get $0
    local.get $1
    i32.load offset=4
    i32.store offset=4
    local.get $1
    i32.const 8
    i32.add
    local.set $1
    local.get $0
    i32.const 8
    i32.add
    local.set $0
   end
   local.get $2
   i32.const 4
   i32.and
   if
    local.get $0
    local.get $1
    i32.load
    i32.store
    local.get $1
    i32.const 4
    i32.add
    local.set $1
    local.get $0
    i32.const 4
    i32.add
    local.set $0
   end
   local.get $2
   i32.const 2
   i32.and
   if
    local.get $0
    local.get $1
    i32.load16_u
    i32.store16
    local.get $1
    i32.const 2
    i32.add
    local.set $1
    local.get $0
    i32.const 2
    i32.add
    local.set $0
   end
   local.get $2
   i32.const 1
   i32.and
   if
    local.get $0
    local.get $1
    i32.load8_u
    i32.store8
   end
   return
  end
  local.get $2
  i32.const 32
  i32.ge_u
  if
   block $break|2
    block $case2|2
     block $case1|2
      block $case0|2
       local.get $0
       i32.const 3
       i32.and
       i32.const 1
       i32.sub
       br_table $case0|2 $case1|2 $case2|2 $break|2
      end
      local.get $1
      i32.load
      local.set $5
      local.get $0
      local.get $1
      i32.load8_u
      i32.store8
      local.get $0
      i32.const 1
      i32.add
      local.tee $0
      local.get $1
      i32.const 1
      i32.add
      local.tee $1
      i32.load8_u
      i32.store8
      local.get $0
      local.tee $4
      i32.const 2
      i32.add
      local.set $0
      local.get $1
      local.tee $3
      i32.const 2
      i32.add
      local.set $1
      local.get $4
      local.get $3
      i32.load8_u offset=1
      i32.store8 offset=1
      local.get $2
      i32.const 3
      i32.sub
      local.set $2
      loop $while-continue|3
       local.get $2
       i32.const 17
       i32.ge_u
       if
        local.get $0
        local.get $1
        i32.load offset=1
        local.tee $3
        i32.const 8
        i32.shl
        local.get $5
        i32.const 24
        i32.shr_u
        i32.or
        i32.store
        local.get $0
        local.get $3
        i32.const 24
        i32.shr_u
        local.get $1
        i32.load offset=5
        local.tee $3
        i32.const 8
        i32.shl
        i32.or
        i32.store offset=4
        local.get $0
        local.get $3
        i32.const 24
        i32.shr_u
        local.get $1
        i32.load offset=9
        local.tee $3
        i32.const 8
        i32.shl
        i32.or
        i32.store offset=8
        local.get $0
        local.get $1
        i32.load offset=13
        local.tee $5
        i32.const 8
        i32.shl
        local.get $3
        i32.const 24
        i32.shr_u
        i32.or
        i32.store offset=12
        local.get $1
        i32.const 16
        i32.add
        local.set $1
        local.get $0
        i32.const 16
        i32.add
        local.set $0
        local.get $2
        i32.const 16
        i32.sub
        local.set $2
        br $while-continue|3
       end
      end
      br $break|2
     end
     local.get $1
     i32.load
     local.set $5
     local.get $0
     local.get $1
     i32.load8_u
     i32.store8
     local.get $0
     local.tee $4
     i32.const 2
     i32.add
     local.set $0
     local.get $1
     local.tee $3
     i32.const 2
     i32.add
     local.set $1
     local.get $4
     local.get $3
     i32.load8_u offset=1
     i32.store8 offset=1
     local.get $2
     i32.const 2
     i32.sub
     local.set $2
     loop $while-continue|4
      local.get $2
      i32.const 18
      i32.ge_u
      if
       local.get $0
       local.get $1
       i32.load offset=2
       local.tee $3
       i32.const 16
       i32.shl
       local.get $5
       i32.const 16
       i32.shr_u
       i32.or
       i32.store
       local.get $0
       local.get $3
       i32.const 16
       i32.shr_u
       local.get $1
       i32.load offset=6
       local.tee $3
       i32.const 16
       i32.shl
       i32.or
       i32.store offset=4
       local.get $0
       local.get $3
       i32.const 16
       i32.shr_u
       local.get $1
       i32.load offset=10
       local.tee $3
       i32.const 16
       i32.shl
       i32.or
       i32.store offset=8
       local.get $0
       local.get $1
       i32.load offset=14
       local.tee $5
       i32.const 16
       i32.shl
       local.get $3
       i32.const 16
       i32.shr_u
       i32.or
       i32.store offset=12
       local.get $1
       i32.const 16
       i32.add
       local.set $1
       local.get $0
       i32.const 16
       i32.add
       local.set $0
       local.get $2
       i32.const 16
       i32.sub
       local.set $2
       br $while-continue|4
      end
     end
     br $break|2
    end
    local.get $1
    i32.load
    local.set $5
    local.get $0
    local.tee $3
    i32.const 1
    i32.add
    local.set $0
    local.get $1
    local.tee $4
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    local.get $4
    i32.load8_u
    i32.store8
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    loop $while-continue|5
     local.get $2
     i32.const 19
     i32.ge_u
     if
      local.get $0
      local.get $1
      i32.load offset=3
      local.tee $3
      i32.const 24
      i32.shl
      local.get $5
      i32.const 8
      i32.shr_u
      i32.or
      i32.store
      local.get $0
      local.get $3
      i32.const 8
      i32.shr_u
      local.get $1
      i32.load offset=7
      local.tee $3
      i32.const 24
      i32.shl
      i32.or
      i32.store offset=4
      local.get $0
      local.get $3
      i32.const 8
      i32.shr_u
      local.get $1
      i32.load offset=11
      local.tee $3
      i32.const 24
      i32.shl
      i32.or
      i32.store offset=8
      local.get $0
      local.get $1
      i32.load offset=15
      local.tee $5
      i32.const 24
      i32.shl
      local.get $3
      i32.const 8
      i32.shr_u
      i32.or
      i32.store offset=12
      local.get $1
      i32.const 16
      i32.add
      local.set $1
      local.get $0
      i32.const 16
      i32.add
      local.set $0
      local.get $2
      i32.const 16
      i32.sub
      local.set $2
      br $while-continue|5
     end
    end
   end
  end
  local.get $2
  i32.const 16
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $4
   i32.const 2
   i32.add
   local.set $0
   local.get $1
   local.tee $3
   i32.const 2
   i32.add
   local.set $1
   local.get $4
   local.get $3
   i32.load8_u offset=1
   i32.store8 offset=1
  end
  local.get $2
  i32.const 8
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $4
   i32.const 2
   i32.add
   local.set $0
   local.get $1
   local.tee $3
   i32.const 2
   i32.add
   local.set $1
   local.get $4
   local.get $3
   i32.load8_u offset=1
   i32.store8 offset=1
  end
  local.get $2
  i32.const 4
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $4
   i32.const 2
   i32.add
   local.set $0
   local.get $1
   local.tee $3
   i32.const 2
   i32.add
   local.set $1
   local.get $4
   local.get $3
   i32.load8_u offset=1
   i32.store8 offset=1
  end
  local.get $2
  i32.const 2
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $4
   i32.const 2
   i32.add
   local.set $0
   local.get $1
   local.tee $3
   i32.const 2
   i32.add
   local.set $1
   local.get $4
   local.get $3
   i32.load8_u offset=1
   i32.store8 offset=1
  end
  local.get $2
  i32.const 1
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
  end
 )
 (func $~lib/memory/memory.copy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  block $~lib/util/memory/memmove|inlined.0
   local.get $2
   local.set $4
   local.get $0
   local.get $1
   i32.eq
   br_if $~lib/util/memory/memmove|inlined.0
   local.get $1
   local.get $0
   i32.sub
   local.get $4
   i32.sub
   i32.const 0
   local.get $4
   i32.const 1
   i32.shl
   i32.sub
   i32.le_u
   if
    local.get $0
    local.get $1
    local.get $4
    call $~lib/util/memory/memcpy
    br $~lib/util/memory/memmove|inlined.0
   end
   local.get $0
   local.get $1
   i32.lt_u
   if
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|0
      local.get $0
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.set $4
       local.get $0
       local.tee $2
       i32.const 1
       i32.add
       local.set $0
       local.get $1
       local.tee $3
       i32.const 1
       i32.add
       local.set $1
       local.get $2
       local.get $3
       i32.load8_u
       i32.store8
       br $while-continue|0
      end
     end
     loop $while-continue|1
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $0
       local.get $1
       i64.load
       i64.store
       local.get $4
       i32.const 8
       i32.sub
       local.set $4
       local.get $0
       i32.const 8
       i32.add
       local.set $0
       local.get $1
       i32.const 8
       i32.add
       local.set $1
       br $while-continue|1
      end
     end
    end
    loop $while-continue|2
     local.get $4
     if
      local.get $0
      local.tee $2
      i32.const 1
      i32.add
      local.set $0
      local.get $1
      local.tee $3
      i32.const 1
      i32.add
      local.set $1
      local.get $2
      local.get $3
      i32.load8_u
      i32.store8
      local.get $4
      i32.const 1
      i32.sub
      local.set $4
      br $while-continue|2
     end
    end
   else
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|3
      local.get $0
      local.get $4
      i32.add
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.tee $4
       local.get $0
       i32.add
       local.get $1
       local.get $4
       i32.add
       i32.load8_u
       i32.store8
       br $while-continue|3
      end
     end
     loop $while-continue|4
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $4
       i32.const 8
       i32.sub
       local.tee $4
       local.get $0
       i32.add
       local.get $1
       local.get $4
       i32.add
       i64.load
       i64.store
       br $while-continue|4
      end
     end
    end
    loop $while-continue|5
     local.get $4
     if
      local.get $4
      i32.const 1
      i32.sub
      local.tee $4
      local.get $0
      i32.add
      local.get $1
      local.get $4
      i32.add
      i32.load8_u
      i32.store8
      br $while-continue|5
     end
    end
   end
  end
 )
 (func $~lib/staticarray/StaticArray<~lib/string/String>#join (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 2
  i32.shr_u
  local.set $5
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $6
  i64.const 0
  i64.store
  local.get $6
  i32.const 0
  i32.store offset=8
  block $__inlined_func$~lib/util/string/joinStringArray
   local.get $5
   i32.const 1
   i32.sub
   local.tee $6
   i32.const 0
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 12
    i32.add
    global.set $~lib/memory/__stack_pointer
    i32.const 1632
    local.set $2
    br $__inlined_func$~lib/util/string/joinStringArray
   end
   local.get $6
   i32.eqz
   if
    global.get $~lib/memory/__stack_pointer
    local.tee $2
    local.get $0
    i32.load
    local.tee $0
    i32.store
    local.get $2
    i32.const 12
    i32.add
    global.set $~lib/memory/__stack_pointer
    local.get $0
    i32.const 1632
    local.get $0
    select
    local.set $2
    br $__inlined_func$~lib/util/string/joinStringArray
   end
   loop $for-loop|0
    local.get $3
    local.get $5
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     local.get $3
     i32.const 2
     i32.shl
     i32.add
     i32.load
     local.tee $4
     i32.store offset=4
     local.get $4
     if
      local.get $2
      local.get $4
      i32.const 20
      i32.sub
      i32.load offset=16
      i32.const 1
      i32.shr_u
      i32.add
      local.set $2
     end
     local.get $3
     i32.const 1
     i32.add
     local.set $3
     br $for-loop|0
    end
   end
   global.get $~lib/memory/__stack_pointer
   local.get $2
   local.get $6
   i32.const 1628
   i32.load
   i32.const 1
   i32.shr_u
   local.tee $5
   i32.mul
   i32.add
   i32.const 1
   i32.shl
   i32.const 1
   call $~lib/rt/itcms/__new
   local.tee $2
   i32.store offset=8
   i32.const 0
   local.set $3
   loop $for-loop|1
    local.get $3
    local.get $6
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     local.get $3
     i32.const 2
     i32.shl
     i32.add
     i32.load
     local.tee $4
     i32.store offset=4
     local.get $4
     if
      local.get $2
      local.get $1
      i32.const 1
      i32.shl
      i32.add
      local.get $4
      local.get $4
      i32.const 20
      i32.sub
      i32.load offset=16
      i32.const 1
      i32.shr_u
      local.tee $4
      i32.const 1
      i32.shl
      call $~lib/memory/memory.copy
      local.get $1
      local.get $4
      i32.add
      local.set $1
     end
     local.get $5
     if
      local.get $2
      local.get $1
      i32.const 1
      i32.shl
      i32.add
      i32.const 1632
      local.get $5
      i32.const 1
      i32.shl
      call $~lib/memory/memory.copy
      local.get $1
      local.get $5
      i32.add
      local.set $1
     end
     local.get $3
     i32.const 1
     i32.add
     local.set $3
     br $for-loop|1
    end
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   local.get $6
   i32.const 2
   i32.shl
   i32.add
   i32.load
   local.tee $0
   i32.store offset=4
   local.get $0
   if
    local.get $2
    local.get $1
    i32.const 1
    i32.shl
    i32.add
    local.get $0
    local.get $0
    i32.const 20
    i32.sub
    i32.load offset=16
    i32.const 1
    i32.shr_u
    i32.const 1
    i32.shl
    call $~lib/memory/memory.copy
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
  end
  local.get $2
 )
 (func $~lib/rt/itcms/__renew (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  local.get $0
  i32.const 20
  i32.sub
  local.tee $2
  i32.load
  i32.const -4
  i32.and
  i32.const 16
  i32.sub
  i32.le_u
  if
   local.get $2
   local.get $1
   i32.store offset=16
   local.get $0
   return
  end
  local.get $1
  local.get $2
  i32.load offset=12
  call $~lib/rt/itcms/__new
  local.tee $3
  local.get $0
  local.get $1
  local.get $2
  i32.load offset=16
  local.tee $0
  local.get $0
  local.get $1
  i32.gt_u
  select
  call $~lib/memory/memory.copy
  local.get $3
 )
 (func $~lib/as-string-sink/index/StringSink#write (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $1
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
  local.tee $3
  i32.eqz
  if
   return
  end
  local.get $3
  i32.const 1
  i32.shl
  local.tee $3
  local.get $0
  i32.load offset=4
  i32.add
  local.tee $5
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i32.const 0
  i32.store
  local.get $2
  local.get $0
  i32.load
  local.tee $4
  i32.store
  local.get $4
  i32.const 20
  i32.sub
  i32.load offset=16
  local.get $2
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
  i32.lt_u
  if
   local.get $0
   local.get $0
   i32.load
   i32.const 1
   i32.const 32
   local.get $5
   i32.const 1
   i32.sub
   i32.clz
   i32.sub
   i32.shl
   call $~lib/rt/itcms/__renew
   local.tee $2
   i32.store
   local.get $0
   local.get $2
   i32.const 0
   call $~lib/rt/itcms/__link
  end
  local.get $0
  i32.load offset=4
  local.tee $2
  local.get $0
  i32.load
  i32.add
  local.get $1
  local.get $3
  call $~lib/memory/memory.copy
  local.get $0
  local.get $2
  local.get $3
  i32.add
  i32.store offset=4
 )
 (func $~lib/util/number/utoa32_dec_lut (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  loop $while-continue|0
   local.get $1
   i32.const 10000
   i32.ge_u
   if
    local.get $1
    i32.const 10000
    i32.rem_u
    local.set $3
    local.get $1
    i32.const 10000
    i32.div_u
    local.set $1
    local.get $0
    local.get $2
    i32.const 4
    i32.sub
    local.tee $2
    i32.const 1
    i32.shl
    i32.add
    local.get $3
    i32.const 100
    i32.div_u
    i32.const 2
    i32.shl
    i32.const 2556
    i32.add
    i64.load32_u
    local.get $3
    i32.const 100
    i32.rem_u
    i32.const 2
    i32.shl
    i32.const 2556
    i32.add
    i64.load32_u
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
   local.get $0
   local.get $2
   i32.const 2
   i32.sub
   local.tee $2
   i32.const 1
   i32.shl
   i32.add
   local.get $1
   i32.const 100
   i32.rem_u
   i32.const 2
   i32.shl
   i32.const 2556
   i32.add
   i32.load
   i32.store
   local.get $1
   i32.const 100
   i32.div_u
   local.set $1
  end
  local.get $1
  i32.const 10
  i32.ge_u
  if
   local.get $0
   local.get $2
   i32.const 2
   i32.sub
   i32.const 1
   i32.shl
   i32.add
   local.get $1
   i32.const 2
   i32.shl
   i32.const 2556
   i32.add
   i32.load
   i32.store
  else
   local.get $0
   local.get $2
   i32.const 1
   i32.sub
   i32.const 1
   i32.shl
   i32.add
   local.get $1
   i32.const 48
   i32.add
   i32.store16
  end
 )
 (func $~lib/util/number/genDigits (param $0 i64) (param $1 i32) (param $2 i64) (param $3 i32) (param $4 i64) (param $5 i32) (result i32)
  (local $6 i64)
  (local $7 i32)
  (local $8 i64)
  (local $9 i32)
  (local $10 i64)
  (local $11 i64)
  local.get $2
  local.get $0
  i64.sub
  local.set $8
  local.get $2
  i64.const 1
  i32.const 0
  local.get $3
  i32.sub
  local.tee $9
  i64.extend_i32_s
  local.tee $0
  i64.shl
  local.tee $10
  i64.const 1
  i64.sub
  local.tee $11
  i64.and
  local.set $6
  local.get $2
  local.get $0
  i64.shr_u
  i32.wrap_i64
  local.tee $1
  local.set $3
  local.get $1
  i32.const 100000
  i32.lt_u
  if (result i32)
   local.get $3
   i32.const 100
   i32.lt_u
   if (result i32)
    local.get $3
    i32.const 10
    i32.ge_u
    i32.const 1
    i32.add
   else
    local.get $3
    i32.const 10000
    i32.ge_u
    i32.const 3
    i32.add
    local.get $3
    i32.const 1000
    i32.ge_u
    i32.add
   end
  else
   local.get $3
   i32.const 10000000
   i32.lt_u
   if (result i32)
    local.get $3
    i32.const 1000000
    i32.ge_u
    i32.const 6
    i32.add
   else
    local.get $3
    i32.const 1000000000
    i32.ge_u
    i32.const 8
    i32.add
    local.get $3
    i32.const 100000000
    i32.ge_u
    i32.add
   end
  end
  local.set $7
  loop $while-continue|0
   local.get $7
   i32.const 0
   i32.gt_s
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
                local.get $7
                i32.const 1
                i32.sub
                br_table $case9|1 $case8|1 $case7|1 $case6|1 $case5|1 $case4|1 $case3|1 $case2|1 $case1|1 $case0|1 $case10|1
               end
               local.get $1
               i32.const 1000000000
               i32.div_u
               local.set $3
               local.get $1
               i32.const 1000000000
               i32.rem_u
               local.set $1
               br $break|1
              end
              local.get $1
              i32.const 100000000
              i32.div_u
              local.set $3
              local.get $1
              i32.const 100000000
              i32.rem_u
              local.set $1
              br $break|1
             end
             local.get $1
             i32.const 10000000
             i32.div_u
             local.set $3
             local.get $1
             i32.const 10000000
             i32.rem_u
             local.set $1
             br $break|1
            end
            local.get $1
            i32.const 1000000
            i32.div_u
            local.set $3
            local.get $1
            i32.const 1000000
            i32.rem_u
            local.set $1
            br $break|1
           end
           local.get $1
           i32.const 100000
           i32.div_u
           local.set $3
           local.get $1
           i32.const 100000
           i32.rem_u
           local.set $1
           br $break|1
          end
          local.get $1
          i32.const 10000
          i32.div_u
          local.set $3
          local.get $1
          i32.const 10000
          i32.rem_u
          local.set $1
          br $break|1
         end
         local.get $1
         i32.const 1000
         i32.div_u
         local.set $3
         local.get $1
         i32.const 1000
         i32.rem_u
         local.set $1
         br $break|1
        end
        local.get $1
        i32.const 100
        i32.div_u
        local.set $3
        local.get $1
        i32.const 100
        i32.rem_u
        local.set $1
        br $break|1
       end
       local.get $1
       i32.const 10
       i32.div_u
       local.set $3
       local.get $1
       i32.const 10
       i32.rem_u
       local.set $1
       br $break|1
      end
      local.get $1
      local.set $3
      i32.const 0
      local.set $1
      br $break|1
     end
     i32.const 0
     local.set $3
    end
    local.get $3
    local.get $5
    i32.or
    if
     local.get $5
     i32.const 1
     i32.shl
     i32.const 4384
     i32.add
     local.get $3
     i32.const 65535
     i32.and
     i32.const 48
     i32.add
     i32.store16
     local.get $5
     i32.const 1
     i32.add
     local.set $5
    end
    local.get $7
    i32.const 1
    i32.sub
    local.set $7
    local.get $6
    local.get $1
    i64.extend_i32_u
    local.get $9
    i64.extend_i32_s
    i64.shl
    i64.add
    local.tee $0
    local.get $4
    i64.le_u
    if
     local.get $7
     global.get $~lib/util/number/_K
     i32.add
     global.set $~lib/util/number/_K
     local.get $7
     i32.const 2
     i32.shl
     i32.const 5312
     i32.add
     i64.load32_u
     local.get $9
     i64.extend_i32_s
     i64.shl
     local.set $2
     local.get $5
     i32.const 1
     i32.shl
     i32.const 4382
     i32.add
     local.tee $7
     i32.load16_u
     local.set $3
     loop $while-continue|3
      local.get $2
      local.get $4
      local.get $0
      i64.sub
      i64.le_u
      i32.const 0
      local.get $0
      local.get $8
      i64.lt_u
      select
      if (result i32)
       i32.const 1
       local.get $8
       local.get $0
       i64.sub
       local.get $0
       local.get $2
       i64.add
       local.tee $6
       local.get $8
       i64.sub
       i64.gt_u
       local.get $6
       local.get $8
       i64.lt_u
       select
      else
       i32.const 0
      end
      if
       local.get $3
       i32.const 1
       i32.sub
       local.set $3
       local.get $0
       local.get $2
       i64.add
       local.set $0
       br $while-continue|3
      end
     end
     local.get $7
     local.get $3
     i32.store16
     local.get $5
     return
    end
    br $while-continue|0
   end
  end
  local.get $9
  i64.extend_i32_s
  local.set $0
  loop $while-continue|4
   local.get $4
   i64.const 10
   i64.mul
   local.set $4
   local.get $6
   i64.const 10
   i64.mul
   local.tee $2
   local.get $0
   i64.shr_u
   local.tee $6
   local.get $5
   i64.extend_i32_s
   i64.or
   i64.const 0
   i64.ne
   if
    local.get $5
    i32.const 1
    i32.shl
    i32.const 4384
    i32.add
    local.get $6
    i32.wrap_i64
    i32.const 65535
    i32.and
    i32.const 48
    i32.add
    i32.store16
    local.get $5
    i32.const 1
    i32.add
    local.set $5
   end
   local.get $7
   i32.const 1
   i32.sub
   local.set $7
   local.get $4
   local.get $2
   local.get $11
   i64.and
   local.tee $6
   i64.le_u
   br_if $while-continue|4
  end
  local.get $7
  global.get $~lib/util/number/_K
  i32.add
  global.set $~lib/util/number/_K
  local.get $6
  local.set $0
  local.get $8
  i32.const 0
  local.get $7
  i32.sub
  i32.const 2
  i32.shl
  i32.const 5312
  i32.add
  i64.load32_u
  i64.mul
  local.set $2
  local.get $5
  i32.const 1
  i32.shl
  i32.const 4382
  i32.add
  local.tee $7
  i32.load16_u
  local.set $3
  loop $while-continue|6
   local.get $10
   local.get $4
   local.get $0
   i64.sub
   i64.le_u
   i32.const 0
   local.get $0
   local.get $2
   i64.lt_u
   select
   if (result i32)
    i32.const 1
    local.get $2
    local.get $0
    i64.sub
    local.get $0
    local.get $10
    i64.add
    local.tee $6
    local.get $2
    i64.sub
    i64.gt_u
    local.get $2
    local.get $6
    i64.gt_u
    select
   else
    i32.const 0
   end
   if
    local.get $3
    i32.const 1
    i32.sub
    local.set $3
    local.get $0
    local.get $10
    i64.add
    local.set $0
    br $while-continue|6
   end
  end
  local.get $7
  local.get $3
  i32.store16
  local.get $5
 )
 (func $~lib/util/number/prettify (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $2
  i32.eqz
  if
   local.get $0
   local.get $1
   i32.const 1
   i32.shl
   i32.add
   i32.const 3145774
   i32.store
   local.get $1
   i32.const 2
   i32.add
   return
  end
  local.get $1
  local.get $2
  i32.add
  local.tee $4
  i32.const 21
  i32.le_s
  i32.const 0
  local.get $1
  local.get $4
  i32.le_s
  select
  if (result i32)
   loop $for-loop|0
    local.get $1
    local.get $4
    i32.lt_s
    if
     local.get $0
     local.get $1
     i32.const 1
     i32.shl
     i32.add
     i32.const 48
     i32.store16
     local.get $1
     i32.const 1
     i32.add
     local.set $1
     br $for-loop|0
    end
   end
   local.get $0
   local.get $4
   i32.const 1
   i32.shl
   i32.add
   i32.const 3145774
   i32.store
   local.get $4
   i32.const 2
   i32.add
  else
   local.get $4
   i32.const 21
   i32.le_s
   i32.const 0
   local.get $4
   i32.const 0
   i32.gt_s
   select
   if (result i32)
    local.get $0
    local.get $4
    i32.const 1
    i32.shl
    i32.add
    local.tee $0
    i32.const 2
    i32.add
    local.get $0
    i32.const 0
    local.get $2
    i32.sub
    i32.const 1
    i32.shl
    call $~lib/memory/memory.copy
    local.get $0
    i32.const 46
    i32.store16
    local.get $1
    i32.const 1
    i32.add
   else
    local.get $4
    i32.const 0
    i32.le_s
    i32.const 0
    local.get $4
    i32.const -6
    i32.gt_s
    select
    if (result i32)
     local.get $0
     i32.const 2
     local.get $4
     i32.sub
     local.tee $5
     i32.const 1
     i32.shl
     i32.add
     local.get $0
     local.get $1
     i32.const 1
     i32.shl
     call $~lib/memory/memory.copy
     local.get $0
     i32.const 3014704
     i32.store
     i32.const 2
     local.set $2
     loop $for-loop|1
      local.get $2
      local.get $5
      i32.lt_s
      if
       local.get $0
       local.get $2
       i32.const 1
       i32.shl
       i32.add
       i32.const 48
       i32.store16
       local.get $2
       i32.const 1
       i32.add
       local.set $2
       br $for-loop|1
      end
     end
     local.get $1
     local.get $5
     i32.add
    else
     local.get $1
     i32.const 1
     i32.eq
     if (result i32)
      local.get $0
      i32.const 101
      i32.store16 offset=2
      local.get $0
      local.tee $3
      i32.const 4
      i32.add
      local.get $4
      i32.const 1
      i32.sub
      local.tee $0
      i32.const 0
      i32.lt_s
      local.tee $2
      if
       i32.const 0
       local.get $0
       i32.sub
       local.set $0
      end
      local.get $0
      local.tee $1
      i32.const 100000
      i32.lt_u
      if (result i32)
       local.get $1
       i32.const 100
       i32.lt_u
       if (result i32)
        local.get $1
        i32.const 10
        i32.ge_u
        i32.const 1
        i32.add
       else
        local.get $1
        i32.const 10000
        i32.ge_u
        i32.const 3
        i32.add
        local.get $1
        i32.const 1000
        i32.ge_u
        i32.add
       end
      else
       local.get $1
       i32.const 10000000
       i32.lt_u
       if (result i32)
        local.get $1
        i32.const 1000000
        i32.ge_u
        i32.const 6
        i32.add
       else
        local.get $1
        i32.const 1000000000
        i32.ge_u
        i32.const 8
        i32.add
        local.get $1
        i32.const 100000000
        i32.ge_u
        i32.add
       end
      end
      local.set $1
      local.get $0
      local.get $1
      i32.const 1
      i32.add
      local.tee $0
      call $~lib/util/number/utoa32_dec_lut
      local.get $3
      i32.const 45
      i32.const 43
      local.get $2
      select
      i32.store16 offset=4
      local.get $0
      i32.const 2
      i32.add
     else
      local.get $0
      i32.const 4
      i32.add
      local.get $0
      i32.const 2
      i32.add
      local.get $1
      i32.const 1
      i32.shl
      local.tee $2
      i32.const 2
      i32.sub
      call $~lib/memory/memory.copy
      local.get $0
      i32.const 46
      i32.store16 offset=2
      local.get $0
      local.get $2
      i32.add
      local.tee $0
      i32.const 101
      i32.store16 offset=2
      local.get $0
      local.tee $3
      i32.const 4
      i32.add
      local.get $4
      i32.const 1
      i32.sub
      local.tee $0
      i32.const 0
      i32.lt_s
      local.tee $5
      if
       i32.const 0
       local.get $0
       i32.sub
       local.set $0
      end
      local.get $0
      local.tee $2
      i32.const 100000
      i32.lt_u
      if (result i32)
       local.get $2
       i32.const 100
       i32.lt_u
       if (result i32)
        local.get $2
        i32.const 10
        i32.ge_u
        i32.const 1
        i32.add
       else
        local.get $2
        i32.const 10000
        i32.ge_u
        i32.const 3
        i32.add
        local.get $2
        i32.const 1000
        i32.ge_u
        i32.add
       end
      else
       local.get $2
       i32.const 10000000
       i32.lt_u
       if (result i32)
        local.get $2
        i32.const 1000000
        i32.ge_u
        i32.const 6
        i32.add
       else
        local.get $2
        i32.const 1000000000
        i32.ge_u
        i32.const 8
        i32.add
        local.get $2
        i32.const 100000000
        i32.ge_u
        i32.add
       end
      end
      local.set $2
      local.get $0
      local.get $2
      i32.const 1
      i32.add
      local.tee $0
      call $~lib/util/number/utoa32_dec_lut
      local.get $3
      i32.const 45
      i32.const 43
      local.get $5
      select
      i32.store16 offset=4
      local.get $0
      local.get $1
      i32.add
      i32.const 2
      i32.add
     end
    end
   end
  end
 )
 (func $~lib/util/number/dtoa_core (param $0 f64) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i64)
  (local $4 i32)
  (local $5 i32)
  (local $6 i64)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i64)
  (local $11 i64)
  (local $12 i64)
  local.get $0
  f64.const 0
  f64.lt
  local.tee $8
  if (result f64)
   i32.const 4384
   i32.const 45
   i32.store16
   local.get $0
   f64.neg
  else
   local.get $0
  end
  i64.reinterpret_f64
  local.tee $2
  i64.const 9218868437227405312
  i64.and
  i64.const 52
  i64.shr_u
  i32.wrap_i64
  local.tee $7
  i32.const 0
  i32.ne
  i64.extend_i32_u
  i64.const 52
  i64.shl
  local.get $2
  i64.const 4503599627370495
  i64.and
  i64.add
  local.tee $1
  i64.const 1
  i64.shl
  i64.const 1
  i64.add
  local.tee $2
  i64.clz
  i32.wrap_i64
  local.set $4
  local.get $2
  local.get $4
  i64.extend_i32_s
  i64.shl
  global.set $~lib/util/number/_frc_plus
  local.get $7
  i32.const 1
  local.get $7
  select
  i32.const 1075
  i32.sub
  local.tee $7
  i32.const 1
  i32.sub
  local.get $4
  i32.sub
  local.set $4
  local.get $1
  local.get $1
  i64.const 4503599627370496
  i64.eq
  i32.const 1
  i32.add
  local.tee $5
  i64.extend_i32_s
  i64.shl
  i64.const 1
  i64.sub
  local.get $7
  local.get $5
  i32.sub
  local.get $4
  i32.sub
  i64.extend_i32_s
  i64.shl
  global.set $~lib/util/number/_frc_minus
  local.get $4
  global.set $~lib/util/number/_exp
  i32.const 348
  i32.const -61
  global.get $~lib/util/number/_exp
  local.tee $4
  i32.sub
  f64.convert_i32_s
  f64.const 0.30102999566398114
  f64.mul
  f64.const 347
  f64.add
  local.tee $0
  i32.trunc_f64_s
  local.tee $5
  local.get $0
  local.get $5
  f64.convert_i32_s
  f64.ne
  i32.add
  i32.const 3
  i32.shr_s
  i32.const 1
  i32.add
  local.tee $5
  i32.const 3
  i32.shl
  local.tee $9
  i32.sub
  global.set $~lib/util/number/_K
  local.get $9
  i32.const 4440
  i32.add
  i64.load
  global.set $~lib/util/number/_frc_pow
  local.get $5
  i32.const 1
  i32.shl
  i32.const 5136
  i32.add
  i32.load16_s
  global.set $~lib/util/number/_exp_pow
  global.get $~lib/util/number/_frc_pow
  local.tee $3
  i64.const 32
  i64.shr_u
  local.set $2
  local.get $3
  i64.const 4294967295
  i64.and
  local.tee $3
  global.get $~lib/util/number/_frc_plus
  local.tee $6
  i64.const 32
  i64.shr_u
  local.tee $11
  i64.mul
  local.get $3
  local.get $6
  i64.const 4294967295
  i64.and
  local.tee $12
  i64.mul
  i64.const 32
  i64.shr_u
  i64.add
  local.set $6
  local.get $8
  i32.const 1
  i32.shl
  i32.const 4384
  i32.add
  local.get $2
  local.get $1
  local.get $1
  i64.clz
  i32.wrap_i64
  local.tee $5
  i64.extend_i32_s
  i64.shl
  local.tee $1
  i64.const 32
  i64.shr_u
  local.tee $10
  i64.mul
  local.get $3
  local.get $10
  i64.mul
  local.get $3
  local.get $1
  i64.const 4294967295
  i64.and
  local.tee $1
  i64.mul
  i64.const 32
  i64.shr_u
  i64.add
  local.tee $10
  i64.const 32
  i64.shr_u
  i64.add
  local.get $1
  local.get $2
  i64.mul
  local.get $10
  i64.const 4294967295
  i64.and
  i64.add
  i64.const 2147483647
  i64.add
  i64.const 32
  i64.shr_u
  i64.add
  global.get $~lib/util/number/_exp_pow
  local.tee $9
  local.get $7
  local.get $5
  i32.sub
  i32.add
  i32.const -64
  i32.sub
  local.get $2
  local.get $11
  i64.mul
  local.get $6
  i64.const 32
  i64.shr_u
  i64.add
  local.get $2
  local.get $12
  i64.mul
  local.get $6
  i64.const 4294967295
  i64.and
  i64.add
  i64.const 2147483647
  i64.add
  i64.const 32
  i64.shr_u
  i64.add
  i64.const 1
  i64.sub
  local.tee $1
  local.get $4
  local.get $9
  i32.add
  i32.const -64
  i32.sub
  local.get $1
  local.get $2
  global.get $~lib/util/number/_frc_minus
  local.tee $1
  i64.const 32
  i64.shr_u
  local.tee $6
  i64.mul
  local.get $3
  local.get $6
  i64.mul
  local.get $3
  local.get $1
  i64.const 4294967295
  i64.and
  local.tee $3
  i64.mul
  i64.const 32
  i64.shr_u
  i64.add
  local.tee $1
  i64.const 32
  i64.shr_u
  i64.add
  local.get $2
  local.get $3
  i64.mul
  local.get $1
  i64.const 4294967295
  i64.and
  i64.add
  i64.const 2147483647
  i64.add
  i64.const 32
  i64.shr_u
  i64.add
  i64.const 1
  i64.add
  i64.sub
  local.get $8
  call $~lib/util/number/genDigits
  local.get $8
  i32.sub
  global.get $~lib/util/number/_K
  call $~lib/util/number/prettify
  local.get $8
  i32.add
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
  local.get $0
  local.get $2
  i32.const 1
  call $~lib/rt/itcms/__link
 )
 (func $~lib/string/String.__concat (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  block $__inlined_func$~lib/string/String#concat
   local.get $0
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.shl
   local.tee $3
   local.get $1
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.shl
   local.tee $4
   i32.add
   local.tee $2
   i32.eqz
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    i32.const 1632
    local.set $2
    br $__inlined_func$~lib/string/String#concat
   end
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.const 1
   call $~lib/rt/itcms/__new
   local.tee $2
   i32.store
   local.get $2
   local.get $0
   local.get $3
   call $~lib/memory/memory.copy
   local.get $2
   local.get $3
   i32.add
   local.get $1
   local.get $4
   call $~lib/memory/memory.copy
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
  end
  local.get $2
 )
 (func $~lib/util/string/strtol<f64> (param $0 i32) (result f64)
  (local $1 i32)
  (local $2 i32)
  (local $3 f64)
  (local $4 f64)
  (local $5 i32)
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
  local.tee $2
  i32.eqz
  if
   f64.const nan:0x8000000000000
   return
  end
  local.get $0
  i32.load16_u
  local.set $1
  loop $while-continue|0
   block $__inlined_func$~lib/util/string/isSpace (result i32)
    local.get $1
    i32.const 128
    i32.or
    i32.const 160
    i32.eq
    local.get $1
    i32.const 9
    i32.sub
    i32.const 4
    i32.le_u
    i32.or
    local.get $1
    i32.const 5760
    i32.lt_u
    br_if $__inlined_func$~lib/util/string/isSpace
    drop
    i32.const 1
    local.get $1
    i32.const -8192
    i32.add
    i32.const 10
    i32.le_u
    br_if $__inlined_func$~lib/util/string/isSpace
    drop
    block $break|0
     block $case6|0
      local.get $1
      i32.const 5760
      i32.eq
      br_if $case6|0
      local.get $1
      i32.const 8232
      i32.eq
      br_if $case6|0
      local.get $1
      i32.const 8233
      i32.eq
      br_if $case6|0
      local.get $1
      i32.const 8239
      i32.eq
      br_if $case6|0
      local.get $1
      i32.const 8287
      i32.eq
      br_if $case6|0
      local.get $1
      i32.const 12288
      i32.eq
      br_if $case6|0
      local.get $1
      i32.const 65279
      i32.eq
      br_if $case6|0
      br $break|0
     end
     i32.const 1
     br $__inlined_func$~lib/util/string/isSpace
    end
    i32.const 0
   end
   if
    local.get $0
    i32.const 2
    i32.add
    local.tee $0
    i32.load16_u
    local.set $1
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    br $while-continue|0
   end
  end
  f64.const 1
  local.set $3
  i32.const 1
  local.get $1
  i32.const 43
  i32.eq
  local.get $1
  i32.const 45
  i32.eq
  select
  if
   local.get $2
   i32.const 1
   i32.sub
   local.tee $2
   i32.eqz
   if
    f64.const nan:0x8000000000000
    return
   end
   f64.const -1
   f64.const 1
   local.get $1
   i32.const 45
   i32.eq
   select
   local.set $3
   local.get $0
   i32.const 2
   i32.add
   local.tee $0
   i32.load16_u
   local.set $1
  end
  local.get $2
  i32.const 2
  i32.gt_s
  i32.const 0
  local.get $1
  i32.const 48
  i32.eq
  select
  if
   block $break|1
    block $case2|1
     block $case1|1
      local.get $0
      i32.load16_u offset=2
      i32.const 32
      i32.or
      local.tee $1
      i32.const 98
      i32.ne
      if
       local.get $1
       i32.const 111
       i32.eq
       br_if $case1|1
       local.get $1
       i32.const 120
       i32.eq
       br_if $case2|1
       br $break|1
      end
      local.get $0
      i32.const 4
      i32.add
      local.set $0
      local.get $2
      i32.const 2
      i32.sub
      local.set $2
      i32.const 2
      local.set $5
      br $break|1
     end
     local.get $0
     i32.const 4
     i32.add
     local.set $0
     local.get $2
     i32.const 2
     i32.sub
     local.set $2
     i32.const 8
     local.set $5
     br $break|1
    end
    local.get $0
    i32.const 4
    i32.add
    local.set $0
    local.get $2
    i32.const 2
    i32.sub
    local.set $2
    i32.const 16
    local.set $5
   end
  end
  local.get $5
  i32.const 10
  local.get $5
  select
  local.set $5
  loop $while-continue|2
   block $while-break|2
    local.get $2
    local.tee $1
    i32.const 1
    i32.sub
    local.set $2
    local.get $1
    if
     local.get $5
     local.get $0
     i32.load16_u
     local.tee $1
     i32.const 48
     i32.sub
     i32.const 10
     i32.lt_u
     if (result i32)
      local.get $1
      i32.const 48
      i32.sub
     else
      local.get $1
      i32.const 65
      i32.sub
      i32.const 25
      i32.le_u
      if (result i32)
       local.get $1
       i32.const 55
       i32.sub
      else
       local.get $1
       i32.const 87
       i32.sub
       local.get $1
       local.get $1
       i32.const 97
       i32.sub
       i32.const 25
       i32.le_u
       select
      end
     end
     local.tee $1
     i32.le_u
     if
      local.get $4
      i64.reinterpret_f64
      i64.const 1
      i64.shl
      i64.const 2
      i64.sub
      i64.const -9007199254740994
      i64.gt_u
      if
       f64.const nan:0x8000000000000
       return
      end
      br $while-break|2
     end
     local.get $4
     local.get $5
     f64.convert_i32_s
     f64.mul
     local.get $1
     f64.convert_i32_u
     f64.add
     local.set $4
     local.get $0
     i32.const 2
     i32.add
     local.set $0
     br $while-continue|2
    end
   end
  end
  local.get $3
  local.get $4
  f64.mul
 )
 (func $~lib/math/ipow32 (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  i32.const 5
  local.set $1
  i32.const 1
  local.set $2
  local.get $0
  i32.const 0
  i32.le_s
  if
   local.get $0
   i32.eqz
   return
  else
   local.get $0
   i32.const 1
   i32.eq
   if
    i32.const 5
    return
   else
    local.get $0
    i32.const 2
    i32.eq
    if
     i32.const 25
     return
    else
     local.get $0
     i32.const 32
     i32.lt_s
     if
      block $break|0
       block $case4|0
        block $case3|0
         block $case2|0
          block $case1|0
           block $case0|0
            i32.const 31
            local.get $0
            i32.clz
            i32.sub
            br_table $case4|0 $case3|0 $case2|0 $case1|0 $case0|0 $break|0
           end
           i32.const 5
           i32.const 1
           local.get $0
           i32.const 1
           i32.and
           select
           local.set $2
           local.get $0
           i32.const 1
           i32.shr_u
           local.set $0
           i32.const 25
           local.set $1
          end
          local.get $1
          local.get $2
          i32.mul
          local.get $2
          local.get $0
          i32.const 1
          i32.and
          select
          local.set $2
          local.get $0
          i32.const 1
          i32.shr_u
          local.set $0
          local.get $1
          local.get $1
          i32.mul
          local.set $1
         end
         local.get $1
         local.get $2
         i32.mul
         local.get $2
         local.get $0
         i32.const 1
         i32.and
         select
         local.set $2
         local.get $0
         i32.const 1
         i32.shr_u
         local.set $0
         local.get $1
         local.get $1
         i32.mul
         local.set $1
        end
        local.get $1
        local.get $2
        i32.mul
        local.get $2
        local.get $0
        i32.const 1
        i32.and
        select
        local.set $2
        local.get $0
        i32.const 1
        i32.shr_u
        local.set $0
        local.get $1
        local.get $1
        i32.mul
        local.set $1
       end
       local.get $1
       local.get $2
       i32.mul
       local.get $2
       local.get $0
       i32.const 1
       i32.and
       select
       local.set $2
      end
      local.get $2
      return
     end
    end
   end
  end
  loop $while-continue|1
   local.get $0
   if
    local.get $1
    local.get $2
    i32.mul
    local.get $2
    local.get $0
    i32.const 1
    i32.and
    select
    local.set $2
    local.get $0
    i32.const 1
    i32.shr_u
    local.set $0
    local.get $1
    local.get $1
    i32.mul
    local.set $1
    br $while-continue|1
   end
  end
  local.get $2
 )
 (func $~lib/math/NativeMath.scalbn (param $0 f64) (param $1 i32) (result f64)
  local.get $1
  i32.const 1023
  i32.gt_s
  if (result f64)
   local.get $0
   f64.const 8988465674311579538646525e283
   f64.mul
   local.set $0
   local.get $1
   i32.const 1023
   i32.sub
   local.tee $1
   i32.const 1023
   i32.gt_s
   if (result f64)
    local.get $1
    i32.const 1023
    i32.sub
    local.tee $1
    i32.const 1023
    local.get $1
    i32.const 1023
    i32.lt_s
    select
    local.set $1
    local.get $0
    f64.const 8988465674311579538646525e283
    f64.mul
   else
    local.get $0
   end
  else
   local.get $1
   i32.const -1022
   i32.lt_s
   if (result f64)
    local.get $0
    f64.const 2.004168360008973e-292
    f64.mul
    local.set $0
    local.get $1
    i32.const 969
    i32.add
    local.tee $1
    i32.const -1022
    i32.lt_s
    if (result f64)
     local.get $1
     i32.const 969
     i32.add
     local.tee $1
     i32.const -1022
     local.get $1
     i32.const -1022
     i32.gt_s
     select
     local.set $1
     local.get $0
     f64.const 2.004168360008973e-292
     f64.mul
    else
     local.get $0
    end
   else
    local.get $0
   end
  end
  local.get $1
  i64.extend_i32_s
  i64.const 1023
  i64.add
  i64.const 52
  i64.shl
  f64.reinterpret_i64
  f64.mul
 )
 (func $~lib/util/string/strtod (result f64)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i64)
  (local $6 i32)
  (local $7 i32)
  (local $8 i64)
  (local $9 i64)
  (local $10 i64)
  (local $11 f64)
  (local $12 f64)
  (local $13 i32)
  (local $14 i64)
  i32.const 9504
  local.set $0
  block $folding-inner0
   i32.const 9500
   i32.load
   i32.const 1
   i32.shr_u
   local.tee $7
   i32.eqz
   br_if $folding-inner0
   i32.const 9504
   i32.load16_u
   local.set $6
   f64.const 1
   local.set $12
   loop $while-continue|0
    local.get $7
    if (result i32)
     block $__inlined_func$~lib/util/string/isSpace (result i32)
      local.get $6
      i32.const 128
      i32.or
      i32.const 160
      i32.eq
      local.get $6
      i32.const 9
      i32.sub
      i32.const 4
      i32.le_u
      i32.or
      local.get $6
      i32.const 5760
      i32.lt_u
      br_if $__inlined_func$~lib/util/string/isSpace
      drop
      i32.const 1
      local.get $6
      i32.const -8192
      i32.add
      i32.const 10
      i32.le_u
      br_if $__inlined_func$~lib/util/string/isSpace
      drop
      block $break|0
       block $case6|0
        local.get $6
        i32.const 5760
        i32.eq
        br_if $case6|0
        local.get $6
        i32.const 8232
        i32.eq
        br_if $case6|0
        local.get $6
        i32.const 8233
        i32.eq
        br_if $case6|0
        local.get $6
        i32.const 8239
        i32.eq
        br_if $case6|0
        local.get $6
        i32.const 8287
        i32.eq
        br_if $case6|0
        local.get $6
        i32.const 12288
        i32.eq
        br_if $case6|0
        local.get $6
        i32.const 65279
        i32.eq
        br_if $case6|0
        br $break|0
       end
       i32.const 1
       br $__inlined_func$~lib/util/string/isSpace
      end
      i32.const 0
     end
    else
     i32.const 0
    end
    if
     local.get $0
     i32.const 2
     i32.add
     local.tee $0
     i32.load16_u
     local.set $6
     local.get $7
     i32.const 1
     i32.sub
     local.set $7
     br $while-continue|0
    end
   end
   local.get $7
   i32.eqz
   br_if $folding-inner0
   local.get $6
   i32.const 45
   i32.eq
   if (result i32)
    local.get $7
    i32.const 1
    i32.sub
    local.tee $7
    i32.eqz
    br_if $folding-inner0
    f64.const -1
    local.set $12
    local.get $0
    i32.const 2
    i32.add
    local.tee $0
    i32.load16_u
   else
    local.get $6
    i32.const 43
    i32.eq
    if (result i32)
     local.get $7
     i32.const 1
     i32.sub
     local.tee $7
     i32.eqz
     br_if $folding-inner0
     local.get $0
     i32.const 2
     i32.add
     local.tee $0
     i32.load16_u
    else
     local.get $6
    end
   end
   local.tee $6
   i32.const 73
   i32.eq
   i32.const 0
   local.get $7
   i32.const 8
   i32.ge_s
   select
   if
    local.get $0
    i64.load
    i64.const 29555310648492105
    i64.eq
    if (result i32)
     local.get $0
     i64.load offset=8
     i64.const 34058970405077102
     i64.eq
    else
     i32.const 0
    end
    if
     local.get $12
     f64.const inf
     f64.mul
     return
    end
    br $folding-inner0
   end
   local.get $6
   i32.const 48
   i32.sub
   i32.const 10
   i32.ge_u
   i32.const 0
   local.get $6
   i32.const 46
   i32.ne
   select
   br_if $folding-inner0
   local.get $0
   local.set $2
   loop $while-continue|1
    local.get $6
    i32.const 48
    i32.eq
    if
     local.get $0
     i32.const 2
     i32.add
     local.tee $0
     i32.load16_u
     local.set $6
     local.get $7
     i32.const 1
     i32.sub
     local.set $7
     br $while-continue|1
    end
   end
   local.get $7
   i32.const 0
   i32.le_s
   if
    f64.const 0
    return
   end
   local.get $6
   i32.const 46
   i32.eq
   if
    local.get $0
    local.get $2
    i32.eq
    local.set $2
    local.get $0
    i32.const 2
    i32.add
    local.set $0
    i32.const 0
    local.get $2
    local.get $7
    i32.const 1
    i32.sub
    local.tee $7
    select
    br_if $folding-inner0
    i32.const 1
    local.set $13
    loop $for-loop|2
     local.get $0
     i32.load16_u
     local.tee $6
     i32.const 48
     i32.eq
     if
      local.get $7
      i32.const 1
      i32.sub
      local.set $7
      local.get $3
      i32.const 1
      i32.sub
      local.set $3
      local.get $0
      i32.const 2
      i32.add
      local.set $0
      br $for-loop|2
     end
    end
    local.get $7
    i32.const 0
    i32.le_s
    if
     f64.const 0
     return
    end
    local.get $6
    i32.const 48
    i32.sub
    i32.const 10
    i32.ge_u
    i32.const 0
    i32.const 0
    local.get $2
    local.get $3
    select
    select
    br_if $folding-inner0
   end
   local.get $6
   i32.const 48
   i32.sub
   local.set $2
   loop $for-loop|3
    i32.const 1
    local.get $13
    i32.eqz
    i32.const 0
    local.get $6
    i32.const 46
    i32.eq
    select
    local.get $2
    i32.const 10
    i32.lt_u
    select
    if
     block $for-break3
      local.get $2
      i32.const 10
      i32.lt_u
      if
       local.get $1
       i32.const 19
       i32.lt_s
       if (result i64)
        local.get $2
        i64.extend_i32_u
        local.get $5
        i64.const 10
        i64.mul
        i64.add
       else
        local.get $5
        local.get $2
        i32.eqz
        i32.eqz
        i64.extend_i32_u
        i64.or
       end
       local.set $5
       local.get $1
       i32.const 1
       i32.add
       local.set $1
      else
       local.get $1
       local.set $3
       i32.const 1
       local.set $13
      end
      local.get $7
      i32.const 1
      i32.sub
      local.tee $7
      i32.eqz
      br_if $for-break3
      local.get $0
      i32.const 2
      i32.add
      local.tee $0
      i32.load16_u
      local.tee $6
      i32.const 48
      i32.sub
      local.set $2
      br $for-loop|3
     end
    end
   end
   block $~lib/util/string/scientific|inlined.0 (result f64)
    f64.const 0
    i32.const 1
    local.get $3
    local.get $1
    local.get $13
    select
    i32.const 19
    local.get $1
    local.get $1
    i32.const 19
    i32.gt_s
    select
    i32.sub
    block $~lib/util/string/parseExp|inlined.0 (result i32)
     i32.const 1
     local.set $1
     i32.const 0
     local.get $0
     i32.load16_u
     i32.const 32
     i32.or
     i32.const 101
     i32.ne
     br_if $~lib/util/string/parseExp|inlined.0
     drop
     i32.const 0
     local.get $7
     i32.const 1
     i32.sub
     local.tee $2
     i32.eqz
     br_if $~lib/util/string/parseExp|inlined.0
     drop
     local.get $0
     i32.const 2
     i32.add
     local.tee $0
     i32.load16_u
     local.tee $3
     i32.const 45
     i32.eq
     if (result i32)
      i32.const 0
      local.get $2
      i32.const 1
      i32.sub
      local.tee $2
      i32.eqz
      br_if $~lib/util/string/parseExp|inlined.0
      drop
      i32.const -1
      local.set $1
      local.get $0
      i32.const 2
      i32.add
      local.tee $0
      i32.load16_u
     else
      local.get $3
      i32.const 43
      i32.eq
      if (result i32)
       i32.const 0
       local.get $2
       i32.const 1
       i32.sub
       local.tee $2
       i32.eqz
       br_if $~lib/util/string/parseExp|inlined.0
       drop
       local.get $0
       i32.const 2
       i32.add
       local.tee $0
       i32.load16_u
      else
       local.get $3
      end
     end
     local.set $3
     loop $while-continue|4
      local.get $3
      i32.const 48
      i32.eq
      if
       i32.const 0
       local.get $2
       i32.const 1
       i32.sub
       local.tee $2
       i32.eqz
       br_if $~lib/util/string/parseExp|inlined.0
       drop
       local.get $0
       i32.const 2
       i32.add
       local.tee $0
       i32.load16_u
       local.set $3
       br $while-continue|4
      end
     end
     local.get $3
     i32.const 48
     i32.sub
     local.set $3
     loop $for-loop|5
      local.get $3
      i32.const 10
      i32.lt_u
      i32.const 0
      local.get $2
      select
      if
       local.get $1
       i32.const 3200
       i32.mul
       local.get $4
       i32.const 3200
       i32.ge_s
       br_if $~lib/util/string/parseExp|inlined.0
       drop
       local.get $3
       local.get $4
       i32.const 10
       i32.mul
       i32.add
       local.set $4
       local.get $2
       i32.const 1
       i32.sub
       local.set $2
       local.get $0
       i32.const 2
       i32.add
       local.tee $0
       i32.load16_u
       i32.const 48
       i32.sub
       local.set $3
       br $for-loop|5
      end
     end
     local.get $1
     local.get $4
     i32.mul
    end
    i32.add
    local.tee $0
    i32.const -342
    i32.lt_s
    local.get $5
    i64.eqz
    select
    br_if $~lib/util/string/scientific|inlined.0
    drop
    f64.const inf
    local.get $0
    i32.const 308
    i32.gt_s
    br_if $~lib/util/string/scientific|inlined.0
    drop
    local.get $5
    f64.convert_i64_u
    local.tee $11
    local.get $0
    i32.eqz
    br_if $~lib/util/string/scientific|inlined.0
    drop
    local.get $0
    i32.const 37
    i32.le_s
    i32.const 0
    local.get $0
    i32.const 22
    i32.gt_s
    select
    if
     local.get $11
     local.get $0
     i32.const 3
     i32.shl
     i32.const 9344
     i32.add
     f64.load
     f64.mul
     local.set $11
     i32.const 22
     local.set $0
    end
    local.get $5
    i64.const 9007199254740991
    i64.le_u
    if (result i32)
     local.get $0
     i32.const 31
     i32.shr_s
     local.tee $1
     local.get $0
     local.get $1
     i32.add
     i32.xor
     i32.const 22
     i32.le_s
    else
     i32.const 0
    end
    if (result f64)
     local.get $0
     i32.const 0
     i32.gt_s
     if
      local.get $11
      local.get $0
      i32.const 3
      i32.shl
      i32.const 9520
      i32.add
      f64.load
      f64.mul
      br $~lib/util/string/scientific|inlined.0
     end
     local.get $11
     i32.const 0
     local.get $0
     i32.sub
     i32.const 3
     i32.shl
     i32.const 9520
     i32.add
     f64.load
     f64.div
    else
     local.get $0
     i32.const 0
     i32.lt_s
     if (result f64)
      local.get $5
      local.get $5
      i64.clz
      local.tee $8
      i64.shl
      local.set $5
      local.get $0
      local.tee $1
      i64.extend_i32_s
      local.get $8
      i64.sub
      local.set $14
      loop $for-loop|6
       local.get $1
       i32.const -14
       i32.le_s
       if
        local.get $5
        i64.const 6103515625
        i64.rem_u
        local.get $5
        i64.const 6103515625
        i64.div_u
        local.tee $5
        i64.clz
        local.tee $8
        i64.const 18
        i64.sub
        i64.shl
        f64.convert_i64_u
        f64.const 0.00004294967296
        f64.mul
        f64.nearest
        i64.trunc_f64_u
        local.get $5
        local.get $8
        i64.shl
        i64.add
        local.set $5
        local.get $14
        local.get $8
        i64.sub
        local.set $14
        local.get $1
        i32.const 14
        i32.add
        local.set $1
        br $for-loop|6
       end
      end
      local.get $5
      i32.const 0
      local.get $1
      i32.sub
      call $~lib/math/ipow32
      i64.extend_i32_s
      local.tee $10
      i64.div_u
      local.tee $8
      i64.clz
      local.set $9
      local.get $5
      local.get $10
      i64.rem_u
      f64.convert_i64_u
      i64.reinterpret_f64
      local.get $9
      i64.const 52
      i64.shl
      i64.add
      f64.reinterpret_i64
      local.get $10
      f64.convert_i64_u
      f64.div
      i64.trunc_f64_u
      local.get $8
      local.get $9
      i64.shl
      i64.add
      f64.convert_i64_u
      local.get $14
      local.get $9
      i64.sub
      i32.wrap_i64
      call $~lib/math/NativeMath.scalbn
     else
      local.get $5
      local.get $5
      i64.ctz
      local.tee $8
      i64.shr_u
      local.set $5
      local.get $8
      local.get $0
      local.tee $4
      i64.extend_i32_s
      i64.add
      global.set $~lib/util/string/__fixmulShift
      loop $for-loop|7
       local.get $4
       i32.const 13
       i32.ge_s
       if
        i64.const 32
        local.get $5
        i64.const 32
        i64.shr_u
        i64.const 1220703125
        i64.mul
        local.get $5
        i64.const 4294967295
        i64.and
        i64.const 1220703125
        i64.mul
        local.tee $9
        i64.const 32
        i64.shr_u
        i64.add
        local.tee $8
        i64.const 32
        i64.shr_u
        i32.wrap_i64
        i32.clz
        i64.extend_i32_u
        local.tee $10
        i64.sub
        local.tee $5
        global.get $~lib/util/string/__fixmulShift
        i64.add
        global.set $~lib/util/string/__fixmulShift
        local.get $9
        local.get $10
        i64.shl
        i64.const 31
        i64.shr_u
        i64.const 1
        i64.and
        local.get $8
        local.get $10
        i64.shl
        local.get $9
        i64.const 4294967295
        i64.and
        local.get $5
        i64.shr_u
        i64.or
        i64.add
        local.set $5
        local.get $4
        i32.const 13
        i32.sub
        local.set $4
        br $for-loop|7
       end
      end
      local.get $4
      call $~lib/math/ipow32
      i64.extend_i32_u
      local.tee $8
      local.get $5
      i64.const 4294967295
      i64.and
      i64.mul
      local.set $9
      i64.const 32
      local.get $8
      local.get $5
      i64.const 32
      i64.shr_u
      i64.mul
      local.get $9
      i64.const 32
      i64.shr_u
      i64.add
      local.tee $8
      i64.const 32
      i64.shr_u
      i32.wrap_i64
      i32.clz
      i64.extend_i32_u
      local.tee $10
      i64.sub
      local.tee $5
      global.get $~lib/util/string/__fixmulShift
      i64.add
      global.set $~lib/util/string/__fixmulShift
      local.get $9
      local.get $10
      i64.shl
      i64.const 31
      i64.shr_u
      i64.const 1
      i64.and
      local.get $8
      local.get $10
      i64.shl
      local.get $9
      i64.const 4294967295
      i64.and
      local.get $5
      i64.shr_u
      i64.or
      i64.add
      f64.convert_i64_u
      global.get $~lib/util/string/__fixmulShift
      i32.wrap_i64
      call $~lib/math/NativeMath.scalbn
     end
    end
   end
   local.get $12
   f64.copysign
   return
  end
  f64.const nan:0x8000000000000
 )
 (func $~lib/string/String.__eq (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  local.get $1
  i32.eq
  if
   i32.const 1
   return
  end
  local.get $1
  i32.eqz
  i32.const 1
  local.get $0
  select
  if
   i32.const 0
   return
  end
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
  local.tee $4
  local.get $1
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
  i32.ne
  if
   i32.const 0
   return
  end
  block $__inlined_func$~lib/util/string/compareImpl (result i32)
   local.get $0
   local.set $2
   local.get $1
   local.set $3
   local.get $4
   local.tee $0
   i32.const 4
   i32.ge_u
   if (result i32)
    local.get $2
    i32.const 7
    i32.and
    local.get $3
    i32.const 7
    i32.and
    i32.or
    i32.eqz
   else
    i32.const 0
   end
   if
    loop $do-continue|0
     local.get $2
     i64.load
     local.get $3
     i64.load
     i64.eq
     if
      local.get $2
      i32.const 8
      i32.add
      local.set $2
      local.get $3
      i32.const 8
      i32.add
      local.set $3
      local.get $0
      i32.const 4
      i32.sub
      local.tee $0
      i32.const 4
      i32.ge_u
      br_if $do-continue|0
     end
    end
   end
   loop $while-continue|1
    local.get $0
    local.tee $1
    i32.const 1
    i32.sub
    local.set $0
    local.get $1
    if
     local.get $2
     i32.load16_u
     local.tee $1
     local.get $3
     i32.load16_u
     local.tee $4
     i32.ne
     if
      local.get $1
      local.get $4
      i32.sub
      br $__inlined_func$~lib/util/string/compareImpl
     end
     local.get $2
     i32.const 2
     i32.add
     local.set $2
     local.get $3
     i32.const 2
     i32.add
     local.set $3
     br $while-continue|1
    end
   end
   i32.const 0
  end
  i32.eqz
 )
 (func $~lib/array/Array<~lib/string/String>#push (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $0
  i32.load offset=12
  local.tee $6
  i32.const 1
  i32.add
  local.tee $5
  local.set $2
  local.get $5
  local.get $0
  i32.load offset=8
  local.tee $4
  i32.const 2
  i32.shr_u
  i32.gt_u
  if
   local.get $2
   i32.const 268435455
   i32.gt_u
   if
    i32.const 10160
    i32.const 10208
    i32.const 17
    i32.const 48
    call $~lib/builtins/abort
    unreachable
   end
   local.get $4
   local.get $0
   i32.load
   local.tee $7
   local.get $4
   i32.const 1
   i32.shl
   local.tee $3
   i32.const 1073741820
   local.get $3
   i32.const 1073741820
   i32.lt_u
   select
   local.tee $3
   local.get $2
   i32.const 8
   local.get $2
   i32.const 8
   i32.gt_u
   select
   i32.const 2
   i32.shl
   local.tee $2
   local.get $2
   local.get $3
   i32.lt_u
   select
   local.tee $3
   call $~lib/rt/itcms/__renew
   local.tee $2
   i32.add
   local.get $3
   local.get $4
   i32.sub
   call $~lib/memory/memory.fill
   local.get $2
   local.get $7
   i32.ne
   if
    local.get $0
    local.get $2
    i32.store
    local.get $0
    local.get $2
    i32.store offset=4
    local.get $0
    local.get $2
    i32.const 0
    call $~lib/rt/itcms/__link
   end
   local.get $0
   local.get $3
   i32.store offset=8
  end
  local.get $0
  i32.load offset=4
  local.get $6
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
  local.get $5
  i32.store offset=12
 )
 (func $~lib/rt/itcms/__pin (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  if
   local.get $0
   i32.const 20
   i32.sub
   local.tee $1
   i32.load offset=4
   i32.const 3
   i32.and
   i32.const 3
   i32.eq
   if
    i32.const 12016
    i32.const 1120
    i32.const 337
    i32.const 7
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   call $~lib/rt/itcms/Object#unlink
   global.get $~lib/rt/itcms/pinSpace
   local.tee $3
   i32.load offset=8
   local.set $2
   local.get $1
   local.get $3
   i32.const 3
   i32.or
   i32.store offset=4
   local.get $1
   local.get $2
   i32.store offset=8
   local.get $2
   local.get $1
   local.get $2
   i32.load offset=4
   i32.const 3
   i32.and
   i32.or
   i32.store offset=4
   local.get $3
   local.get $1
   i32.store offset=8
  end
  local.get $0
 )
 (func $~lib/rt/itcms/__unpin (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.eqz
  if
   return
  end
  local.get $0
  i32.const 20
  i32.sub
  local.tee $0
  i32.load offset=4
  i32.const 3
  i32.and
  i32.const 3
  i32.ne
  if
   i32.const 12080
   i32.const 1120
   i32.const 351
   i32.const 5
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/state
  i32.const 1
  i32.eq
  if
   local.get $0
   call $~lib/rt/itcms/Object#makeGray
  else
   local.get $0
   call $~lib/rt/itcms/Object#unlink
   global.get $~lib/rt/itcms/fromSpace
   local.tee $2
   i32.load offset=8
   local.set $1
   local.get $0
   local.get $2
   global.get $~lib/rt/itcms/white
   i32.or
   i32.store offset=4
   local.get $0
   local.get $1
   i32.store offset=8
   local.get $1
   local.get $0
   local.get $1
   i32.load offset=4
   i32.const 3
   i32.and
   i32.or
   i32.store offset=4
   local.get $2
   local.get $0
   i32.store offset=8
  end
 )
 (func $~lib/rt/itcms/__collect
  global.get $~lib/rt/itcms/state
  i32.const 0
  i32.gt_s
  if
   loop $while-continue|0
    global.get $~lib/rt/itcms/state
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
   if
    call $~lib/rt/itcms/step
    drop
    br $while-continue|1
   end
  end
  global.get $~lib/rt/itcms/total
  i64.extend_i32_u
  i64.const 200
  i64.mul
  i64.const 100
  i64.div_u
  i32.wrap_i64
  i32.const 1024
  i32.add
  global.set $~lib/rt/itcms/threshold
 )
 (func $~lib/rt/__visit_members (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  block $folding-inner1
   block $folding-inner0
    block $invalid
     block $~lib/array/Array<i32>
      block $~lib/staticarray/StaticArray<~lib/string/String>
       block $~lib/string/String
        block $~lib/arraybuffer/ArrayBuffer
         local.get $0
         i32.const 8
         i32.sub
         i32.load
         br_table $~lib/arraybuffer/ArrayBuffer $~lib/string/String $folding-inner0 $folding-inner0 $folding-inner0 $folding-inner0 $~lib/staticarray/StaticArray<~lib/string/String> $folding-inner1 $~lib/array/Array<i32> $folding-inner1 $folding-inner1 $folding-inner1 $folding-inner1 $folding-inner1 $folding-inner1 $folding-inner1 $folding-inner1 $folding-inner1 $folding-inner1 $folding-inner1 $folding-inner1 $folding-inner1 $folding-inner1 $folding-inner1 $folding-inner1 $invalid
        end
        return
       end
       return
      end
      local.get $0
      local.get $0
      i32.const 20
      i32.sub
      i32.load offset=16
      i32.add
      local.set $1
      loop $while-continue|0
       local.get $0
       local.get $1
       i32.lt_u
       if
        local.get $0
        i32.load
        local.tee $2
        if
         local.get $2
         call $~lib/rt/itcms/__visit
        end
        local.get $0
        i32.const 4
        i32.add
        local.set $0
        br $while-continue|0
       end
      end
      return
     end
     local.get $0
     i32.load
     call $~lib/rt/itcms/__visit
     return
    end
    unreachable
   end
   local.get $0
   i32.load
   local.tee $0
   if
    local.get $0
    call $~lib/rt/itcms/__visit
   end
   return
  end
  local.get $0
  i32.load offset=4
  local.tee $1
  local.get $0
  i32.load offset=12
  i32.const 2
  i32.shl
  i32.add
  local.set $2
  loop $while-continue|00
   local.get $1
   local.get $2
   i32.lt_u
   if
    local.get $1
    i32.load
    local.tee $3
    if
     local.get $3
     call $~lib/rt/itcms/__visit
    end
    local.get $1
    i32.const 4
    i32.add
    local.set $1
    br $while-continue|00
   end
  end
  local.get $0
  i32.load
  call $~lib/rt/itcms/__visit
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
 (func $~lib/as-console/index/console.log<~lib/string/String> (param $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 0
   i32.store
   local.get $1
   i32.const 12
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i64.const 0
   i64.store
   local.get $1
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 1632
   i32.store
   local.get $1
   i32.const 1632
   call $~lib/as-string-sink/index/StringSink#constructor
   local.tee $1
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   i32.const 1664
   i32.store
   i32.const 1668
   local.get $0
   i32.store
   i32.const 1664
   local.get $0
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i32.const 1664
   i32.store
   local.get $0
   i32.const 1632
   i32.store offset=8
   i32.const 1664
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   local.get $1
   local.get $0
   call $~lib/as-string-sink/index/StringSink#write
   local.get $1
   call $~lib/as-string-sink/index/StringSink#toString
   local.set $0
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   local.get $0
   call $~lib/as-console/index/_log
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  i32.const 28736
  i32.const 28784
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/JSON/JSON.stringify<~lib/string/String> (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $1
  i64.const 0
  i64.store
  local.get $1
  i32.const 1968
  i32.store
  i32.const 1972
  local.get $0
  i32.store
  i32.const 1968
  local.get $0
  i32.const 1
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 1968
  i32.store
  local.get $0
  i32.const 1632
  i32.store offset=4
  i32.const 1968
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/JSON/JSON.stringify<i32> (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $1
  i64.const 0
  i64.store
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $1
  i32.const 2320
  i32.store
  local.get $0
  call $~lib/util/number/itoa32
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  i32.const 2324
  local.get $0
  i32.store
  i32.const 2320
  local.get $0
  i32.const 1
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 2320
  i32.store
  local.get $0
  i32.const 1632
  i32.store offset=8
  i32.const 2320
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/JSON/JSON.stringify<bool> (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $1
  i64.const 0
  i64.store
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $1
  i32.const 5552
  i32.store
  local.get $1
  i32.const 5584
  i32.const 5616
  local.get $0
  select
  local.tee $0
  i32.store offset=4
  i32.const 5556
  local.get $0
  i32.store
  i32.const 5552
  local.get $0
  i32.const 1
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 5552
  i32.store
  local.get $0
  i32.const 1632
  i32.store offset=8
  i32.const 5552
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/string/String>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  i64.const 0
  i64.store offset=8
  local.get $0
  i32.load offset=12
  i32.const 1
  i32.sub
  local.set $4
  local.get $2
  i32.const 6032
  i32.store
  local.get $2
  i32.const 6032
  call $~lib/as-string-sink/index/StringSink#constructor
  local.tee $2
  i32.store offset=4
  loop $for-loop|0
   local.get $3
   local.get $4
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 6096
    i32.store
    local.get $1
    local.get $0
    i32.load offset=4
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $1
    i32.store offset=8
    local.get $1
    call $assembly/JSON/JSON.stringify<~lib/string/String>
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    i32.const 6100
    local.get $1
    i32.store
    i32.const 6096
    local.get $1
    i32.const 1
    call $~lib/rt/itcms/__link
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 6096
    i32.store
    local.get $1
    i32.const 1632
    i32.store offset=12
    i32.const 6096
    call $~lib/staticarray/StaticArray<~lib/string/String>#join
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store
    local.get $2
    local.get $1
    call $~lib/as-string-sink/index/StringSink#write
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 6160
  i32.store
  local.get $3
  local.get $0
  i32.load offset=4
  local.get $4
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $0
  i32.store offset=8
  local.get $0
  call $assembly/JSON/JSON.stringify<~lib/string/String>
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  i32.const 6164
  local.get $0
  i32.store
  i32.const 6160
  local.get $0
  i32.const 1
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 6160
  i32.store
  local.get $0
  i32.const 1632
  i32.store offset=12
  i32.const 6160
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $2
  local.get $0
  call $~lib/as-string-sink/index/StringSink#write
  local.get $2
  call $~lib/as-string-sink/index/StringSink#toString
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/string/String>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  i64.const 0
  i64.store offset=8
  local.get $0
  i32.load offset=12
  i32.const 1
  i32.sub
  local.set $4
  local.get $2
  i32.const 6032
  i32.store
  local.get $2
  i32.const 6032
  call $~lib/as-string-sink/index/StringSink#constructor
  local.tee $2
  i32.store offset=4
  loop $for-loop|0
   local.get $3
   local.get $4
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 6480
    i32.store
    local.get $1
    local.get $0
    i32.load offset=4
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $1
    i32.store offset=8
    local.get $1
    call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/string/String>>
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    i32.const 6484
    local.get $1
    i32.store
    i32.const 6480
    local.get $1
    i32.const 1
    call $~lib/rt/itcms/__link
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 6480
    i32.store
    local.get $1
    i32.const 1632
    i32.store offset=12
    i32.const 6480
    call $~lib/staticarray/StaticArray<~lib/string/String>#join
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store
    local.get $2
    local.get $1
    call $~lib/as-string-sink/index/StringSink#write
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 6512
  i32.store
  local.get $3
  local.get $0
  i32.load offset=4
  local.get $4
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $0
  i32.store offset=8
  local.get $0
  call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/string/String>>
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  i32.const 6516
  local.get $0
  i32.store
  i32.const 6512
  local.get $0
  i32.const 1
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 6512
  i32.store
  local.get $0
  i32.const 1632
  i32.store offset=12
  i32.const 6512
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $2
  local.get $0
  call $~lib/as-string-sink/index/StringSink#write
  local.get $2
  call $~lib/as-string-sink/index/StringSink#toString
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  i64.const 0
  i64.store offset=8
  local.get $0
  i32.load offset=12
  i32.const 1
  i32.sub
  local.set $4
  local.get $2
  i32.const 6032
  i32.store
  local.get $2
  i32.const 6032
  call $~lib/as-string-sink/index/StringSink#constructor
  local.tee $2
  i32.store offset=4
  loop $for-loop|0
   local.get $3
   local.get $4
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7632
    i32.store
    local.get $1
    local.get $0
    i32.load offset=4
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $1
    i32.store offset=8
    local.get $1
    call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/string/String>>>
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    i32.const 7636
    local.get $1
    i32.store
    i32.const 7632
    local.get $1
    i32.const 1
    call $~lib/rt/itcms/__link
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7632
    i32.store
    local.get $1
    i32.const 1632
    i32.store offset=12
    i32.const 7632
    call $~lib/staticarray/StaticArray<~lib/string/String>#join
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store
    local.get $2
    local.get $1
    call $~lib/as-string-sink/index/StringSink#write
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 7664
  i32.store
  local.get $3
  local.get $0
  i32.load offset=4
  local.get $4
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $0
  i32.store offset=8
  local.get $0
  call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/string/String>>>
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  i32.const 7668
  local.get $0
  i32.store
  i32.const 7664
  local.get $0
  i32.const 1
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 7664
  i32.store
  local.get $0
  i32.const 1632
  i32.store offset=12
  i32.const 7664
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $2
  local.get $0
  call $~lib/as-string-sink/index/StringSink#write
  local.get $2
  call $~lib/as-string-sink/index/StringSink#toString
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  i64.const 0
  i64.store offset=8
  local.get $0
  i32.load offset=12
  i32.const 1
  i32.sub
  local.set $4
  local.get $2
  i32.const 6032
  i32.store
  local.get $2
  i32.const 6032
  call $~lib/as-string-sink/index/StringSink#constructor
  local.tee $2
  i32.store offset=4
  loop $for-loop|0
   local.get $3
   local.get $4
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7600
    i32.store
    local.get $1
    local.get $0
    i32.load offset=4
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $1
    i32.store offset=8
    local.get $1
    call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    i32.const 7604
    local.get $1
    i32.store
    i32.const 7600
    local.get $1
    i32.const 1
    call $~lib/rt/itcms/__link
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7600
    i32.store
    local.get $1
    i32.const 1632
    i32.store offset=12
    i32.const 7600
    call $~lib/staticarray/StaticArray<~lib/string/String>#join
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store
    local.get $2
    local.get $1
    call $~lib/as-string-sink/index/StringSink#write
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 7696
  i32.store
  local.get $3
  local.get $0
  i32.load offset=4
  local.get $4
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $0
  i32.store offset=8
  local.get $0
  call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  i32.const 7700
  local.get $0
  i32.store
  i32.const 7696
  local.get $0
  i32.const 1
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 7696
  i32.store
  local.get $0
  i32.const 1632
  i32.store offset=12
  i32.const 7696
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $2
  local.get $0
  call $~lib/as-string-sink/index/StringSink#write
  local.get $2
  call $~lib/as-string-sink/index/StringSink#toString
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  i64.const 0
  i64.store offset=8
  local.get $0
  i32.load offset=12
  i32.const 1
  i32.sub
  local.set $4
  local.get $2
  i32.const 6032
  i32.store
  local.get $2
  i32.const 6032
  call $~lib/as-string-sink/index/StringSink#constructor
  local.tee $2
  i32.store offset=4
  loop $for-loop|0
   local.get $3
   local.get $4
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7568
    i32.store
    local.get $1
    local.get $0
    i32.load offset=4
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $1
    i32.store offset=8
    local.get $1
    call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    i32.const 7572
    local.get $1
    i32.store
    i32.const 7568
    local.get $1
    i32.const 1
    call $~lib/rt/itcms/__link
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7568
    i32.store
    local.get $1
    i32.const 1632
    i32.store offset=12
    i32.const 7568
    call $~lib/staticarray/StaticArray<~lib/string/String>#join
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store
    local.get $2
    local.get $1
    call $~lib/as-string-sink/index/StringSink#write
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 7728
  i32.store
  local.get $3
  local.get $0
  i32.load offset=4
  local.get $4
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $0
  i32.store offset=8
  local.get $0
  call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  i32.const 7732
  local.get $0
  i32.store
  i32.const 7728
  local.get $0
  i32.const 1
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 7728
  i32.store
  local.get $0
  i32.const 1632
  i32.store offset=12
  i32.const 7728
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $2
  local.get $0
  call $~lib/as-string-sink/index/StringSink#write
  local.get $2
  call $~lib/as-string-sink/index/StringSink#toString
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  i64.const 0
  i64.store offset=8
  local.get $0
  i32.load offset=12
  i32.const 1
  i32.sub
  local.set $4
  local.get $2
  i32.const 6032
  i32.store
  local.get $2
  i32.const 6032
  call $~lib/as-string-sink/index/StringSink#constructor
  local.tee $2
  i32.store offset=4
  loop $for-loop|0
   local.get $3
   local.get $4
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7536
    i32.store
    local.get $1
    local.get $0
    i32.load offset=4
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $1
    i32.store offset=8
    local.get $1
    call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    i32.const 7540
    local.get $1
    i32.store
    i32.const 7536
    local.get $1
    i32.const 1
    call $~lib/rt/itcms/__link
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7536
    i32.store
    local.get $1
    i32.const 1632
    i32.store offset=12
    i32.const 7536
    call $~lib/staticarray/StaticArray<~lib/string/String>#join
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store
    local.get $2
    local.get $1
    call $~lib/as-string-sink/index/StringSink#write
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 7760
  i32.store
  local.get $3
  local.get $0
  i32.load offset=4
  local.get $4
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $0
  i32.store offset=8
  local.get $0
  call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  i32.const 7764
  local.get $0
  i32.store
  i32.const 7760
  local.get $0
  i32.const 1
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 7760
  i32.store
  local.get $0
  i32.const 1632
  i32.store offset=12
  i32.const 7760
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $2
  local.get $0
  call $~lib/as-string-sink/index/StringSink#write
  local.get $2
  call $~lib/as-string-sink/index/StringSink#toString
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  i64.const 0
  i64.store offset=8
  local.get $0
  i32.load offset=12
  i32.const 1
  i32.sub
  local.set $4
  local.get $2
  i32.const 6032
  i32.store
  local.get $2
  i32.const 6032
  call $~lib/as-string-sink/index/StringSink#constructor
  local.tee $2
  i32.store offset=4
  loop $for-loop|0
   local.get $3
   local.get $4
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7504
    i32.store
    local.get $1
    local.get $0
    i32.load offset=4
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $1
    i32.store offset=8
    local.get $1
    call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    i32.const 7508
    local.get $1
    i32.store
    i32.const 7504
    local.get $1
    i32.const 1
    call $~lib/rt/itcms/__link
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7504
    i32.store
    local.get $1
    i32.const 1632
    i32.store offset=12
    i32.const 7504
    call $~lib/staticarray/StaticArray<~lib/string/String>#join
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store
    local.get $2
    local.get $1
    call $~lib/as-string-sink/index/StringSink#write
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 7792
  i32.store
  local.get $3
  local.get $0
  i32.load offset=4
  local.get $4
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $0
  i32.store offset=8
  local.get $0
  call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  i32.const 7796
  local.get $0
  i32.store
  i32.const 7792
  local.get $0
  i32.const 1
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 7792
  i32.store
  local.get $0
  i32.const 1632
  i32.store offset=12
  i32.const 7792
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $2
  local.get $0
  call $~lib/as-string-sink/index/StringSink#write
  local.get $2
  call $~lib/as-string-sink/index/StringSink#toString
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  i64.const 0
  i64.store offset=8
  local.get $0
  i32.load offset=12
  i32.const 1
  i32.sub
  local.set $4
  local.get $2
  i32.const 6032
  i32.store
  local.get $2
  i32.const 6032
  call $~lib/as-string-sink/index/StringSink#constructor
  local.tee $2
  i32.store offset=4
  loop $for-loop|0
   local.get $3
   local.get $4
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7472
    i32.store
    local.get $1
    local.get $0
    i32.load offset=4
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $1
    i32.store offset=8
    local.get $1
    call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    i32.const 7476
    local.get $1
    i32.store
    i32.const 7472
    local.get $1
    i32.const 1
    call $~lib/rt/itcms/__link
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7472
    i32.store
    local.get $1
    i32.const 1632
    i32.store offset=12
    i32.const 7472
    call $~lib/staticarray/StaticArray<~lib/string/String>#join
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store
    local.get $2
    local.get $1
    call $~lib/as-string-sink/index/StringSink#write
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 7824
  i32.store
  local.get $3
  local.get $0
  i32.load offset=4
  local.get $4
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $0
  i32.store offset=8
  local.get $0
  call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  i32.const 7828
  local.get $0
  i32.store
  i32.const 7824
  local.get $0
  i32.const 1
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 7824
  i32.store
  local.get $0
  i32.const 1632
  i32.store offset=12
  i32.const 7824
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $2
  local.get $0
  call $~lib/as-string-sink/index/StringSink#write
  local.get $2
  call $~lib/as-string-sink/index/StringSink#toString
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  i64.const 0
  i64.store offset=8
  local.get $0
  i32.load offset=12
  i32.const 1
  i32.sub
  local.set $4
  local.get $2
  i32.const 6032
  i32.store
  local.get $2
  i32.const 6032
  call $~lib/as-string-sink/index/StringSink#constructor
  local.tee $2
  i32.store offset=4
  loop $for-loop|0
   local.get $3
   local.get $4
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7440
    i32.store
    local.get $1
    local.get $0
    i32.load offset=4
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $1
    i32.store offset=8
    local.get $1
    call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    i32.const 7444
    local.get $1
    i32.store
    i32.const 7440
    local.get $1
    i32.const 1
    call $~lib/rt/itcms/__link
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7440
    i32.store
    local.get $1
    i32.const 1632
    i32.store offset=12
    i32.const 7440
    call $~lib/staticarray/StaticArray<~lib/string/String>#join
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store
    local.get $2
    local.get $1
    call $~lib/as-string-sink/index/StringSink#write
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 7856
  i32.store
  local.get $3
  local.get $0
  i32.load offset=4
  local.get $4
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $0
  i32.store offset=8
  local.get $0
  call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  i32.const 7860
  local.get $0
  i32.store
  i32.const 7856
  local.get $0
  i32.const 1
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 7856
  i32.store
  local.get $0
  i32.const 1632
  i32.store offset=12
  i32.const 7856
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $2
  local.get $0
  call $~lib/as-string-sink/index/StringSink#write
  local.get $2
  call $~lib/as-string-sink/index/StringSink#toString
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  i64.const 0
  i64.store offset=8
  local.get $0
  i32.load offset=12
  i32.const 1
  i32.sub
  local.set $4
  local.get $2
  i32.const 6032
  i32.store
  local.get $2
  i32.const 6032
  call $~lib/as-string-sink/index/StringSink#constructor
  local.tee $2
  i32.store offset=4
  loop $for-loop|0
   local.get $3
   local.get $4
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7408
    i32.store
    local.get $1
    local.get $0
    i32.load offset=4
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $1
    i32.store offset=8
    local.get $1
    call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    i32.const 7412
    local.get $1
    i32.store
    i32.const 7408
    local.get $1
    i32.const 1
    call $~lib/rt/itcms/__link
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7408
    i32.store
    local.get $1
    i32.const 1632
    i32.store offset=12
    i32.const 7408
    call $~lib/staticarray/StaticArray<~lib/string/String>#join
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store
    local.get $2
    local.get $1
    call $~lib/as-string-sink/index/StringSink#write
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 7888
  i32.store
  local.get $3
  local.get $0
  i32.load offset=4
  local.get $4
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $0
  i32.store offset=8
  local.get $0
  call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  i32.const 7892
  local.get $0
  i32.store
  i32.const 7888
  local.get $0
  i32.const 1
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 7888
  i32.store
  local.get $0
  i32.const 1632
  i32.store offset=12
  i32.const 7888
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $2
  local.get $0
  call $~lib/as-string-sink/index/StringSink#write
  local.get $2
  call $~lib/as-string-sink/index/StringSink#toString
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  i64.const 0
  i64.store offset=8
  local.get $0
  i32.load offset=12
  i32.const 1
  i32.sub
  local.set $4
  local.get $2
  i32.const 6032
  i32.store
  local.get $2
  i32.const 6032
  call $~lib/as-string-sink/index/StringSink#constructor
  local.tee $2
  i32.store offset=4
  loop $for-loop|0
   local.get $3
   local.get $4
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7376
    i32.store
    local.get $1
    local.get $0
    i32.load offset=4
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $1
    i32.store offset=8
    local.get $1
    call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    i32.const 7380
    local.get $1
    i32.store
    i32.const 7376
    local.get $1
    i32.const 1
    call $~lib/rt/itcms/__link
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7376
    i32.store
    local.get $1
    i32.const 1632
    i32.store offset=12
    i32.const 7376
    call $~lib/staticarray/StaticArray<~lib/string/String>#join
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store
    local.get $2
    local.get $1
    call $~lib/as-string-sink/index/StringSink#write
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 7920
  i32.store
  local.get $3
  local.get $0
  i32.load offset=4
  local.get $4
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $0
  i32.store offset=8
  local.get $0
  call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  i32.const 7924
  local.get $0
  i32.store
  i32.const 7920
  local.get $0
  i32.const 1
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 7920
  i32.store
  local.get $0
  i32.const 1632
  i32.store offset=12
  i32.const 7920
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $2
  local.get $0
  call $~lib/as-string-sink/index/StringSink#write
  local.get $2
  call $~lib/as-string-sink/index/StringSink#toString
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  i64.const 0
  i64.store offset=8
  local.get $0
  i32.load offset=12
  i32.const 1
  i32.sub
  local.set $4
  local.get $2
  i32.const 6032
  i32.store
  local.get $2
  i32.const 6032
  call $~lib/as-string-sink/index/StringSink#constructor
  local.tee $2
  i32.store offset=4
  loop $for-loop|0
   local.get $3
   local.get $4
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7344
    i32.store
    local.get $1
    local.get $0
    i32.load offset=4
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $1
    i32.store offset=8
    local.get $1
    call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>>
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    i32.const 7348
    local.get $1
    i32.store
    i32.const 7344
    local.get $1
    i32.const 1
    call $~lib/rt/itcms/__link
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7344
    i32.store
    local.get $1
    i32.const 1632
    i32.store offset=12
    i32.const 7344
    call $~lib/staticarray/StaticArray<~lib/string/String>#join
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store
    local.get $2
    local.get $1
    call $~lib/as-string-sink/index/StringSink#write
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 7952
  i32.store
  local.get $3
  local.get $0
  i32.load offset=4
  local.get $4
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $0
  i32.store offset=8
  local.get $0
  call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>>
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  i32.const 7956
  local.get $0
  i32.store
  i32.const 7952
  local.get $0
  i32.const 1
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 7952
  i32.store
  local.get $0
  i32.const 1632
  i32.store offset=12
  i32.const 7952
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $2
  local.get $0
  call $~lib/as-string-sink/index/StringSink#write
  local.get $2
  call $~lib/as-string-sink/index/StringSink#toString
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  i64.const 0
  i64.store offset=8
  local.get $0
  i32.load offset=12
  i32.const 1
  i32.sub
  local.set $4
  local.get $2
  i32.const 6032
  i32.store
  local.get $2
  i32.const 6032
  call $~lib/as-string-sink/index/StringSink#constructor
  local.tee $2
  i32.store offset=4
  loop $for-loop|0
   local.get $3
   local.get $4
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7312
    i32.store
    local.get $1
    local.get $0
    i32.load offset=4
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $1
    i32.store offset=8
    local.get $1
    call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>>>
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    i32.const 7316
    local.get $1
    i32.store
    i32.const 7312
    local.get $1
    i32.const 1
    call $~lib/rt/itcms/__link
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7312
    i32.store
    local.get $1
    i32.const 1632
    i32.store offset=12
    i32.const 7312
    call $~lib/staticarray/StaticArray<~lib/string/String>#join
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store
    local.get $2
    local.get $1
    call $~lib/as-string-sink/index/StringSink#write
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 7984
  i32.store
  local.get $3
  local.get $0
  i32.load offset=4
  local.get $4
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $0
  i32.store offset=8
  local.get $0
  call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>>>
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  i32.const 7988
  local.get $0
  i32.store
  i32.const 7984
  local.get $0
  i32.const 1
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 7984
  i32.store
  local.get $0
  i32.const 1632
  i32.store offset=12
  i32.const 7984
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $2
  local.get $0
  call $~lib/as-string-sink/index/StringSink#write
  local.get $2
  call $~lib/as-string-sink/index/StringSink#toString
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>>>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  i64.const 0
  i64.store offset=8
  local.get $0
  i32.load offset=12
  i32.const 1
  i32.sub
  local.set $4
  local.get $2
  i32.const 6032
  i32.store
  local.get $2
  i32.const 6032
  call $~lib/as-string-sink/index/StringSink#constructor
  local.tee $2
  i32.store offset=4
  loop $for-loop|0
   local.get $3
   local.get $4
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7280
    i32.store
    local.get $1
    local.get $0
    i32.load offset=4
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $1
    i32.store offset=8
    local.get $1
    call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>>>>
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    i32.const 7284
    local.get $1
    i32.store
    i32.const 7280
    local.get $1
    i32.const 1
    call $~lib/rt/itcms/__link
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7280
    i32.store
    local.get $1
    i32.const 1632
    i32.store offset=12
    i32.const 7280
    call $~lib/staticarray/StaticArray<~lib/string/String>#join
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store
    local.get $2
    local.get $1
    call $~lib/as-string-sink/index/StringSink#write
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 8016
  i32.store
  local.get $3
  local.get $0
  i32.load offset=4
  local.get $4
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $0
  i32.store offset=8
  local.get $0
  call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>>>>
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  i32.const 8020
  local.get $0
  i32.store
  i32.const 8016
  local.get $0
  i32.const 1
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 8016
  i32.store
  local.get $0
  i32.const 1632
  i32.store offset=12
  i32.const 8016
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $2
  local.get $0
  call $~lib/as-string-sink/index/StringSink#write
  local.get $2
  call $~lib/as-string-sink/index/StringSink#toString
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>>>>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  i64.const 0
  i64.store offset=8
  local.get $0
  i32.load offset=12
  i32.const 1
  i32.sub
  local.set $4
  local.get $2
  i32.const 6032
  i32.store
  local.get $2
  i32.const 6032
  call $~lib/as-string-sink/index/StringSink#constructor
  local.tee $2
  i32.store offset=4
  loop $for-loop|0
   local.get $3
   local.get $4
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7248
    i32.store
    local.get $1
    local.get $0
    i32.load offset=4
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $1
    i32.store offset=8
    local.get $1
    call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>>>>>
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    i32.const 7252
    local.get $1
    i32.store
    i32.const 7248
    local.get $1
    i32.const 1
    call $~lib/rt/itcms/__link
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 7248
    i32.store
    local.get $1
    i32.const 1632
    i32.store offset=12
    i32.const 7248
    call $~lib/staticarray/StaticArray<~lib/string/String>#join
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store
    local.get $2
    local.get $1
    call $~lib/as-string-sink/index/StringSink#write
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 8048
  i32.store
  local.get $3
  local.get $0
  i32.load offset=4
  local.get $4
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $0
  i32.store offset=8
  local.get $0
  call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>>>>>
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  i32.const 8052
  local.get $0
  i32.store
  i32.const 8048
  local.get $0
  i32.const 1
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 8048
  i32.store
  local.get $0
  i32.const 1632
  i32.store offset=12
  i32.const 8048
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $2
  local.get $0
  call $~lib/as-string-sink/index/StringSink#write
  local.get $2
  call $~lib/as-string-sink/index/StringSink#toString
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/test/NameAge#__encode (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 52
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i64.const 0
  i64.store
  local.get $3
  i64.const 0
  i64.store offset=8
  local.get $3
  i64.const 0
  i64.store offset=16
  local.get $3
  i64.const 0
  i64.store offset=24
  local.get $3
  i64.const 0
  i64.store offset=32
  local.get $3
  i64.const 0
  i64.store offset=40
  local.get $3
  i32.const 0
  i32.store offset=48
  local.get $3
  i32.const 1632
  i32.store
  local.get $3
  i32.const 1632
  i32.store offset=44
  local.get $3
  i32.const 1936
  i32.store offset=48
  i32.const 1632
  i32.const 1936
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  local.get $1
  i32.store offset=36
  local.get $2
  i32.const 8576
  i32.store offset=40
  local.get $1
  i32.const 8576
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  local.get $1
  i32.store offset=28
  local.get $2
  i32.const 1936
  i32.store offset=32
  local.get $1
  i32.const 1936
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  local.get $1
  i32.store offset=20
  local.get $2
  i32.const 8320
  i32.store offset=24
  local.get $1
  i32.const 8320
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  local.get $1
  i32.store offset=12
  local.get $2
  local.get $0
  i32.load
  local.tee $2
  i32.store offset=20
  local.get $2
  call $assembly/JSON/JSON.stringify<~lib/string/String>
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=16
  local.get $1
  local.get $2
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  local.get $1
  i32.store offset=4
  local.get $2
  i32.const 6064
  i32.store offset=8
  local.get $1
  i32.const 6064
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $3
  i32.const 1632
  local.get $1
  call $~lib/string/String.__concat
  local.tee $2
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 1632
  i32.store offset=44
  local.get $3
  i32.const 1936
  i32.store offset=48
  i32.const 1632
  i32.const 1936
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.tee $4
  local.get $1
  i32.store offset=36
  local.get $4
  i32.const 8608
  i32.store offset=40
  local.get $1
  i32.const 8608
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.tee $4
  local.get $1
  i32.store offset=28
  local.get $4
  i32.const 1936
  i32.store offset=32
  local.get $1
  i32.const 1936
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.tee $4
  local.get $1
  i32.store offset=20
  local.get $4
  i32.const 8320
  i32.store offset=24
  local.get $1
  i32.const 8320
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=12
  local.get $0
  i32.load offset=4
  call $assembly/JSON/JSON.stringify<i32>
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=16
  local.get $1
  local.get $0
  call $~lib/string/String.__concat
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.tee $1
  local.get $0
  i32.store offset=4
  local.get $1
  i32.const 6064
  i32.store offset=8
  local.get $0
  i32.const 6064
  call $~lib/string/String.__concat
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $3
  local.get $2
  local.get $0
  call $~lib/string/String.__concat
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 52
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/JSON/parseStringArray (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  i64.const 0
  i64.store offset=8
  local.get $2
  call $~lib/array/Array<~lib/string/String>#constructor
  local.tee $5
  i32.store
  i32.const 2
  local.set $2
  loop $for-loop|0
   local.get $2
   local.get $0
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.sub
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.get $0
    local.get $2
    call $~lib/string/String#charAt
    local.tee $4
    i32.store offset=4
    global.get $~lib/memory/__stack_pointer
    i32.const 6064
    i32.store offset=8
    local.get $4
    i32.const 6064
    call $~lib/string/String.__eq
    if (result i32)
     global.get $~lib/memory/__stack_pointer
     i32.const 10256
     i32.store offset=8
     local.get $3
     i32.const 10256
     call $~lib/string/String.__eq
     i32.eqz
    else
     i32.const 0
    end
    if
     local.get $0
     local.get $1
     i32.const 2
     i32.add
     local.get $2
     i32.const 1
     i32.sub
     call $~lib/string/String#slice
     local.set $1
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.store offset=8
     local.get $5
     local.get $1
     call $~lib/array/Array<~lib/string/String>#push
     local.get $2
     local.set $1
    end
    global.get $~lib/memory/__stack_pointer
    local.get $0
    local.get $2
    call $~lib/string/String#charAt
    local.tee $3
    i32.store offset=12
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $for-loop|0
   end
  end
  local.get $0
  local.get $1
  i32.const 2
  i32.add
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
  i32.const 2
  i32.sub
  call $~lib/string/String#slice
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  local.get $5
  local.get $0
  call $~lib/array/Array<~lib/string/String>#push
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $5
 )
 (func $assembly/JSON/parseArrayArray<~lib/array/Array<~lib/array/Array<~lib/string/String>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i64.const 0
   i64.store
   local.get $1
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 8
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $3
   i64.const 0
   i64.store
   local.get $3
   i32.const 16
   i32.const 9
   call $~lib/rt/itcms/__new
   local.tee $3
   i32.store
   local.get $3
   i32.const 0
   i32.store
   local.get $3
   i32.const 0
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $3
   i32.const 0
   i32.store offset=4
   local.get $3
   i32.const 0
   i32.store offset=8
   local.get $3
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 32
   i32.const 0
   call $~lib/rt/itcms/__new
   local.tee $2
   i32.store offset=4
   local.get $2
   i32.const 32
   call $~lib/memory/memory.fill
   local.get $3
   local.get $2
   i32.store
   local.get $3
   local.get $2
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $3
   local.get $2
   i32.store offset=4
   local.get $3
   i32.const 32
   i32.store offset=8
   local.get $3
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $1
   local.get $3
   i32.store
   i32.const -1
   local.set $1
   i32.const 1
   local.set $2
   loop $for-loop|0
    local.get $2
    local.get $0
    i32.const 20
    i32.sub
    i32.load offset=16
    i32.const 1
    i32.shr_u
    i32.const 1
    i32.sub
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     local.get $2
     call $~lib/string/String#charAt
     local.tee $6
     i32.store offset=4
     global.get $~lib/memory/__stack_pointer
     i32.const 6032
     i32.store offset=8
     local.get $4
     i32.const 1
     i32.add
     local.get $4
     local.get $6
     i32.const 6032
     call $~lib/string/String.__eq
     select
     local.set $4
     global.get $~lib/memory/__stack_pointer
     i32.const 6128
     i32.store offset=8
     local.get $4
     local.get $5
     i32.const 1
     i32.add
     local.get $5
     local.get $6
     i32.const 6128
     call $~lib/string/String.__eq
     select
     local.tee $5
     i32.eq
     i32.const 0
     local.get $4
     i32.const 0
     i32.gt_s
     select
     if
      local.get $0
      local.get $1
      i32.const 2
      i32.add
      local.get $2
      i32.const 1
      i32.add
      call $~lib/string/String#slice
      local.set $1
      global.get $~lib/memory/__stack_pointer
      local.get $1
      i32.store offset=8
      local.get $1
      call $assembly/JSON/parseStringArray
      local.set $1
      global.get $~lib/memory/__stack_pointer
      local.get $1
      i32.store offset=8
      local.get $3
      local.get $1
      call $~lib/array/Array<~lib/string/String>#push
      i32.const 0
      local.set $4
      i32.const 0
      local.set $5
      local.get $2
      local.set $1
     end
     local.get $2
     i32.const 1
     i32.add
     local.set $2
     br $for-loop|0
    end
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $3
   return
  end
  i32.const 28736
  i32.const 28784
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/JSON/parseArrayArray<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
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
  block $folding-inner1
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $4
   i64.const 0
   i64.store
   local.get $4
   i32.const 0
   i32.store offset=8
   local.get $4
   i32.const 8
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $3
   i64.const 0
   i64.store
   local.get $3
   i32.const 16
   i32.const 11
   call $~lib/rt/itcms/__new
   local.tee $5
   i32.store
   local.get $5
   i32.const 0
   i32.store
   local.get $5
   i32.const 0
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $5
   i32.const 0
   i32.store offset=4
   local.get $5
   i32.const 0
   i32.store offset=8
   local.get $5
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 32
   i32.const 0
   call $~lib/rt/itcms/__new
   local.tee $3
   i32.store offset=4
   local.get $3
   i32.const 32
   call $~lib/memory/memory.fill
   local.get $5
   local.get $3
   i32.store
   local.get $5
   local.get $3
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $5
   local.get $3
   i32.store offset=4
   local.get $5
   i32.const 32
   i32.store offset=8
   local.get $5
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   local.get $5
   i32.store
   i32.const -1
   local.set $3
   i32.const 1
   local.set $4
   loop $for-loop|0
    local.get $4
    local.get $0
    i32.const 20
    i32.sub
    i32.load offset=16
    i32.const 1
    i32.shr_u
    i32.const 1
    i32.sub
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     local.get $4
     call $~lib/string/String#charAt
     local.tee $2
     i32.store offset=4
     global.get $~lib/memory/__stack_pointer
     i32.const 6032
     i32.store offset=8
     local.get $1
     i32.const 1
     i32.add
     local.get $1
     local.get $2
     i32.const 6032
     call $~lib/string/String.__eq
     select
     local.set $1
     global.get $~lib/memory/__stack_pointer
     i32.const 6128
     i32.store offset=8
     local.get $1
     local.get $6
     i32.const 1
     i32.add
     local.get $6
     local.get $2
     i32.const 6128
     call $~lib/string/String.__eq
     select
     local.tee $6
     i32.eq
     i32.const 0
     local.get $1
     i32.const 0
     i32.gt_s
     select
     if
      local.get $0
      local.get $3
      i32.const 2
      i32.add
      local.get $4
      i32.const 1
      i32.add
      call $~lib/string/String#slice
      local.set $6
      global.get $~lib/memory/__stack_pointer
      local.tee $3
      local.get $6
      i32.store offset=8
      i32.const 0
      local.set $7
      i32.const 0
      local.set $8
      local.get $3
      i32.const 12
      i32.sub
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      i32.const 12332
      i32.lt_s
      br_if $folding-inner1
      global.get $~lib/memory/__stack_pointer
      local.tee $2
      i64.const 0
      i64.store
      local.get $2
      i32.const 0
      i32.store offset=8
      local.get $2
      i32.const 8
      i32.sub
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      i32.const 12332
      i32.lt_s
      br_if $folding-inner1
      global.get $~lib/memory/__stack_pointer
      local.tee $3
      i64.const 0
      i64.store
      local.get $3
      i32.const 16
      i32.const 10
      call $~lib/rt/itcms/__new
      local.tee $3
      i32.store
      local.get $3
      i32.const 0
      i32.store
      local.get $3
      i32.const 0
      i32.const 0
      call $~lib/rt/itcms/__link
      local.get $3
      i32.const 0
      i32.store offset=4
      local.get $3
      i32.const 0
      i32.store offset=8
      local.get $3
      i32.const 0
      i32.store offset=12
      global.get $~lib/memory/__stack_pointer
      i32.const 32
      i32.const 0
      call $~lib/rt/itcms/__new
      local.tee $1
      i32.store offset=4
      local.get $1
      i32.const 32
      call $~lib/memory/memory.fill
      local.get $3
      local.get $1
      i32.store
      local.get $3
      local.get $1
      i32.const 0
      call $~lib/rt/itcms/__link
      local.get $3
      local.get $1
      i32.store offset=4
      local.get $3
      i32.const 32
      i32.store offset=8
      local.get $3
      i32.const 0
      i32.store offset=12
      global.get $~lib/memory/__stack_pointer
      i32.const 8
      i32.add
      global.set $~lib/memory/__stack_pointer
      local.get $2
      local.get $3
      i32.store
      i32.const -1
      local.set $2
      i32.const 1
      local.set $1
      loop $for-loop|01
       local.get $1
       local.get $6
       i32.const 20
       i32.sub
       i32.load offset=16
       i32.const 1
       i32.shr_u
       i32.const 1
       i32.sub
       i32.lt_s
       if
        global.get $~lib/memory/__stack_pointer
        local.get $6
        local.get $1
        call $~lib/string/String#charAt
        local.tee $9
        i32.store offset=4
        global.get $~lib/memory/__stack_pointer
        i32.const 6032
        i32.store offset=8
        local.get $7
        i32.const 1
        i32.add
        local.get $7
        local.get $9
        i32.const 6032
        call $~lib/string/String.__eq
        select
        local.set $7
        global.get $~lib/memory/__stack_pointer
        i32.const 6128
        i32.store offset=8
        local.get $7
        local.get $8
        i32.const 1
        i32.add
        local.get $8
        local.get $9
        i32.const 6128
        call $~lib/string/String.__eq
        select
        local.tee $8
        i32.eq
        i32.const 0
        local.get $7
        i32.const 0
        i32.gt_s
        select
        if
         local.get $6
         local.get $2
         i32.const 2
         i32.add
         local.get $1
         i32.const 1
         i32.add
         call $~lib/string/String#slice
         local.set $2
         global.get $~lib/memory/__stack_pointer
         local.get $2
         i32.store offset=8
         local.get $2
         call $assembly/JSON/parseArrayArray<~lib/array/Array<~lib/array/Array<~lib/string/String>>>
         local.set $2
         global.get $~lib/memory/__stack_pointer
         local.get $2
         i32.store offset=8
         local.get $3
         local.get $2
         call $~lib/array/Array<~lib/string/String>#push
         i32.const 0
         local.set $7
         i32.const 0
         local.set $8
         local.get $1
         local.set $2
        end
        local.get $1
        i32.const 1
        i32.add
        local.set $1
        br $for-loop|01
       end
      end
      global.get $~lib/memory/__stack_pointer
      i32.const 12
      i32.add
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.store offset=8
      local.get $5
      local.get $3
      call $~lib/array/Array<~lib/string/String>#push
      i32.const 0
      local.set $6
      local.get $4
      local.set $3
      i32.const 0
      local.set $1
     end
     local.get $4
     i32.const 1
     i32.add
     local.set $4
     br $for-loop|0
    end
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $5
   return
  end
  i32.const 28736
  i32.const 28784
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/JSON/parseArrayArray<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
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
  block $folding-inner1
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $4
   i64.const 0
   i64.store
   local.get $4
   i32.const 0
   i32.store offset=8
   local.get $4
   i32.const 8
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $3
   i64.const 0
   i64.store
   local.get $3
   i32.const 16
   i32.const 13
   call $~lib/rt/itcms/__new
   local.tee $5
   i32.store
   local.get $5
   i32.const 0
   i32.store
   local.get $5
   i32.const 0
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $5
   i32.const 0
   i32.store offset=4
   local.get $5
   i32.const 0
   i32.store offset=8
   local.get $5
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 32
   i32.const 0
   call $~lib/rt/itcms/__new
   local.tee $3
   i32.store offset=4
   local.get $3
   i32.const 32
   call $~lib/memory/memory.fill
   local.get $5
   local.get $3
   i32.store
   local.get $5
   local.get $3
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $5
   local.get $3
   i32.store offset=4
   local.get $5
   i32.const 32
   i32.store offset=8
   local.get $5
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   local.get $5
   i32.store
   i32.const -1
   local.set $3
   i32.const 1
   local.set $4
   loop $for-loop|0
    local.get $4
    local.get $0
    i32.const 20
    i32.sub
    i32.load offset=16
    i32.const 1
    i32.shr_u
    i32.const 1
    i32.sub
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     local.get $4
     call $~lib/string/String#charAt
     local.tee $2
     i32.store offset=4
     global.get $~lib/memory/__stack_pointer
     i32.const 6032
     i32.store offset=8
     local.get $1
     i32.const 1
     i32.add
     local.get $1
     local.get $2
     i32.const 6032
     call $~lib/string/String.__eq
     select
     local.set $1
     global.get $~lib/memory/__stack_pointer
     i32.const 6128
     i32.store offset=8
     local.get $1
     local.get $6
     i32.const 1
     i32.add
     local.get $6
     local.get $2
     i32.const 6128
     call $~lib/string/String.__eq
     select
     local.tee $6
     i32.eq
     i32.const 0
     local.get $1
     i32.const 0
     i32.gt_s
     select
     if
      local.get $0
      local.get $3
      i32.const 2
      i32.add
      local.get $4
      i32.const 1
      i32.add
      call $~lib/string/String#slice
      local.set $6
      global.get $~lib/memory/__stack_pointer
      local.tee $3
      local.get $6
      i32.store offset=8
      i32.const 0
      local.set $7
      i32.const 0
      local.set $8
      local.get $3
      i32.const 12
      i32.sub
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      i32.const 12332
      i32.lt_s
      br_if $folding-inner1
      global.get $~lib/memory/__stack_pointer
      local.tee $2
      i64.const 0
      i64.store
      local.get $2
      i32.const 0
      i32.store offset=8
      local.get $2
      i32.const 8
      i32.sub
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      i32.const 12332
      i32.lt_s
      br_if $folding-inner1
      global.get $~lib/memory/__stack_pointer
      local.tee $3
      i64.const 0
      i64.store
      local.get $3
      i32.const 16
      i32.const 12
      call $~lib/rt/itcms/__new
      local.tee $3
      i32.store
      local.get $3
      i32.const 0
      i32.store
      local.get $3
      i32.const 0
      i32.const 0
      call $~lib/rt/itcms/__link
      local.get $3
      i32.const 0
      i32.store offset=4
      local.get $3
      i32.const 0
      i32.store offset=8
      local.get $3
      i32.const 0
      i32.store offset=12
      global.get $~lib/memory/__stack_pointer
      i32.const 32
      i32.const 0
      call $~lib/rt/itcms/__new
      local.tee $1
      i32.store offset=4
      local.get $1
      i32.const 32
      call $~lib/memory/memory.fill
      local.get $3
      local.get $1
      i32.store
      local.get $3
      local.get $1
      i32.const 0
      call $~lib/rt/itcms/__link
      local.get $3
      local.get $1
      i32.store offset=4
      local.get $3
      i32.const 32
      i32.store offset=8
      local.get $3
      i32.const 0
      i32.store offset=12
      global.get $~lib/memory/__stack_pointer
      i32.const 8
      i32.add
      global.set $~lib/memory/__stack_pointer
      local.get $2
      local.get $3
      i32.store
      i32.const -1
      local.set $2
      i32.const 1
      local.set $1
      loop $for-loop|01
       local.get $1
       local.get $6
       i32.const 20
       i32.sub
       i32.load offset=16
       i32.const 1
       i32.shr_u
       i32.const 1
       i32.sub
       i32.lt_s
       if
        global.get $~lib/memory/__stack_pointer
        local.get $6
        local.get $1
        call $~lib/string/String#charAt
        local.tee $9
        i32.store offset=4
        global.get $~lib/memory/__stack_pointer
        i32.const 6032
        i32.store offset=8
        local.get $7
        i32.const 1
        i32.add
        local.get $7
        local.get $9
        i32.const 6032
        call $~lib/string/String.__eq
        select
        local.set $7
        global.get $~lib/memory/__stack_pointer
        i32.const 6128
        i32.store offset=8
        local.get $7
        local.get $8
        i32.const 1
        i32.add
        local.get $8
        local.get $9
        i32.const 6128
        call $~lib/string/String.__eq
        select
        local.tee $8
        i32.eq
        i32.const 0
        local.get $7
        i32.const 0
        i32.gt_s
        select
        if
         local.get $6
         local.get $2
         i32.const 2
         i32.add
         local.get $1
         i32.const 1
         i32.add
         call $~lib/string/String#slice
         local.set $2
         global.get $~lib/memory/__stack_pointer
         local.get $2
         i32.store offset=8
         local.get $2
         call $assembly/JSON/parseArrayArray<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>
         local.set $2
         global.get $~lib/memory/__stack_pointer
         local.get $2
         i32.store offset=8
         local.get $3
         local.get $2
         call $~lib/array/Array<~lib/string/String>#push
         i32.const 0
         local.set $7
         i32.const 0
         local.set $8
         local.get $1
         local.set $2
        end
        local.get $1
        i32.const 1
        i32.add
        local.set $1
        br $for-loop|01
       end
      end
      global.get $~lib/memory/__stack_pointer
      i32.const 12
      i32.add
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.store offset=8
      local.get $5
      local.get $3
      call $~lib/array/Array<~lib/string/String>#push
      i32.const 0
      local.set $6
      local.get $4
      local.set $3
      i32.const 0
      local.set $1
     end
     local.get $4
     i32.const 1
     i32.add
     local.set $4
     br $for-loop|0
    end
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $5
   return
  end
  i32.const 28736
  i32.const 28784
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/JSON/parseArrayArray<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
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
  block $folding-inner1
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $4
   i64.const 0
   i64.store
   local.get $4
   i32.const 0
   i32.store offset=8
   local.get $4
   i32.const 8
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $3
   i64.const 0
   i64.store
   local.get $3
   i32.const 16
   i32.const 15
   call $~lib/rt/itcms/__new
   local.tee $5
   i32.store
   local.get $5
   i32.const 0
   i32.store
   local.get $5
   i32.const 0
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $5
   i32.const 0
   i32.store offset=4
   local.get $5
   i32.const 0
   i32.store offset=8
   local.get $5
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 32
   i32.const 0
   call $~lib/rt/itcms/__new
   local.tee $3
   i32.store offset=4
   local.get $3
   i32.const 32
   call $~lib/memory/memory.fill
   local.get $5
   local.get $3
   i32.store
   local.get $5
   local.get $3
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $5
   local.get $3
   i32.store offset=4
   local.get $5
   i32.const 32
   i32.store offset=8
   local.get $5
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   local.get $5
   i32.store
   i32.const -1
   local.set $3
   i32.const 1
   local.set $4
   loop $for-loop|0
    local.get $4
    local.get $0
    i32.const 20
    i32.sub
    i32.load offset=16
    i32.const 1
    i32.shr_u
    i32.const 1
    i32.sub
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     local.get $4
     call $~lib/string/String#charAt
     local.tee $2
     i32.store offset=4
     global.get $~lib/memory/__stack_pointer
     i32.const 6032
     i32.store offset=8
     local.get $1
     i32.const 1
     i32.add
     local.get $1
     local.get $2
     i32.const 6032
     call $~lib/string/String.__eq
     select
     local.set $1
     global.get $~lib/memory/__stack_pointer
     i32.const 6128
     i32.store offset=8
     local.get $1
     local.get $6
     i32.const 1
     i32.add
     local.get $6
     local.get $2
     i32.const 6128
     call $~lib/string/String.__eq
     select
     local.tee $6
     i32.eq
     i32.const 0
     local.get $1
     i32.const 0
     i32.gt_s
     select
     if
      local.get $0
      local.get $3
      i32.const 2
      i32.add
      local.get $4
      i32.const 1
      i32.add
      call $~lib/string/String#slice
      local.set $6
      global.get $~lib/memory/__stack_pointer
      local.tee $3
      local.get $6
      i32.store offset=8
      i32.const 0
      local.set $7
      i32.const 0
      local.set $8
      local.get $3
      i32.const 12
      i32.sub
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      i32.const 12332
      i32.lt_s
      br_if $folding-inner1
      global.get $~lib/memory/__stack_pointer
      local.tee $2
      i64.const 0
      i64.store
      local.get $2
      i32.const 0
      i32.store offset=8
      local.get $2
      i32.const 8
      i32.sub
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      i32.const 12332
      i32.lt_s
      br_if $folding-inner1
      global.get $~lib/memory/__stack_pointer
      local.tee $3
      i64.const 0
      i64.store
      local.get $3
      i32.const 16
      i32.const 14
      call $~lib/rt/itcms/__new
      local.tee $3
      i32.store
      local.get $3
      i32.const 0
      i32.store
      local.get $3
      i32.const 0
      i32.const 0
      call $~lib/rt/itcms/__link
      local.get $3
      i32.const 0
      i32.store offset=4
      local.get $3
      i32.const 0
      i32.store offset=8
      local.get $3
      i32.const 0
      i32.store offset=12
      global.get $~lib/memory/__stack_pointer
      i32.const 32
      i32.const 0
      call $~lib/rt/itcms/__new
      local.tee $1
      i32.store offset=4
      local.get $1
      i32.const 32
      call $~lib/memory/memory.fill
      local.get $3
      local.get $1
      i32.store
      local.get $3
      local.get $1
      i32.const 0
      call $~lib/rt/itcms/__link
      local.get $3
      local.get $1
      i32.store offset=4
      local.get $3
      i32.const 32
      i32.store offset=8
      local.get $3
      i32.const 0
      i32.store offset=12
      global.get $~lib/memory/__stack_pointer
      i32.const 8
      i32.add
      global.set $~lib/memory/__stack_pointer
      local.get $2
      local.get $3
      i32.store
      i32.const -1
      local.set $2
      i32.const 1
      local.set $1
      loop $for-loop|01
       local.get $1
       local.get $6
       i32.const 20
       i32.sub
       i32.load offset=16
       i32.const 1
       i32.shr_u
       i32.const 1
       i32.sub
       i32.lt_s
       if
        global.get $~lib/memory/__stack_pointer
        local.get $6
        local.get $1
        call $~lib/string/String#charAt
        local.tee $9
        i32.store offset=4
        global.get $~lib/memory/__stack_pointer
        i32.const 6032
        i32.store offset=8
        local.get $7
        i32.const 1
        i32.add
        local.get $7
        local.get $9
        i32.const 6032
        call $~lib/string/String.__eq
        select
        local.set $7
        global.get $~lib/memory/__stack_pointer
        i32.const 6128
        i32.store offset=8
        local.get $7
        local.get $8
        i32.const 1
        i32.add
        local.get $8
        local.get $9
        i32.const 6128
        call $~lib/string/String.__eq
        select
        local.tee $8
        i32.eq
        i32.const 0
        local.get $7
        i32.const 0
        i32.gt_s
        select
        if
         local.get $6
         local.get $2
         i32.const 2
         i32.add
         local.get $1
         i32.const 1
         i32.add
         call $~lib/string/String#slice
         local.set $2
         global.get $~lib/memory/__stack_pointer
         local.get $2
         i32.store offset=8
         local.get $2
         call $assembly/JSON/parseArrayArray<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>
         local.set $2
         global.get $~lib/memory/__stack_pointer
         local.get $2
         i32.store offset=8
         local.get $3
         local.get $2
         call $~lib/array/Array<~lib/string/String>#push
         i32.const 0
         local.set $7
         i32.const 0
         local.set $8
         local.get $1
         local.set $2
        end
        local.get $1
        i32.const 1
        i32.add
        local.set $1
        br $for-loop|01
       end
      end
      global.get $~lib/memory/__stack_pointer
      i32.const 12
      i32.add
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.store offset=8
      local.get $5
      local.get $3
      call $~lib/array/Array<~lib/string/String>#push
      i32.const 0
      local.set $6
      local.get $4
      local.set $3
      i32.const 0
      local.set $1
     end
     local.get $4
     i32.const 1
     i32.add
     local.set $4
     br $for-loop|0
    end
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $5
   return
  end
  i32.const 28736
  i32.const 28784
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/JSON/parseArrayArray<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
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
  block $folding-inner1
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $4
   i64.const 0
   i64.store
   local.get $4
   i32.const 0
   i32.store offset=8
   local.get $4
   i32.const 8
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $3
   i64.const 0
   i64.store
   local.get $3
   i32.const 16
   i32.const 17
   call $~lib/rt/itcms/__new
   local.tee $5
   i32.store
   local.get $5
   i32.const 0
   i32.store
   local.get $5
   i32.const 0
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $5
   i32.const 0
   i32.store offset=4
   local.get $5
   i32.const 0
   i32.store offset=8
   local.get $5
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 32
   i32.const 0
   call $~lib/rt/itcms/__new
   local.tee $3
   i32.store offset=4
   local.get $3
   i32.const 32
   call $~lib/memory/memory.fill
   local.get $5
   local.get $3
   i32.store
   local.get $5
   local.get $3
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $5
   local.get $3
   i32.store offset=4
   local.get $5
   i32.const 32
   i32.store offset=8
   local.get $5
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   local.get $5
   i32.store
   i32.const -1
   local.set $3
   i32.const 1
   local.set $4
   loop $for-loop|0
    local.get $4
    local.get $0
    i32.const 20
    i32.sub
    i32.load offset=16
    i32.const 1
    i32.shr_u
    i32.const 1
    i32.sub
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     local.get $4
     call $~lib/string/String#charAt
     local.tee $2
     i32.store offset=4
     global.get $~lib/memory/__stack_pointer
     i32.const 6032
     i32.store offset=8
     local.get $1
     i32.const 1
     i32.add
     local.get $1
     local.get $2
     i32.const 6032
     call $~lib/string/String.__eq
     select
     local.set $1
     global.get $~lib/memory/__stack_pointer
     i32.const 6128
     i32.store offset=8
     local.get $1
     local.get $6
     i32.const 1
     i32.add
     local.get $6
     local.get $2
     i32.const 6128
     call $~lib/string/String.__eq
     select
     local.tee $6
     i32.eq
     i32.const 0
     local.get $1
     i32.const 0
     i32.gt_s
     select
     if
      local.get $0
      local.get $3
      i32.const 2
      i32.add
      local.get $4
      i32.const 1
      i32.add
      call $~lib/string/String#slice
      local.set $6
      global.get $~lib/memory/__stack_pointer
      local.tee $3
      local.get $6
      i32.store offset=8
      i32.const 0
      local.set $7
      i32.const 0
      local.set $8
      local.get $3
      i32.const 12
      i32.sub
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      i32.const 12332
      i32.lt_s
      br_if $folding-inner1
      global.get $~lib/memory/__stack_pointer
      local.tee $2
      i64.const 0
      i64.store
      local.get $2
      i32.const 0
      i32.store offset=8
      local.get $2
      i32.const 8
      i32.sub
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      i32.const 12332
      i32.lt_s
      br_if $folding-inner1
      global.get $~lib/memory/__stack_pointer
      local.tee $3
      i64.const 0
      i64.store
      local.get $3
      i32.const 16
      i32.const 16
      call $~lib/rt/itcms/__new
      local.tee $3
      i32.store
      local.get $3
      i32.const 0
      i32.store
      local.get $3
      i32.const 0
      i32.const 0
      call $~lib/rt/itcms/__link
      local.get $3
      i32.const 0
      i32.store offset=4
      local.get $3
      i32.const 0
      i32.store offset=8
      local.get $3
      i32.const 0
      i32.store offset=12
      global.get $~lib/memory/__stack_pointer
      i32.const 32
      i32.const 0
      call $~lib/rt/itcms/__new
      local.tee $1
      i32.store offset=4
      local.get $1
      i32.const 32
      call $~lib/memory/memory.fill
      local.get $3
      local.get $1
      i32.store
      local.get $3
      local.get $1
      i32.const 0
      call $~lib/rt/itcms/__link
      local.get $3
      local.get $1
      i32.store offset=4
      local.get $3
      i32.const 32
      i32.store offset=8
      local.get $3
      i32.const 0
      i32.store offset=12
      global.get $~lib/memory/__stack_pointer
      i32.const 8
      i32.add
      global.set $~lib/memory/__stack_pointer
      local.get $2
      local.get $3
      i32.store
      i32.const -1
      local.set $2
      i32.const 1
      local.set $1
      loop $for-loop|01
       local.get $1
       local.get $6
       i32.const 20
       i32.sub
       i32.load offset=16
       i32.const 1
       i32.shr_u
       i32.const 1
       i32.sub
       i32.lt_s
       if
        global.get $~lib/memory/__stack_pointer
        local.get $6
        local.get $1
        call $~lib/string/String#charAt
        local.tee $9
        i32.store offset=4
        global.get $~lib/memory/__stack_pointer
        i32.const 6032
        i32.store offset=8
        local.get $7
        i32.const 1
        i32.add
        local.get $7
        local.get $9
        i32.const 6032
        call $~lib/string/String.__eq
        select
        local.set $7
        global.get $~lib/memory/__stack_pointer
        i32.const 6128
        i32.store offset=8
        local.get $7
        local.get $8
        i32.const 1
        i32.add
        local.get $8
        local.get $9
        i32.const 6128
        call $~lib/string/String.__eq
        select
        local.tee $8
        i32.eq
        i32.const 0
        local.get $7
        i32.const 0
        i32.gt_s
        select
        if
         local.get $6
         local.get $2
         i32.const 2
         i32.add
         local.get $1
         i32.const 1
         i32.add
         call $~lib/string/String#slice
         local.set $2
         global.get $~lib/memory/__stack_pointer
         local.get $2
         i32.store offset=8
         local.get $2
         call $assembly/JSON/parseArrayArray<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>
         local.set $2
         global.get $~lib/memory/__stack_pointer
         local.get $2
         i32.store offset=8
         local.get $3
         local.get $2
         call $~lib/array/Array<~lib/string/String>#push
         i32.const 0
         local.set $7
         i32.const 0
         local.set $8
         local.get $1
         local.set $2
        end
        local.get $1
        i32.const 1
        i32.add
        local.set $1
        br $for-loop|01
       end
      end
      global.get $~lib/memory/__stack_pointer
      i32.const 12
      i32.add
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.store offset=8
      local.get $5
      local.get $3
      call $~lib/array/Array<~lib/string/String>#push
      i32.const 0
      local.set $6
      local.get $4
      local.set $3
      i32.const 0
      local.set $1
     end
     local.get $4
     i32.const 1
     i32.add
     local.set $4
     br $for-loop|0
    end
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $5
   return
  end
  i32.const 28736
  i32.const 28784
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/JSON/parseArrayArray<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
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
  block $folding-inner1
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $4
   i64.const 0
   i64.store
   local.get $4
   i32.const 0
   i32.store offset=8
   local.get $4
   i32.const 8
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $3
   i64.const 0
   i64.store
   local.get $3
   i32.const 16
   i32.const 19
   call $~lib/rt/itcms/__new
   local.tee $5
   i32.store
   local.get $5
   i32.const 0
   i32.store
   local.get $5
   i32.const 0
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $5
   i32.const 0
   i32.store offset=4
   local.get $5
   i32.const 0
   i32.store offset=8
   local.get $5
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 32
   i32.const 0
   call $~lib/rt/itcms/__new
   local.tee $3
   i32.store offset=4
   local.get $3
   i32.const 32
   call $~lib/memory/memory.fill
   local.get $5
   local.get $3
   i32.store
   local.get $5
   local.get $3
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $5
   local.get $3
   i32.store offset=4
   local.get $5
   i32.const 32
   i32.store offset=8
   local.get $5
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   local.get $5
   i32.store
   i32.const -1
   local.set $3
   i32.const 1
   local.set $4
   loop $for-loop|0
    local.get $4
    local.get $0
    i32.const 20
    i32.sub
    i32.load offset=16
    i32.const 1
    i32.shr_u
    i32.const 1
    i32.sub
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     local.get $4
     call $~lib/string/String#charAt
     local.tee $2
     i32.store offset=4
     global.get $~lib/memory/__stack_pointer
     i32.const 6032
     i32.store offset=8
     local.get $1
     i32.const 1
     i32.add
     local.get $1
     local.get $2
     i32.const 6032
     call $~lib/string/String.__eq
     select
     local.set $1
     global.get $~lib/memory/__stack_pointer
     i32.const 6128
     i32.store offset=8
     local.get $1
     local.get $6
     i32.const 1
     i32.add
     local.get $6
     local.get $2
     i32.const 6128
     call $~lib/string/String.__eq
     select
     local.tee $6
     i32.eq
     i32.const 0
     local.get $1
     i32.const 0
     i32.gt_s
     select
     if
      local.get $0
      local.get $3
      i32.const 2
      i32.add
      local.get $4
      i32.const 1
      i32.add
      call $~lib/string/String#slice
      local.set $6
      global.get $~lib/memory/__stack_pointer
      local.tee $3
      local.get $6
      i32.store offset=8
      i32.const 0
      local.set $7
      i32.const 0
      local.set $8
      local.get $3
      i32.const 12
      i32.sub
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      i32.const 12332
      i32.lt_s
      br_if $folding-inner1
      global.get $~lib/memory/__stack_pointer
      local.tee $2
      i64.const 0
      i64.store
      local.get $2
      i32.const 0
      i32.store offset=8
      local.get $2
      i32.const 8
      i32.sub
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      i32.const 12332
      i32.lt_s
      br_if $folding-inner1
      global.get $~lib/memory/__stack_pointer
      local.tee $3
      i64.const 0
      i64.store
      local.get $3
      i32.const 16
      i32.const 18
      call $~lib/rt/itcms/__new
      local.tee $3
      i32.store
      local.get $3
      i32.const 0
      i32.store
      local.get $3
      i32.const 0
      i32.const 0
      call $~lib/rt/itcms/__link
      local.get $3
      i32.const 0
      i32.store offset=4
      local.get $3
      i32.const 0
      i32.store offset=8
      local.get $3
      i32.const 0
      i32.store offset=12
      global.get $~lib/memory/__stack_pointer
      i32.const 32
      i32.const 0
      call $~lib/rt/itcms/__new
      local.tee $1
      i32.store offset=4
      local.get $1
      i32.const 32
      call $~lib/memory/memory.fill
      local.get $3
      local.get $1
      i32.store
      local.get $3
      local.get $1
      i32.const 0
      call $~lib/rt/itcms/__link
      local.get $3
      local.get $1
      i32.store offset=4
      local.get $3
      i32.const 32
      i32.store offset=8
      local.get $3
      i32.const 0
      i32.store offset=12
      global.get $~lib/memory/__stack_pointer
      i32.const 8
      i32.add
      global.set $~lib/memory/__stack_pointer
      local.get $2
      local.get $3
      i32.store
      i32.const -1
      local.set $2
      i32.const 1
      local.set $1
      loop $for-loop|01
       local.get $1
       local.get $6
       i32.const 20
       i32.sub
       i32.load offset=16
       i32.const 1
       i32.shr_u
       i32.const 1
       i32.sub
       i32.lt_s
       if
        global.get $~lib/memory/__stack_pointer
        local.get $6
        local.get $1
        call $~lib/string/String#charAt
        local.tee $9
        i32.store offset=4
        global.get $~lib/memory/__stack_pointer
        i32.const 6032
        i32.store offset=8
        local.get $7
        i32.const 1
        i32.add
        local.get $7
        local.get $9
        i32.const 6032
        call $~lib/string/String.__eq
        select
        local.set $7
        global.get $~lib/memory/__stack_pointer
        i32.const 6128
        i32.store offset=8
        local.get $7
        local.get $8
        i32.const 1
        i32.add
        local.get $8
        local.get $9
        i32.const 6128
        call $~lib/string/String.__eq
        select
        local.tee $8
        i32.eq
        i32.const 0
        local.get $7
        i32.const 0
        i32.gt_s
        select
        if
         local.get $6
         local.get $2
         i32.const 2
         i32.add
         local.get $1
         i32.const 1
         i32.add
         call $~lib/string/String#slice
         local.set $2
         global.get $~lib/memory/__stack_pointer
         local.get $2
         i32.store offset=8
         local.get $2
         call $assembly/JSON/parseArrayArray<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>
         local.set $2
         global.get $~lib/memory/__stack_pointer
         local.get $2
         i32.store offset=8
         local.get $3
         local.get $2
         call $~lib/array/Array<~lib/string/String>#push
         i32.const 0
         local.set $7
         i32.const 0
         local.set $8
         local.get $1
         local.set $2
        end
        local.get $1
        i32.const 1
        i32.add
        local.set $1
        br $for-loop|01
       end
      end
      global.get $~lib/memory/__stack_pointer
      i32.const 12
      i32.add
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.store offset=8
      local.get $5
      local.get $3
      call $~lib/array/Array<~lib/string/String>#push
      i32.const 0
      local.set $6
      local.get $4
      local.set $3
      i32.const 0
      local.set $1
     end
     local.get $4
     i32.const 1
     i32.add
     local.set $4
     br $for-loop|0
    end
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $5
   return
  end
  i32.const 28736
  i32.const 28784
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/JSON/parseArrayArray<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>>>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
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
  block $folding-inner1
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $4
   i64.const 0
   i64.store
   local.get $4
   i32.const 0
   i32.store offset=8
   local.get $4
   i32.const 8
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $3
   i64.const 0
   i64.store
   local.get $3
   i32.const 16
   i32.const 21
   call $~lib/rt/itcms/__new
   local.tee $5
   i32.store
   local.get $5
   i32.const 0
   i32.store
   local.get $5
   i32.const 0
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $5
   i32.const 0
   i32.store offset=4
   local.get $5
   i32.const 0
   i32.store offset=8
   local.get $5
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 32
   i32.const 0
   call $~lib/rt/itcms/__new
   local.tee $3
   i32.store offset=4
   local.get $3
   i32.const 32
   call $~lib/memory/memory.fill
   local.get $5
   local.get $3
   i32.store
   local.get $5
   local.get $3
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $5
   local.get $3
   i32.store offset=4
   local.get $5
   i32.const 32
   i32.store offset=8
   local.get $5
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   local.get $5
   i32.store
   i32.const -1
   local.set $3
   i32.const 1
   local.set $4
   loop $for-loop|0
    local.get $4
    local.get $0
    i32.const 20
    i32.sub
    i32.load offset=16
    i32.const 1
    i32.shr_u
    i32.const 1
    i32.sub
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     local.get $4
     call $~lib/string/String#charAt
     local.tee $2
     i32.store offset=4
     global.get $~lib/memory/__stack_pointer
     i32.const 6032
     i32.store offset=8
     local.get $1
     i32.const 1
     i32.add
     local.get $1
     local.get $2
     i32.const 6032
     call $~lib/string/String.__eq
     select
     local.set $1
     global.get $~lib/memory/__stack_pointer
     i32.const 6128
     i32.store offset=8
     local.get $1
     local.get $6
     i32.const 1
     i32.add
     local.get $6
     local.get $2
     i32.const 6128
     call $~lib/string/String.__eq
     select
     local.tee $6
     i32.eq
     i32.const 0
     local.get $1
     i32.const 0
     i32.gt_s
     select
     if
      local.get $0
      local.get $3
      i32.const 2
      i32.add
      local.get $4
      i32.const 1
      i32.add
      call $~lib/string/String#slice
      local.set $6
      global.get $~lib/memory/__stack_pointer
      local.tee $3
      local.get $6
      i32.store offset=8
      i32.const 0
      local.set $7
      i32.const 0
      local.set $8
      local.get $3
      i32.const 12
      i32.sub
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      i32.const 12332
      i32.lt_s
      br_if $folding-inner1
      global.get $~lib/memory/__stack_pointer
      local.tee $2
      i64.const 0
      i64.store
      local.get $2
      i32.const 0
      i32.store offset=8
      local.get $2
      i32.const 8
      i32.sub
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      i32.const 12332
      i32.lt_s
      br_if $folding-inner1
      global.get $~lib/memory/__stack_pointer
      local.tee $3
      i64.const 0
      i64.store
      local.get $3
      i32.const 16
      i32.const 20
      call $~lib/rt/itcms/__new
      local.tee $3
      i32.store
      local.get $3
      i32.const 0
      i32.store
      local.get $3
      i32.const 0
      i32.const 0
      call $~lib/rt/itcms/__link
      local.get $3
      i32.const 0
      i32.store offset=4
      local.get $3
      i32.const 0
      i32.store offset=8
      local.get $3
      i32.const 0
      i32.store offset=12
      global.get $~lib/memory/__stack_pointer
      i32.const 32
      i32.const 0
      call $~lib/rt/itcms/__new
      local.tee $1
      i32.store offset=4
      local.get $1
      i32.const 32
      call $~lib/memory/memory.fill
      local.get $3
      local.get $1
      i32.store
      local.get $3
      local.get $1
      i32.const 0
      call $~lib/rt/itcms/__link
      local.get $3
      local.get $1
      i32.store offset=4
      local.get $3
      i32.const 32
      i32.store offset=8
      local.get $3
      i32.const 0
      i32.store offset=12
      global.get $~lib/memory/__stack_pointer
      i32.const 8
      i32.add
      global.set $~lib/memory/__stack_pointer
      local.get $2
      local.get $3
      i32.store
      i32.const -1
      local.set $2
      i32.const 1
      local.set $1
      loop $for-loop|01
       local.get $1
       local.get $6
       i32.const 20
       i32.sub
       i32.load offset=16
       i32.const 1
       i32.shr_u
       i32.const 1
       i32.sub
       i32.lt_s
       if
        global.get $~lib/memory/__stack_pointer
        local.get $6
        local.get $1
        call $~lib/string/String#charAt
        local.tee $9
        i32.store offset=4
        global.get $~lib/memory/__stack_pointer
        i32.const 6032
        i32.store offset=8
        local.get $7
        i32.const 1
        i32.add
        local.get $7
        local.get $9
        i32.const 6032
        call $~lib/string/String.__eq
        select
        local.set $7
        global.get $~lib/memory/__stack_pointer
        i32.const 6128
        i32.store offset=8
        local.get $7
        local.get $8
        i32.const 1
        i32.add
        local.get $8
        local.get $9
        i32.const 6128
        call $~lib/string/String.__eq
        select
        local.tee $8
        i32.eq
        i32.const 0
        local.get $7
        i32.const 0
        i32.gt_s
        select
        if
         local.get $6
         local.get $2
         i32.const 2
         i32.add
         local.get $1
         i32.const 1
         i32.add
         call $~lib/string/String#slice
         local.set $2
         global.get $~lib/memory/__stack_pointer
         local.get $2
         i32.store offset=8
         local.get $2
         call $assembly/JSON/parseArrayArray<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>>>
         local.set $2
         global.get $~lib/memory/__stack_pointer
         local.get $2
         i32.store offset=8
         local.get $3
         local.get $2
         call $~lib/array/Array<~lib/string/String>#push
         i32.const 0
         local.set $7
         i32.const 0
         local.set $8
         local.get $1
         local.set $2
        end
        local.get $1
        i32.const 1
        i32.add
        local.set $1
        br $for-loop|01
       end
      end
      global.get $~lib/memory/__stack_pointer
      i32.const 12
      i32.add
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.store offset=8
      local.get $5
      local.get $3
      call $~lib/array/Array<~lib/string/String>#push
      i32.const 0
      local.set $6
      local.get $4
      local.set $3
      i32.const 0
      local.set $1
     end
     local.get $4
     i32.const 1
     i32.add
     local.set $4
     br $for-loop|0
    end
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $5
   return
  end
  i32.const 28736
  i32.const 28784
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/JSON/parseArrayArray<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>>>>>>> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
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
  block $folding-inner1
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $4
   i64.const 0
   i64.store
   local.get $4
   i32.const 0
   i32.store offset=8
   local.get $4
   i32.const 8
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $3
   i64.const 0
   i64.store
   local.get $3
   i32.const 16
   i32.const 23
   call $~lib/rt/itcms/__new
   local.tee $5
   i32.store
   local.get $5
   i32.const 0
   i32.store
   local.get $5
   i32.const 0
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $5
   i32.const 0
   i32.store offset=4
   local.get $5
   i32.const 0
   i32.store offset=8
   local.get $5
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 32
   i32.const 0
   call $~lib/rt/itcms/__new
   local.tee $3
   i32.store offset=4
   local.get $3
   i32.const 32
   call $~lib/memory/memory.fill
   local.get $5
   local.get $3
   i32.store
   local.get $5
   local.get $3
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $5
   local.get $3
   i32.store offset=4
   local.get $5
   i32.const 32
   i32.store offset=8
   local.get $5
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   local.get $5
   i32.store
   i32.const -1
   local.set $3
   i32.const 1
   local.set $4
   loop $for-loop|0
    local.get $4
    local.get $0
    i32.const 20
    i32.sub
    i32.load offset=16
    i32.const 1
    i32.shr_u
    i32.const 1
    i32.sub
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     local.get $4
     call $~lib/string/String#charAt
     local.tee $2
     i32.store offset=4
     global.get $~lib/memory/__stack_pointer
     i32.const 6032
     i32.store offset=8
     local.get $1
     i32.const 1
     i32.add
     local.get $1
     local.get $2
     i32.const 6032
     call $~lib/string/String.__eq
     select
     local.set $1
     global.get $~lib/memory/__stack_pointer
     i32.const 6128
     i32.store offset=8
     local.get $1
     local.get $6
     i32.const 1
     i32.add
     local.get $6
     local.get $2
     i32.const 6128
     call $~lib/string/String.__eq
     select
     local.tee $6
     i32.eq
     i32.const 0
     local.get $1
     i32.const 0
     i32.gt_s
     select
     if
      local.get $0
      local.get $3
      i32.const 2
      i32.add
      local.get $4
      i32.const 1
      i32.add
      call $~lib/string/String#slice
      local.set $6
      global.get $~lib/memory/__stack_pointer
      local.tee $3
      local.get $6
      i32.store offset=8
      i32.const 0
      local.set $7
      i32.const 0
      local.set $8
      local.get $3
      i32.const 12
      i32.sub
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      i32.const 12332
      i32.lt_s
      br_if $folding-inner1
      global.get $~lib/memory/__stack_pointer
      local.tee $2
      i64.const 0
      i64.store
      local.get $2
      i32.const 0
      i32.store offset=8
      local.get $2
      i32.const 8
      i32.sub
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      i32.const 12332
      i32.lt_s
      br_if $folding-inner1
      global.get $~lib/memory/__stack_pointer
      local.tee $3
      i64.const 0
      i64.store
      local.get $3
      i32.const 16
      i32.const 22
      call $~lib/rt/itcms/__new
      local.tee $3
      i32.store
      local.get $3
      i32.const 0
      i32.store
      local.get $3
      i32.const 0
      i32.const 0
      call $~lib/rt/itcms/__link
      local.get $3
      i32.const 0
      i32.store offset=4
      local.get $3
      i32.const 0
      i32.store offset=8
      local.get $3
      i32.const 0
      i32.store offset=12
      global.get $~lib/memory/__stack_pointer
      i32.const 32
      i32.const 0
      call $~lib/rt/itcms/__new
      local.tee $1
      i32.store offset=4
      local.get $1
      i32.const 32
      call $~lib/memory/memory.fill
      local.get $3
      local.get $1
      i32.store
      local.get $3
      local.get $1
      i32.const 0
      call $~lib/rt/itcms/__link
      local.get $3
      local.get $1
      i32.store offset=4
      local.get $3
      i32.const 32
      i32.store offset=8
      local.get $3
      i32.const 0
      i32.store offset=12
      global.get $~lib/memory/__stack_pointer
      i32.const 8
      i32.add
      global.set $~lib/memory/__stack_pointer
      local.get $2
      local.get $3
      i32.store
      i32.const -1
      local.set $2
      i32.const 1
      local.set $1
      loop $for-loop|01
       local.get $1
       local.get $6
       i32.const 20
       i32.sub
       i32.load offset=16
       i32.const 1
       i32.shr_u
       i32.const 1
       i32.sub
       i32.lt_s
       if
        global.get $~lib/memory/__stack_pointer
        local.get $6
        local.get $1
        call $~lib/string/String#charAt
        local.tee $9
        i32.store offset=4
        global.get $~lib/memory/__stack_pointer
        i32.const 6032
        i32.store offset=8
        local.get $7
        i32.const 1
        i32.add
        local.get $7
        local.get $9
        i32.const 6032
        call $~lib/string/String.__eq
        select
        local.set $7
        global.get $~lib/memory/__stack_pointer
        i32.const 6128
        i32.store offset=8
        local.get $7
        local.get $8
        i32.const 1
        i32.add
        local.get $8
        local.get $9
        i32.const 6128
        call $~lib/string/String.__eq
        select
        local.tee $8
        i32.eq
        i32.const 0
        local.get $7
        i32.const 0
        i32.gt_s
        select
        if
         local.get $6
         local.get $2
         i32.const 2
         i32.add
         local.get $1
         i32.const 1
         i32.add
         call $~lib/string/String#slice
         local.set $2
         global.get $~lib/memory/__stack_pointer
         local.get $2
         i32.store offset=8
         local.get $2
         call $assembly/JSON/parseArrayArray<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>>>>>
         local.set $2
         global.get $~lib/memory/__stack_pointer
         local.get $2
         i32.store offset=8
         local.get $3
         local.get $2
         call $~lib/array/Array<~lib/string/String>#push
         i32.const 0
         local.set $7
         i32.const 0
         local.set $8
         local.get $1
         local.set $2
        end
        local.get $1
        i32.const 1
        i32.add
        local.set $1
        br $for-loop|01
       end
      end
      global.get $~lib/memory/__stack_pointer
      i32.const 12
      i32.add
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.store offset=8
      local.get $5
      local.get $3
      call $~lib/array/Array<~lib/string/String>#push
      i32.const 0
      local.set $6
      local.get $4
      local.set $3
      i32.const 0
      local.set $1
     end
     local.get $4
     i32.const 1
     i32.add
     local.set $4
     br $for-loop|0
    end
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $5
   return
  end
  i32.const 28736
  i32.const 28784
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
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
  i32.const 144
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner1
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i64.const 0
   i64.store
   local.get $1
   i64.const 0
   i64.store offset=8
   local.get $1
   i64.const 0
   i64.store offset=16
   local.get $1
   i64.const 0
   i64.store offset=24
   local.get $1
   i64.const 0
   i64.store offset=32
   local.get $1
   i64.const 0
   i64.store offset=40
   local.get $1
   i64.const 0
   i64.store offset=48
   local.get $1
   i64.const 0
   i64.store offset=56
   local.get $1
   i64.const 0
   i64.store offset=64
   local.get $1
   i64.const 0
   i64.store offset=72
   local.get $1
   i64.const 0
   i64.store offset=80
   local.get $1
   i64.const 0
   i64.store offset=88
   local.get $1
   i64.const 0
   i64.store offset=96
   local.get $1
   i64.const 0
   i64.store offset=104
   local.get $1
   i64.const 0
   i64.store offset=112
   local.get $1
   i64.const 0
   i64.store offset=120
   local.get $1
   i64.const 0
   i64.store offset=128
   local.get $1
   i64.const 0
   i64.store offset=136
   i32.const 1172
   i32.const 1168
   i32.store
   i32.const 1176
   i32.const 1168
   i32.store
   i32.const 1168
   global.set $~lib/rt/itcms/toSpace
   memory.size
   i32.const 16
   i32.shl
   i32.const 28716
   i32.sub
   i32.const 1
   i32.shr_u
   global.set $~lib/rt/itcms/threshold
   i32.const 1380
   i32.const 1376
   i32.store
   i32.const 1384
   i32.const 1376
   i32.store
   i32.const 1376
   global.set $~lib/rt/itcms/pinSpace
   i32.const 1412
   i32.const 1408
   i32.store
   i32.const 1416
   i32.const 1408
   i32.store
   i32.const 1408
   global.set $~lib/rt/itcms/fromSpace
   local.get $1
   call $assembly/test/HelloWorld#constructor
   local.tee $1
   i32.store
   local.get $1
   i32.const 1088
   i32.store
   local.get $1
   i32.const 1088
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $1
   global.set $assembly/test/helloworld
   global.get $~lib/memory/__stack_pointer
   call $assembly/test/NameAge#constructor
   local.tee $1
   i32.store offset=4
   local.get $1
   i32.const 1520
   i32.store
   local.get $1
   i32.const 1520
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $1
   i32.const 14
   i32.store offset=4
   local.get $1
   global.set $assembly/test/nameage
   global.get $~lib/memory/__stack_pointer
   i32.const 1552
   i32.store offset=8
   i32.const 1552
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   i32.const 1696
   i32.store offset=8
   i32.const 1696
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 1856
   i32.store offset=12
   local.get $1
   i32.const 1888
   i32.store offset=16
   i32.const 1888
   call $assembly/JSON/JSON.stringify<~lib/string/String>
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=16
   i32.const 1860
   local.get $1
   i32.store
   i32.const 1856
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 1856
   i32.store offset=12
   local.get $1
   i32.const 1632
   i32.store offset=20
   i32.const 1856
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   local.get $1
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 2064
   i32.store offset=12
   local.get $1
   i32.const 2096
   i32.store offset=16
   i32.const 2096
   call $assembly/JSON/JSON.stringify<~lib/string/String>
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=16
   i32.const 2068
   local.get $1
   i32.store
   i32.const 2064
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 2064
   i32.store offset=12
   local.get $1
   i32.const 1632
   i32.store offset=20
   i32.const 2064
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   local.get $1
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   i32.const 2144
   i32.store offset=8
   i32.const 2144
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   i32.const 2288
   i32.store offset=12
   i32.const 123
   call $assembly/JSON/JSON.stringify<i32>
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   local.get $1
   i32.store offset=16
   local.get $0
   local.get $1
   i32.store offset=16
   i32.const 2292
   local.get $1
   i32.store
   i32.const 2288
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 2288
   i32.store offset=12
   local.get $1
   i32.const 1632
   i32.store offset=20
   i32.const 2288
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   local.get $1
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 4176
   i32.store offset=12
   local.get $1
   i32.const 12
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i64.const 0
   i64.store
   local.get $1
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 4208
   i32.store
   f64.const 1.25
   call $~lib/util/number/dtoa
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   i32.const 4212
   local.get $1
   i32.store
   i32.const 4208
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 4208
   i32.store
   local.get $1
   i32.const 1632
   i32.store offset=8
   i32.const 4208
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   local.get $1
   i32.store offset=16
   local.get $0
   local.get $1
   i32.store offset=16
   i32.const 4180
   local.get $1
   i32.store
   i32.const 4176
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 4176
   i32.store offset=12
   local.get $1
   i32.const 1632
   i32.store offset=20
   i32.const 4176
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   local.get $1
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   i32.const 5376
   i32.store offset=8
   i32.const 5376
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   i32.const 5520
   i32.store offset=12
   i32.const 1
   call $assembly/JSON/JSON.stringify<bool>
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=16
   i32.const 5524
   local.get $1
   i32.store
   i32.const 5520
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 5520
   i32.store offset=12
   local.get $1
   i32.const 1632
   i32.store offset=20
   i32.const 5520
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   local.get $1
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   i32.const 5696
   i32.store offset=12
   i32.const 0
   call $assembly/JSON/JSON.stringify<bool>
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=16
   i32.const 5700
   local.get $1
   i32.store
   i32.const 5696
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 5696
   i32.store offset=12
   local.get $1
   i32.const 1632
   i32.store offset=20
   i32.const 5696
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   local.get $1
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   i32.const 5728
   i32.store offset=8
   i32.const 5728
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   i32.const 5936
   i32.store offset=12
   i32.const 2
   i32.const 7
   i32.const 6000
   call $~lib/rt/__newArray
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=16
   local.get $1
   call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/string/String>>
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=16
   i32.const 5940
   local.get $1
   i32.store
   i32.const 5936
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 5936
   i32.store offset=12
   local.get $1
   i32.const 1632
   i32.store offset=20
   i32.const 5936
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   local.get $1
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 6288
   i32.store offset=12
   local.get $1
   i32.const 2
   i32.const 9
   i32.const 0
   call $~lib/rt/__newArray
   local.tee $1
   i32.store offset=24
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.load offset=4
   i32.store offset=28
   local.get $1
   i32.const 0
   i32.const 1
   i32.const 7
   i32.const 6368
   call $~lib/rt/__newArray
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
   local.get $1
   i32.const 1
   i32.const 1
   i32.const 7
   i32.const 6448
   call $~lib/rt/__newArray
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=16
   local.get $1
   call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/string/String>>>
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=16
   i32.const 6292
   local.get $1
   i32.store
   i32.const 6288
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 6288
   i32.store offset=12
   local.get $1
   i32.const 1632
   i32.store offset=20
   i32.const 6288
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   local.get $1
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 6672
   i32.store offset=12
   local.get $1
   i32.const 2
   i32.const 9
   i32.const 0
   call $~lib/rt/__newArray
   local.tee $1
   i32.store offset=28
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.load offset=4
   i32.store offset=24
   local.get $1
   i32.const 0
   i32.const 2
   i32.const 7
   i32.const 6768
   call $~lib/rt/__newArray
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
   local.get $1
   i32.const 1
   i32.const 2
   i32.const 7
   i32.const 6864
   call $~lib/rt/__newArray
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=16
   local.get $1
   call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/string/String>>>
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=16
   i32.const 6676
   local.get $1
   i32.store
   i32.const 6672
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 6672
   i32.store offset=12
   local.get $1
   i32.const 1632
   i32.store offset=20
   i32.const 6672
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   local.get $1
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 7072
   i32.store offset=12
   local.get $1
   i32.const 1
   i32.const 23
   i32.const 0
   call $~lib/rt/__newArray
   local.tee $1
   i32.store offset=24
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   local.get $1
   i32.load offset=4
   i32.store offset=28
   local.get $0
   i32.const 1
   i32.const 22
   i32.const 0
   call $~lib/rt/__newArray
   local.tee $0
   i32.store offset=32
   global.get $~lib/memory/__stack_pointer
   local.tee $14
   local.get $0
   i32.load offset=4
   i32.store offset=36
   local.get $14
   i32.const 1
   i32.const 21
   i32.const 0
   call $~lib/rt/__newArray
   local.tee $14
   i32.store offset=40
   global.get $~lib/memory/__stack_pointer
   local.tee $13
   local.get $14
   i32.load offset=4
   i32.store offset=44
   local.get $13
   i32.const 1
   i32.const 20
   i32.const 0
   call $~lib/rt/__newArray
   local.tee $13
   i32.store offset=48
   global.get $~lib/memory/__stack_pointer
   local.tee $12
   local.get $13
   i32.load offset=4
   i32.store offset=52
   local.get $12
   i32.const 1
   i32.const 19
   i32.const 0
   call $~lib/rt/__newArray
   local.tee $12
   i32.store offset=56
   global.get $~lib/memory/__stack_pointer
   local.tee $11
   local.get $12
   i32.load offset=4
   i32.store offset=60
   local.get $11
   i32.const 1
   i32.const 18
   i32.const 0
   call $~lib/rt/__newArray
   local.tee $11
   i32.store offset=64
   global.get $~lib/memory/__stack_pointer
   local.tee $10
   local.get $11
   i32.load offset=4
   i32.store offset=68
   local.get $10
   i32.const 1
   i32.const 17
   i32.const 0
   call $~lib/rt/__newArray
   local.tee $10
   i32.store offset=72
   global.get $~lib/memory/__stack_pointer
   local.tee $9
   local.get $10
   i32.load offset=4
   i32.store offset=76
   local.get $9
   i32.const 1
   i32.const 16
   i32.const 0
   call $~lib/rt/__newArray
   local.tee $9
   i32.store offset=80
   global.get $~lib/memory/__stack_pointer
   local.tee $8
   local.get $9
   i32.load offset=4
   i32.store offset=84
   local.get $8
   i32.const 1
   i32.const 15
   i32.const 0
   call $~lib/rt/__newArray
   local.tee $8
   i32.store offset=88
   global.get $~lib/memory/__stack_pointer
   local.tee $7
   local.get $8
   i32.load offset=4
   i32.store offset=92
   local.get $7
   i32.const 1
   i32.const 14
   i32.const 0
   call $~lib/rt/__newArray
   local.tee $7
   i32.store offset=96
   global.get $~lib/memory/__stack_pointer
   local.tee $6
   local.get $7
   i32.load offset=4
   i32.store offset=100
   local.get $6
   i32.const 1
   i32.const 13
   i32.const 0
   call $~lib/rt/__newArray
   local.tee $6
   i32.store offset=104
   global.get $~lib/memory/__stack_pointer
   local.tee $5
   local.get $6
   i32.load offset=4
   i32.store offset=108
   local.get $5
   i32.const 1
   i32.const 12
   i32.const 0
   call $~lib/rt/__newArray
   local.tee $5
   i32.store offset=112
   global.get $~lib/memory/__stack_pointer
   local.tee $4
   local.get $5
   i32.load offset=4
   i32.store offset=116
   local.get $4
   i32.const 1
   i32.const 11
   i32.const 0
   call $~lib/rt/__newArray
   local.tee $4
   i32.store offset=120
   global.get $~lib/memory/__stack_pointer
   local.tee $3
   local.get $4
   i32.load offset=4
   i32.store offset=124
   local.get $3
   i32.const 1
   i32.const 10
   i32.const 0
   call $~lib/rt/__newArray
   local.tee $3
   i32.store offset=128
   global.get $~lib/memory/__stack_pointer
   local.tee $2
   local.get $3
   i32.load offset=4
   i32.store offset=132
   local.get $2
   i32.const 1
   i32.const 9
   i32.const 0
   call $~lib/rt/__newArray
   local.tee $2
   i32.store offset=136
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.load offset=4
   i32.store offset=140
   local.get $2
   i32.const 0
   i32.const 1
   i32.const 7
   i32.const 7184
   call $~lib/rt/__newArray
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
   local.get $3
   i32.const 0
   local.get $2
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
   local.get $4
   i32.const 0
   local.get $3
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
   local.get $5
   i32.const 0
   local.get $4
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
   local.get $6
   i32.const 0
   local.get $5
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
   local.get $7
   i32.const 0
   local.get $6
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
   local.get $8
   i32.const 0
   local.get $7
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
   local.get $9
   i32.const 0
   local.get $8
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
   local.get $10
   i32.const 0
   local.get $9
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
   local.get $11
   i32.const 0
   local.get $10
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
   local.get $12
   i32.const 0
   local.get $11
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
   local.get $13
   i32.const 0
   local.get $12
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
   local.get $14
   i32.const 0
   local.get $13
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
   local.get $0
   i32.const 0
   local.get $14
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
   local.get $1
   i32.const 0
   local.get $0
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__uset
   global.get $~lib/memory/__stack_pointer
   local.tee $14
   local.get $1
   i32.store offset=16
   i32.const 0
   local.set $0
   local.get $14
   i32.const 16
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $14
   i64.const 0
   i64.store
   local.get $14
   i64.const 0
   i64.store offset=8
   local.get $1
   i32.load offset=12
   i32.const 1
   i32.sub
   local.set $12
   local.get $14
   i32.const 6032
   i32.store
   local.get $14
   i32.const 6032
   call $~lib/as-string-sink/index/StringSink#constructor
   local.tee $14
   i32.store offset=4
   loop $for-loop|0
    local.get $0
    local.get $12
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.tee $13
     i32.const 7216
     i32.store
     local.get $13
     local.get $1
     i32.load offset=4
     local.get $0
     i32.const 2
     i32.shl
     i32.add
     i32.load
     local.tee $13
     i32.store offset=8
     local.get $13
     call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>>>>>>
     local.set $13
     global.get $~lib/memory/__stack_pointer
     local.get $13
     i32.store offset=8
     i32.const 7220
     local.get $13
     i32.store
     i32.const 7216
     local.get $13
     i32.const 1
     call $~lib/rt/itcms/__link
     global.get $~lib/memory/__stack_pointer
     local.tee $13
     i32.const 7216
     i32.store
     local.get $13
     i32.const 1632
     i32.store offset=12
     i32.const 7216
     call $~lib/staticarray/StaticArray<~lib/string/String>#join
     local.set $13
     global.get $~lib/memory/__stack_pointer
     local.get $13
     i32.store
     local.get $14
     local.get $13
     call $~lib/as-string-sink/index/StringSink#write
     local.get $0
     i32.const 1
     i32.add
     local.set $0
     br $for-loop|0
    end
   end
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i32.const 8080
   i32.store
   local.get $0
   local.get $1
   i32.load offset=4
   local.get $12
   i32.const 2
   i32.shl
   i32.add
   i32.load
   local.tee $1
   i32.store offset=8
   local.get $1
   call $assembly/JSON/JSON.stringify<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>>>>>>
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   i32.const 8084
   local.get $1
   i32.store
   i32.const 8080
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 8080
   i32.store
   local.get $1
   i32.const 1632
   i32.store offset=12
   i32.const 8080
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store
   local.get $14
   local.get $1
   call $~lib/as-string-sink/index/StringSink#write
   local.get $14
   call $~lib/as-string-sink/index/StringSink#toString
   local.set $1
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=16
   i32.const 7076
   local.get $1
   i32.store
   i32.const 7072
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 7072
   i32.store offset=12
   local.get $1
   i32.const 1632
   i32.store offset=20
   i32.const 7072
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   local.get $1
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   i32.const 8112
   i32.store offset=8
   i32.const 8112
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 8288
   i32.store offset=12
   local.get $1
   global.get $assembly/test/helloworld
   local.tee $0
   i32.store offset=16
   local.get $1
   i32.const 16
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i64.const 0
   i64.store
   local.get $1
   i64.const 0
   i64.store offset=8
   local.get $1
   i32.const 52
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $14
   i64.const 0
   i64.store
   local.get $14
   i64.const 0
   i64.store offset=8
   local.get $14
   i64.const 0
   i64.store offset=16
   local.get $14
   i64.const 0
   i64.store offset=24
   local.get $14
   i64.const 0
   i64.store offset=32
   local.get $14
   i64.const 0
   i64.store offset=40
   local.get $14
   i32.const 0
   i32.store offset=48
   local.get $14
   i32.const 1632
   i32.store
   local.get $14
   i32.const 1632
   i32.store offset=44
   local.get $14
   i32.const 1936
   i32.store offset=48
   i32.const 1632
   i32.const 1936
   call $~lib/string/String.__concat
   local.set $13
   global.get $~lib/memory/__stack_pointer
   local.tee $12
   local.get $13
   i32.store offset=36
   local.get $12
   i32.const 5968
   i32.store offset=40
   local.get $13
   i32.const 5968
   call $~lib/string/String.__concat
   local.set $13
   global.get $~lib/memory/__stack_pointer
   local.tee $12
   local.get $13
   i32.store offset=28
   local.get $12
   i32.const 1936
   i32.store offset=32
   local.get $13
   i32.const 1936
   call $~lib/string/String.__concat
   local.set $13
   global.get $~lib/memory/__stack_pointer
   local.tee $12
   local.get $13
   i32.store offset=20
   local.get $12
   i32.const 8320
   i32.store offset=24
   local.get $13
   i32.const 8320
   call $~lib/string/String.__concat
   local.set $13
   global.get $~lib/memory/__stack_pointer
   local.tee $12
   local.get $13
   i32.store offset=12
   local.get $12
   local.get $0
   i32.load
   local.tee $0
   i32.store offset=20
   local.get $0
   call $assembly/JSON/JSON.stringify<~lib/string/String>
   local.set $0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store offset=16
   local.get $13
   local.get $0
   call $~lib/string/String.__concat
   local.set $0
   global.get $~lib/memory/__stack_pointer
   local.tee $13
   local.get $0
   i32.store offset=4
   local.get $13
   i32.const 6064
   i32.store offset=8
   local.get $0
   i32.const 6064
   call $~lib/string/String.__concat
   local.set $0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store offset=4
   local.get $14
   i32.const 1632
   local.get $0
   call $~lib/string/String.__concat
   local.tee $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   i32.const 52
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $1
   local.get $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   i32.const 8416
   i32.store offset=4
   local.get $0
   i32.const 0
   local.get $0
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.sub
   call $~lib/string/String#slice
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   i32.const 8420
   local.get $1
   i32.store
   i32.const 8416
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 8416
   i32.store offset=4
   local.get $1
   i32.const 1632
   i32.store offset=12
   i32.const 8416
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=16
   i32.const 8292
   local.get $1
   i32.store
   i32.const 8288
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 8288
   i32.store offset=12
   local.get $1
   i32.const 1632
   i32.store offset=20
   i32.const 8288
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   local.get $1
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 8544
   i32.store offset=12
   local.get $1
   global.get $assembly/test/nameage
   local.tee $0
   i32.store offset=16
   local.get $1
   i32.const 16
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i64.const 0
   i64.store
   local.get $1
   i64.const 0
   i64.store offset=8
   local.get $1
   local.get $0
   call $assembly/test/NameAge#__encode
   local.tee $1
   i32.store
   global.get $~lib/memory/__stack_pointer
   i32.const 8640
   i32.store offset=4
   local.get $1
   i32.const 0
   local.get $1
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.sub
   call $~lib/string/String#slice
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   i32.const 8644
   local.get $1
   i32.store
   i32.const 8640
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 8640
   i32.store offset=4
   local.get $1
   i32.const 1632
   i32.store offset=12
   i32.const 8640
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=16
   i32.const 8548
   local.get $1
   i32.store
   i32.const 8544
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 8544
   i32.store offset=12
   local.get $1
   i32.const 1632
   i32.store offset=20
   i32.const 8544
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   local.get $1
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   i32.const 8672
   i32.store offset=8
   i32.const 8672
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   i32.const 8752
   i32.store offset=8
   i32.const 8752
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 8960
   i32.store offset=12
   local.get $1
   i32.const 8992
   i32.store offset=16
   i32.const 8992
   i32.const 1
   i32.const 8988
   i32.load
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.sub
   call $~lib/string/String#slice
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=16
   i32.const 8964
   local.get $1
   i32.store
   i32.const 8960
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 8960
   i32.store offset=12
   local.get $1
   i32.const 1632
   i32.store offset=20
   i32.const 8960
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   local.get $1
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 9104
   i32.store offset=12
   local.get $1
   i32.const 9136
   i32.store offset=16
   i32.const 9136
   i32.const 1
   i32.const 9132
   i32.load
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.sub
   call $~lib/string/String#slice
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=16
   i32.const 9108
   local.get $1
   i32.store
   i32.const 9104
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 9104
   i32.store offset=12
   local.get $1
   i32.const 1632
   i32.store offset=20
   i32.const 9104
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   local.get $1
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   i32.const 9200
   i32.store offset=8
   i32.const 9200
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 9360
   i32.store offset=12
   local.get $1
   i32.const 9392
   i32.store offset=16
   i32.const 9392
   call $~lib/util/string/strtol<f64>
   i32.trunc_f64_s
   call $~lib/util/number/itoa32
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=16
   i32.const 9364
   local.get $1
   i32.store
   i32.const 9360
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 9360
   i32.store offset=12
   local.get $1
   i32.const 1632
   i32.store offset=20
   i32.const 9360
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   local.get $1
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 9472
   i32.store offset=12
   local.get $1
   i32.const 9504
   i32.store offset=16
   call $~lib/util/string/strtod
   f32.demote_f64
   f64.promote_f32
   call $~lib/util/number/dtoa
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=16
   i32.const 9476
   local.get $1
   i32.store
   i32.const 9472
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 9472
   i32.store offset=12
   local.get $1
   i32.const 1632
   i32.store offset=20
   i32.const 9472
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   local.get $1
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   i32.const 9728
   i32.store offset=8
   i32.const 9728
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 9888
   i32.store offset=12
   local.get $1
   i32.const 5584
   i32.store offset=16
   local.get $1
   i32.const 5584
   i32.store offset=16
   i32.const 9892
   i32.const 5584
   i32.store
   i32.const 9888
   i32.const 5584
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 9888
   i32.store offset=12
   local.get $1
   i32.const 1632
   i32.store offset=20
   i32.const 9888
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   local.get $1
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 9968
   i32.store offset=12
   local.get $1
   i32.const 5616
   i32.store offset=16
   local.get $1
   i32.const 5616
   i32.store offset=16
   i32.const 9972
   i32.const 5616
   i32.store
   i32.const 9968
   i32.const 5616
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 9968
   i32.store offset=12
   local.get $1
   i32.const 1632
   i32.store offset=20
   i32.const 9968
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   local.get $1
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   i32.const 10000
   i32.store offset=8
   i32.const 10000
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   i32.const 10096
   i32.store offset=8
   i32.const 10096
   call $assembly/JSON/parseStringArray
   drop
   global.get $~lib/memory/__stack_pointer
   i32.const 10288
   i32.store offset=8
   i32.const 10288
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   i32.const 10400
   i32.store offset=8
   i32.const 10400
   call $assembly/JSON/parseArrayArray<~lib/array/Array<~lib/array/Array<~lib/string/String>>>
   drop
   global.get $~lib/memory/__stack_pointer
   i32.const 10480
   i32.store offset=8
   i32.const 10480
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   i32.const 10624
   i32.store offset=8
   i32.const 10624
   call $assembly/JSON/parseArrayArray<~lib/array/Array<~lib/array/Array<~lib/string/String>>>
   drop
   global.get $~lib/memory/__stack_pointer
   i32.const 10720
   i32.store offset=8
   i32.const 10720
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 10912
   i32.store offset=8
   i32.const 0
   local.set $13
   i32.const 0
   local.set $12
   local.get $1
   i32.const 12
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i64.const 0
   i64.store
   local.get $0
   i32.const 0
   i32.store offset=8
   local.get $0
   i32.const 8
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i64.const 0
   i64.store
   local.get $1
   i32.const 16
   i32.const 24
   call $~lib/rt/itcms/__new
   local.tee $14
   i32.store
   local.get $14
   i32.const 0
   i32.store
   local.get $14
   i32.const 0
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $14
   i32.const 0
   i32.store offset=4
   local.get $14
   i32.const 0
   i32.store offset=8
   local.get $14
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 32
   i32.const 0
   call $~lib/rt/itcms/__new
   local.tee $1
   i32.store offset=4
   local.get $1
   i32.const 32
   call $~lib/memory/memory.fill
   local.get $14
   local.get $1
   i32.store
   local.get $14
   local.get $1
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $14
   local.get $1
   i32.store offset=4
   local.get $14
   i32.const 32
   i32.store offset=8
   local.get $14
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $0
   local.get $14
   i32.store
   i32.const -1
   local.set $0
   i32.const 1
   local.set $1
   loop $for-loop|01
    local.get $1
    i32.const 10908
    i32.load
    i32.const 1
    i32.shr_u
    i32.const 1
    i32.sub
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     i32.const 10912
     local.get $1
     call $~lib/string/String#charAt
     local.tee $11
     i32.store offset=4
     global.get $~lib/memory/__stack_pointer
     i32.const 6032
     i32.store offset=8
     local.get $13
     i32.const 1
     i32.add
     local.get $13
     local.get $11
     i32.const 6032
     call $~lib/string/String.__eq
     select
     local.set $13
     global.get $~lib/memory/__stack_pointer
     i32.const 6128
     i32.store offset=8
     local.get $13
     local.get $12
     i32.const 1
     i32.add
     local.get $12
     local.get $11
     i32.const 6128
     call $~lib/string/String.__eq
     select
     local.tee $12
     i32.eq
     i32.const 0
     local.get $13
     i32.const 0
     i32.gt_s
     select
     if
      i32.const 10912
      local.get $0
      i32.const 2
      i32.add
      local.get $1
      i32.const 1
      i32.add
      call $~lib/string/String#slice
      local.set $0
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.store offset=8
      local.get $0
      call $assembly/JSON/parseArrayArray<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/array/Array<~lib/string/String>>>>>>>>>>>>>>>>>
      local.set $0
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.store offset=8
      local.get $14
      local.get $0
      call $~lib/array/Array<~lib/string/String>#push
      i32.const 0
      local.set $13
      i32.const 0
      local.set $12
      local.get $1
      local.set $0
     end
     local.get $1
     i32.const 1
     i32.add
     local.set $1
     br $for-loop|01
    end
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 11072
   i32.store offset=8
   i32.const 11072
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   i32.const 11376
   i32.store offset=8
   i32.const 11376
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i32.const 11488
   i32.store offset=8
   i32.const 0
   local.set $1
   local.get $0
   i32.const 16
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i64.const 0
   i64.store
   local.get $0
   i64.const 0
   i64.store offset=8
   local.get $0
   call $~lib/array/Array<~lib/string/String>#constructor
   local.tee $14
   i32.store
   i32.const 1
   local.set $0
   loop $for-loop|03
    local.get $1
    i32.const 11484
    i32.load
    i32.const 1
    i32.shr_u
    i32.const 1
    i32.sub
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     i32.const 11488
     local.get $1
     call $~lib/string/String#charAt
     local.tee $13
     i32.store offset=4
     global.get $~lib/memory/__stack_pointer
     i32.const 6064
     i32.store offset=8
     local.get $13
     i32.const 6064
     call $~lib/string/String.__eq
     if
      i32.const 11488
      local.get $0
      local.get $1
      call $~lib/string/String#slice
      local.set $0
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.store offset=8
      local.get $14
      local.get $0
      call $~lib/array/Array<~lib/string/String>#push
      local.get $1
      i32.const 1
      i32.add
      local.set $0
     end
     global.get $~lib/memory/__stack_pointer
     i32.const 8320
     i32.store offset=8
     local.get $1
     i32.const 1
     i32.add
     local.tee $1
     local.get $0
     local.get $13
     i32.const 8320
     call $~lib/string/String.__eq
     select
     local.set $0
     br $for-loop|03
    end
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 11488
   local.get $0
   i32.const 11484
   i32.load
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.sub
   call $~lib/string/String#slice
   local.tee $1
   i32.store offset=12
   local.get $1
   if
    local.get $14
    local.get $1
    call $~lib/array/Array<~lib/string/String>#push
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i64.const 0
   i64.store
   local.get $1
   i32.const 0
   i32.store offset=8
   local.get $1
   call $assembly/test/HelloWorld#constructor
   local.tee $0
   i32.store
   local.get $14
   i32.const 0
   call $~lib/array/Array<~lib/string/String>#__get
   local.set $14
   global.get $~lib/memory/__stack_pointer
   local.get $14
   i32.store offset=4
   local.get $0
   local.get $14
   i32.const 1
   local.get $14
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.sub
   call $~lib/string/String#slice
   local.tee $14
   i32.store
   local.get $0
   local.get $14
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $1
   local.get $0
   i32.store offset=8
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 11680
   i32.store offset=8
   i32.const 11680
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i32.const 11792
   i32.store offset=8
   i32.const 0
   local.set $1
   local.get $0
   i32.const 16
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i64.const 0
   i64.store
   local.get $0
   i64.const 0
   i64.store offset=8
   local.get $0
   call $~lib/array/Array<~lib/string/String>#constructor
   local.tee $14
   i32.store
   i32.const 1
   local.set $0
   loop $for-loop|05
    local.get $1
    i32.const 11788
    i32.load
    i32.const 1
    i32.shr_u
    i32.const 1
    i32.sub
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     i32.const 11792
     local.get $1
     call $~lib/string/String#charAt
     local.tee $13
     i32.store offset=4
     global.get $~lib/memory/__stack_pointer
     i32.const 6064
     i32.store offset=8
     local.get $13
     i32.const 6064
     call $~lib/string/String.__eq
     if
      i32.const 11792
      local.get $0
      local.get $1
      call $~lib/string/String#slice
      local.set $0
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.store offset=8
      local.get $14
      local.get $0
      call $~lib/array/Array<~lib/string/String>#push
      local.get $1
      i32.const 1
      i32.add
      local.set $0
     end
     global.get $~lib/memory/__stack_pointer
     i32.const 8320
     i32.store offset=8
     local.get $1
     i32.const 1
     i32.add
     local.tee $1
     local.get $0
     local.get $13
     i32.const 8320
     call $~lib/string/String.__eq
     select
     local.set $0
     br $for-loop|05
    end
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 11792
   local.get $0
   i32.const 11788
   i32.load
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.sub
   call $~lib/string/String#slice
   local.tee $1
   i32.store offset=12
   local.get $1
   if
    local.get $14
    local.get $1
    call $~lib/array/Array<~lib/string/String>#push
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12332
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i64.const 0
   i64.store
   local.get $0
   i32.const 0
   i32.store offset=8
   local.get $0
   call $assembly/test/NameAge#constructor
   local.tee $1
   i32.store
   local.get $14
   i32.const 0
   call $~lib/array/Array<~lib/string/String>#__get
   local.set $13
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store offset=4
   local.get $1
   local.get $13
   i32.const 1
   local.get $13
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.sub
   call $~lib/string/String#slice
   local.tee $13
   i32.store
   local.get $1
   local.get $13
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $14
   i32.const 1
   call $~lib/array/Array<~lib/string/String>#__get
   local.set $14
   global.get $~lib/memory/__stack_pointer
   local.get $14
   i32.store offset=4
   local.get $1
   local.get $14
   call $~lib/util/string/strtol<f64>
   i32.trunc_f64_s
   i32.store offset=4
   local.get $0
   local.get $1
   i32.store offset=8
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 11872
   i32.store offset=8
   i32.const 11872
   call $~lib/as-console/index/console.log<~lib/string/String>
   global.get $~lib/memory/__stack_pointer
   i32.const 144
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  i32.const 28736
  i32.const 28784
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/test/HelloWorld#constructor (result i32)
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 4
  i32.const 3
  call $~lib/rt/itcms/__new
  local.tee $0
  i32.store
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.const 0
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/test/NameAge#constructor (result i32)
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 8
  i32.const 4
  call $~lib/rt/itcms/__new
  local.tee $0
  i32.store
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $0
  i32.const 0
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $~lib/as-string-sink/index/StringSink#constructor (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $1
  i32.const 0
  i32.store
  local.get $1
  i32.const 8
  i32.const 5
  call $~lib/rt/itcms/__new
  local.tee $1
  i32.store
  local.get $1
  i32.const 0
  i32.store
  local.get $1
  i32.const 0
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
  i32.const 1
  i32.shl
  local.tee $2
  i32.const 64
  local.get $2
  i32.const 64
  i32.gt_u
  select
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $3
  i32.store
  local.get $1
  local.get $3
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $2
  if
   local.get $1
   i32.load
   local.get $0
   local.get $2
   call $~lib/memory/memory.copy
   local.get $1
   local.get $2
   local.get $1
   i32.load offset=4
   i32.add
   i32.store offset=4
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $~lib/as-string-sink/index/StringSink#toString (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.load offset=4
  local.tee $1
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 1632
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
  call $~lib/memory/memory.copy
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $~lib/util/number/itoa32 (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 2544
   return
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  local.get $0
  i32.sub
  local.get $0
  local.get $0
  i32.const 31
  i32.shr_u
  local.tee $1
  select
  local.tee $2
  local.tee $0
  i32.const 100000
  i32.lt_u
  if (result i32)
   local.get $0
   i32.const 100
   i32.lt_u
   if (result i32)
    local.get $0
    i32.const 10
    i32.ge_u
    i32.const 1
    i32.add
   else
    local.get $0
    i32.const 10000
    i32.ge_u
    i32.const 3
    i32.add
    local.get $0
    i32.const 1000
    i32.ge_u
    i32.add
   end
  else
   local.get $0
   i32.const 10000000
   i32.lt_u
   if (result i32)
    local.get $0
    i32.const 1000000
    i32.ge_u
    i32.const 6
    i32.add
   else
    local.get $0
    i32.const 1000000000
    i32.ge_u
    i32.const 8
    i32.add
    local.get $0
    i32.const 100000000
    i32.ge_u
    i32.add
   end
  end
  local.get $1
  i32.add
  local.tee $3
  i32.const 1
  i32.shl
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $0
  i32.store
  local.get $0
  local.get $2
  local.get $3
  call $~lib/util/number/utoa32_dec_lut
  local.get $1
  if
   local.get $0
   i32.const 45
   i32.store16
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $~lib/util/number/dtoa (param $0 f64) (result i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  f64.const 0
  f64.eq
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 4240
   return
  end
  local.get $0
  local.get $0
  f64.sub
  f64.const 0
  f64.ne
  if
   local.get $0
   local.get $0
   f64.ne
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    i32.const 4272
    return
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 4304
   i32.const 4352
   local.get $0
   f64.const 0
   f64.lt
   select
   return
  end
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
  i32.const 4384
  local.get $1
  call $~lib/memory/memory.copy
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $~lib/rt/__newArray (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $5
  i32.const 0
  i32.store
  local.get $0
  i32.const 2
  i32.shl
  local.tee $4
  local.set $6
  local.get $4
  i32.const 0
  call $~lib/rt/itcms/__new
  local.set $3
  local.get $2
  if
   local.get $3
   local.get $2
   local.get $6
   call $~lib/memory/memory.copy
  end
  local.get $5
  local.get $3
  i32.store
  i32.const 16
  local.get $1
  call $~lib/rt/itcms/__new
  local.tee $1
  local.get $3
  i32.store
  local.get $1
  local.get $3
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $1
  local.get $3
  i32.store offset=4
  local.get $1
  local.get $4
  i32.store offset=8
  local.get $1
  local.get $0
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $~lib/string/String#slice (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
  local.set $3
  local.get $1
  i32.const 0
  i32.lt_s
  if (result i32)
   local.get $1
   local.get $3
   i32.add
   local.tee $1
   i32.const 0
   local.get $1
   i32.const 0
   i32.gt_s
   select
  else
   local.get $1
   local.get $3
   local.get $1
   local.get $3
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
   local.tee $2
   i32.const 0
   local.get $2
   i32.const 0
   i32.gt_s
   select
  else
   local.get $2
   local.get $3
   local.get $2
   local.get $3
   i32.lt_s
   select
  end
  local.get $1
  i32.sub
  local.tee $2
  i32.const 0
  i32.le_s
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 1632
   return
  end
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.const 1
  i32.shl
  local.tee $3
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $2
  i32.store
  local.get $2
  local.get $0
  local.get $1
  i32.const 1
  i32.shl
  i32.add
  local.get $3
  call $~lib/memory/memory.copy
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $~lib/array/Array<~lib/string/String>#constructor (result i32)
  (local $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i64.const 0
  i64.store
  local.get $0
  i32.const 16
  i32.const 7
  call $~lib/rt/itcms/__new
  local.tee $0
  i32.store
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  i32.const 32
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $1
  i32.store offset=4
  local.get $1
  i32.const 32
  call $~lib/memory/memory.fill
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $0
  i32.const 32
  i32.store offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $~lib/string/String#charAt (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
  i32.ge_u
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 1632
   return
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 2
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $2
  i32.store
  local.get $2
  local.get $0
  local.get $1
  i32.const 1
  i32.shl
  i32.add
  i32.load16_u
  i32.store16
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $~lib/array/Array<~lib/string/String>#__get (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 12332
  i32.lt_s
  if
   i32.const 28736
   i32.const 28784
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   i32.const 1216
   i32.const 10208
   i32.const 99
   i32.const 42
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $0
  i32.store
  local.get $0
  i32.eqz
  if
   i32.const 11552
   i32.const 10208
   i32.const 103
   i32.const 40
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
)
