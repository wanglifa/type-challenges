type Kong = ' ' | '\n' | '\t'
type Trim<S extends string> = S extends `${Kong}${infer Content}` | `${infer Content}${Kong}` ? Trim<Content> : S

