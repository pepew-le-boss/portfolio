import { FlatCompat } from "@eslint/eslintrc"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

// "prettier" vient de eslint-config-prettier et permet d'éviter que eslint formate à la place de prettier
// "plugin:prettier/recommended" vient de eslint-plugin-prettier et permet de traiter les règles de prettier comme des règles de eslint (donc avoir des quigly lines en dessous)
// "simple-import-sort" est un lib qui permet de trier et ordonner les imports
const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript", "prettier", "plugin:prettier/recommended"),
    ...compat.plugins("simple-import-sort"),
    {
        rules: {
            "prettier/prettier": "warn",
            "simple-import-sort/imports": "warn",
        },
    },
]

export default eslintConfig
