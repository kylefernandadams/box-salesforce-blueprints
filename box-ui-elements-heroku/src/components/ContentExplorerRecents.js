import React, { useState, useEffect } from 'react';
// import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import { ContentExplorer } from 'box-ui-elements';
import { ScaleLoader } from 'react-spinners';
import { THEME_COLOR, EXPRESS_SERVER_HOST } from '../Constants';


export default ({ userId }) => {
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const fetchToken = async () => {
            console.log('Found userId: ', userId)
            setIsLoading(true);
            const result = await axios.get(`${EXPRESS_SERVER_HOST}/box/explorer-recents/token-downscope/${userId}`);
            setToken(result.data.accessToken);
            setIsLoading(false);
        }
        fetchToken();
    }, []);
    if(token) {
        return (
                <div className="elements">
                <ContentExplorer
                    logoUrl={""}
                    defaultView={"recents"}
                    token={token}
                    contentPreviewProps={{
                        showAnnotations: true,
                        contentSidebarProps: {
                            detailsSidebarProps: {
                                hasProperties: true,
                                hasNotices: true,
                                hasAccessStats: true,
                                hasClassification: true,
                                hasRetentionPolicy: true,
                                hasVersions: true,
                            },
                            hasActivityFeed: true,
                            hasMetadata: true,
                            hasSkills: true
                        }
                    }}
                />
                </div>
        );
    }
    else {
        return(
                <div className="elements">
                    <div className="spinner">
                        <ScaleLoader 
                            color={THEME_COLOR}
                            loading={isLoading}
                        />
                    </div>                
                </div>
        );
    }
};
