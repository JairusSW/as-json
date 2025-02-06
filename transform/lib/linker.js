export function getImports(source) {
    return source.statements.filter((v) => v.kind === 42);
}
export function getImportedClass(name, source, parser) {
    for (const stmt of getImports(source)) {
        const externalSource = parser.sources.find((src) => src.internalPath === stmt.internalPath);
        if (!externalSource)
            continue;
        const classDeclaration = externalSource.statements.find((s) => s.kind === 51 && s.name.text === name);
        if (classDeclaration)
            return classDeclaration;
    }
    return null;
}
export function getClasses(source) {
    return source.statements.filter((v) => v.kind === 51);
}
//# sourceMappingURL=linker.js.map