import React from 'react';

export const Heading = ({
    level = 2,
    children,
    className = '',
    text = '',
    styles = {},
    dangerouslySetInnerHTML = false,
    allowHTML = false,
    ...props
}) => {
    const HeadingTag = `h${Math.min(Math.max(level, 1), 6)}`;
    
    const getDefaultClass = () => {
        switch (level) {
            case 1: return 'text-4xl md:text-5xl font-bold';
            case 2: return 'text-3xl md:text-4xl font-bold';
            case 3: return 'text-2xl md:text-3xl font-semibold';
            case 4: return 'text-xl md:text-2xl font-semibold';
            case 5: return 'text-lg md:text-xl font-medium';
            case 6: return 'text-base md:text-lg font-medium';
            default: return 'text-3xl font-bold';
        }
    };

    const combinedClassName = `${getDefaultClass()} ${className}`.trim();
    const parseSimpleHTML = (htmlString) => {
        if (!htmlString || typeof htmlString !== 'string') return null;
        const regex = /(<([a-zA-Z]+)([^>]*)>([^<]*)<\/\2>)|([^<]+)/g;
        const parts = [];
        let match;
        
        while ((match = regex.exec(htmlString)) !== null) {
            if (match[0].startsWith('<')) {
                const tagName = match[2];
                const attributes = match[3] || '';
                const content = match[4] || '';
                const attrObj = {};
                const attrRegex = /([a-zA-Z-]+)="([^"]*)"/g;
                let attrMatch;
                while ((attrMatch = attrRegex.exec(attributes)) !== null) {
                    attrObj[attrMatch[1]] = attrMatch[2];
                }
                
                parts.push(
                    React.createElement(
                        tagName,
                        { key: parts.length, ...attrObj },
                        content
                    )
                );
            } else {
                parts.push(<React.Fragment key={parts.length}>{match[0]}</React.Fragment>);
            }
        }
        
        return parts.length > 0 ? parts : htmlString;
    };
    
    const renderContent = () => {
        if (dangerouslySetInnerHTML && text) {
            return <span dangerouslySetInnerHTML={{ __html: text }} />;
        }
        
        if (text && allowHTML) {
            const parsed = parseSimpleHTML(text);
            return parsed;
        }
        
        if (text && !dangerouslySetInnerHTML) {
            return renderTextWithBreaks(text);
        }
        
        return children;
    };
    
    const renderTextWithBreaks = (content) => {
        const parts = content.split(/(<br\s*\/?>)/gi);
        return parts.map((part, index) => {
            if (part.match(/<br\s*\/?>/i)) {
                return <React.Fragment key={index}><br /></React.Fragment>;
            }
            return <React.Fragment key={index}>{part}</React.Fragment>;
        });
    };
    
    return (
        <HeadingTag
            className={combinedClassName}
            style={styles}
            {...props}
        >
            {renderContent()}
        </HeadingTag>
    );
};