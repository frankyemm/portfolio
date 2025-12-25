"use client";

import { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import mermaid from "mermaid";

// Initialize mermaid with 8-bit dark theme
mermaid.initialize({
    startOnLoad: false,
    theme: "dark",
    themeVariables: {
        primaryColor: "#006666",
        primaryTextColor: "#F2F2F2",
        primaryBorderColor: "#C04F15",
        lineColor: "#F2F2F2",
        secondaryColor: "#163E64",
        tertiaryColor: "#2E2E2E",
        background: "#2E2E2E",
        mainBkg: "#2E2E2E",
        nodeBorder: "#C04F15",
        clusterBkg: "#163E64",
        titleColor: "#F2F2F2",
        edgeLabelBackground: "#2E2E2E",
        fontFamily: "Press Start 2P, monospace",
        fontSize: "10px",
    },
    flowchart: {
        curve: "linear", // Sharp edges, no curves
        padding: 20,
    },
});

function MermaidDiagram({ code }: { code: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [svg, setSvg] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const renderDiagram = async () => {
            if (!containerRef.current) return;

            try {
                const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
                const { svg } = await mermaid.render(id, code);
                setSvg(svg);
                setError(null);
            } catch (err) {
                console.error("Mermaid rendering error:", err);
                setError("ERROR: FAILED TO RENDER DIAGRAM");
            }
        };

        renderDiagram();
    }, [code]);

    if (error) {
        return (
            <div
                style={{
                    padding: "16px",
                    background: "var(--gray-dark)",
                    border: "4px solid var(--orange-burnt)",
                    color: "var(--orange-burnt)",
                }}
            >
                {error}
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            style={{
                margin: "32px 0",
                padding: "24px",
                background: "var(--gray-dark)",
                border: "4px solid var(--teal-dark)",
                boxShadow: "8px 8px 0px var(--blue-petrolium)",
                overflowX: "auto",
            }}
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
}

// 8-bit code block theme
const retroTheme: { [key: string]: React.CSSProperties } = {
    'code[class*="language-"]': {
        color: "#F2F2F2",
        background: "none",
        fontFamily: '"Press Start 2P", monospace',
        fontSize: "8px",
        lineHeight: 2.5,
        whiteSpace: "pre",
        wordSpacing: "normal",
        wordBreak: "normal",
        wordWrap: "normal",
    },
    'pre[class*="language-"]': {
        color: "#F2F2F2",
        background: "#2E2E2E",
        fontFamily: '"Press Start 2P", monospace',
        fontSize: "8px",
        lineHeight: 2.5,
        padding: "16px",
        margin: 0,
        overflow: "auto",
    },
    comment: { color: "#006666" },
    prolog: { color: "#006666" },
    doctype: { color: "#006666" },
    cdata: { color: "#006666" },
    punctuation: { color: "#F2F2F2" },
    property: { color: "#C04F15" },
    tag: { color: "#C04F15" },
    boolean: { color: "#C04F15" },
    number: { color: "#C04F15" },
    constant: { color: "#C04F15" },
    symbol: { color: "#C04F15" },
    deleted: { color: "#C04F15" },
    selector: { color: "#006666" },
    "attr-name": { color: "#006666" },
    string: { color: "#006666" },
    char: { color: "#006666" },
    builtin: { color: "#006666" },
    inserted: { color: "#006666" },
    operator: { color: "#F2F2F2" },
    entity: { color: "#F2F2F2", cursor: "help" },
    url: { color: "#006666" },
    variable: { color: "#F2F2F2" },
    atrule: { color: "#C04F15" },
    "attr-value": { color: "#C04F15" },
    function: { color: "#C04F15" },
    "class-name": { color: "#C04F15" },
    keyword: { color: "#C04F15" },
    regex: { color: "#006666" },
    important: { color: "#C04F15", fontWeight: "bold" },
    bold: { fontWeight: "bold" },
    italic: { fontStyle: "italic" },
};

function CodeBlock({
    children,
    className,
}: {
    children: string;
    className?: string;
}) {
    const language = className?.replace(/language-/, "") || "text";

    if (language === "mermaid") {
        return <MermaidDiagram code={children.trim()} />;
    }

    return (
        <div
            style={{
                margin: "24px 0",
                border: "4px solid var(--teal-dark)",
                boxShadow: "4px 4px 0px var(--blue-petrolium)",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    background: "var(--teal-dark)",
                    padding: "8px 16px",
                    color: "var(--gray-light)",
                    fontSize: "8px",
                    borderBottom: "4px solid var(--gray-dark)",
                }}
            >
                [{language.toUpperCase()}]
            </div>
            <SyntaxHighlighter
                language={language}
                style={retroTheme}
                customStyle={{
                    margin: 0,
                    padding: "16px",
                    background: "var(--gray-dark)",
                    fontSize: "8px",
                }}
                showLineNumbers={false}
            >
                {children.trim()}
            </SyntaxHighlighter>
        </div>
    );
}

function Heading1({ children }: { children: React.ReactNode }) {
    return (
        <h1
            style={{
                fontSize: "16px",
                marginBottom: "24px",
                color: "var(--gray-light)",
                textTransform: "uppercase",
            }}
        >
            {children}
        </h1>
    );
}

function Heading2({ children }: { children: React.ReactNode }) {
    return (
        <h2
            style={{
                fontSize: "14px",
                marginTop: "48px",
                marginBottom: "16px",
                color: "var(--orange-burnt)",
                paddingBottom: "8px",
                borderBottom: "4px solid var(--teal-dark)",
                textTransform: "uppercase",
            }}
        >
            {"// "}{children}{" //"}
        </h2>
    );
}

function Heading3({ children }: { children: React.ReactNode }) {
    return (
        <h3
            style={{
                fontSize: "12px",
                marginTop: "32px",
                marginBottom: "12px",
                color: "var(--teal-dark)",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: "8px",
            }}
        >
            <span style={{ color: "var(--orange-burnt)" }}>{">"}</span>
            {children}
        </h3>
    );
}

function Blockquote({ children }: { children: React.ReactNode }) {
    return (
        <blockquote
            style={{
                margin: "24px 0",
                background: "var(--gray-dark)",
                borderLeft: "8px solid var(--orange-burnt)",
                padding: "16px 24px",
                boxShadow: "4px 4px 0px var(--blue-petrolium)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                }}
            >
                <span style={{ color: "var(--orange-burnt)", fontSize: "12px" }}>
                    {"!"}
                </span>
                <div style={{ color: "var(--gray-light)" }}>{children}</div>
            </div>
        </blockquote>
    );
}

function Paragraph({ children }: { children: React.ReactNode }) {
    return (
        <p
            style={{
                marginBottom: "24px",
                color: "var(--gray-light)",
                lineHeight: 2,
            }}
        >
            {children}
        </p>
    );
}

function UnorderedList({ children }: { children: React.ReactNode }) {
    return (
        <ul
            style={{
                marginBottom: "24px",
                paddingLeft: "24px",
                color: "var(--gray-light)",
            }}
        >
            {children}
        </ul>
    );
}

function ListItem({ children }: { children: React.ReactNode }) {
    return (
        <li
            style={{
                marginBottom: "12px",
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
            }}
        >
            <span style={{ color: "var(--orange-burnt)" }}>{">"}</span>
            <span>{children}</span>
        </li>
    );
}

function InlineCode({ children }: { children: React.ReactNode }) {
    return (
        <code
            style={{
                padding: "2px 8px",
                background: "var(--gray-dark)",
                color: "var(--orange-burnt)",
                border: "2px solid var(--teal-dark)",
                fontFamily: "var(--font-pixel)",
                fontSize: "8px",
            }}
        >
            {children}
        </code>
    );
}

function Strong({ children }: { children: React.ReactNode }) {
    return (
        <strong style={{ color: "var(--orange-burnt)" }}>{children}</strong>
    );
}

function Emphasis({ children }: { children: React.ReactNode }) {
    return (
        <em style={{ color: "var(--teal-dark)", fontStyle: "normal" }}>
            *{children}*
        </em>
    );
}

function HorizontalRule() {
    return (
        <hr
            style={{
                border: "none",
                height: "4px",
                background: "var(--teal-dark)",
                margin: "48px 0",
            }}
        />
    );
}

export const mdxComponents = {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    p: Paragraph,
    blockquote: Blockquote,
    ul: UnorderedList,
    li: ListItem,
    code: InlineCode,
    pre: ({
        children,
    }: {
        children: React.ReactElement<{ className?: string; children?: string }>;
    }) => {
        const className = children?.props?.className || "";
        const code = children?.props?.children || "";
        return <CodeBlock className={className}>{code}</CodeBlock>;
    },
    strong: Strong,
    em: Emphasis,
    hr: HorizontalRule,
};
