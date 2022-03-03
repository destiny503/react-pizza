import React from 'react';
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="140" cy="140" r="140" />
                <rect x="0" y="300" rx="6" ry="6" width="280" height="25" />
                <rect x="0" y="340" rx="6" ry="6" width="280" height="60" />
                <rect x="130" y="408" rx="15" ry="15" width="150" height="43" />
                <rect x="0" y="415" rx="6" ry="6" width="110" height="28" />
        </ContentLoader>
    );
};

export default LoadingBlock;