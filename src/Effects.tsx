import { useState, useEffect } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [num, setNum] = useState(-1);

    let callback = (n: number) => {
        setNum(n);
    };

    useEffect(() => {
        setNum(-1);
        subscribe(props.sourceId, callback);
        return () => {
            unsubscribe(props.sourceId, callback);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {num}
        </div>
    );
}
