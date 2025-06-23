import { useState } from "react";

interface FoldableProps {
    title: string;
    moreInfo?: string[];
}

export const Foldable: React.FC<{props: FoldableProps}> = ({ props }) => {
    const [isFolded, setIsFolded] = useState(true);

    const toggleFoldable = () => {
        setIsFolded(!isFolded);
    };

    return (
        <div className="airport-card foldable-card"
            onClick={toggleFoldable}
            tabIndex={0}
            role="button"
            aria-expanded={!isFolded}
            onKeyPress={e => {
                if (e.key === "Enter" || e.key === " ") toggleFoldable();
            }}>
            <div className="foldable-header">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                    {isFolded
                        ? (<h3 className="foldable-title">{props.title}</h3>)
                        : props.moreInfo && (
                        <div className="foldable-content">
                            <h3 className="foldable-title">{props.title}</h3>
                            {props.moreInfo.map((info, idx) => (
                                <p key={idx} className="foldable-info">{info}</p>
                            ))}
                        </div>
                    )}
                </div>
                <span className="chevron" aria-hidden="true">
                    <svg width="36" height="36" viewBox="0 0 36 36" className="chevron-svg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        {isFolded ? (
                            //down chevron, falls back to currentColor in css
                            <polyline points="8,14 18,22 28,14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        ) : (
                            //up chevron, falls back to currentColor in css
                            <polyline points="8,22 18,14 28,22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        )}
                    </svg>
                </span>
            </div>
        </div>
    );
};