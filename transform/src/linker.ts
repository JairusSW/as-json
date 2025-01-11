import { ClassDeclaration, ImportStatement, NodeKind, Parser, Source } from "assemblyscript/dist/assemblyscript.js";

export function getImports(source: Source): ImportStatement[] {
  return source.statements.filter((v) => v.kind === NodeKind.Import) as ImportStatement[];
}

export function getImportedClass(name: string, source: Source, parser: Parser): ClassDeclaration | null {
  for (const stmt of getImports(source)) {
    const externalSource = parser.sources.find((src) => src.internalPath === stmt.internalPath);
    if (!externalSource) continue;

    const classDeclaration = externalSource.statements.find((s) => s.kind === NodeKind.ClassDeclaration && (<ClassDeclaration>s).name.text === name) as ClassDeclaration | null;

    if (classDeclaration) return classDeclaration;
  }
  return null;
}

export function getClasses(source: Source): ClassDeclaration[] {
  return source.statements.filter((v) => v.kind === NodeKind.ClassDeclaration) as ClassDeclaration[];
}
