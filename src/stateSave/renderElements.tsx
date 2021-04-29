import React, {FC, useState} from "react";

import { ElementTypes } from "./types";

interface IRenderBE{ children: React.ReactNode }
export const RenderBaseElement: FC<IRenderBE> = ({ children }) => (
    <div style={{
        border: '2px solid grey',
        padding: '15px',
        margin: '10px'
    }}>
        {children}
    </div>
)

export enum FieldTypes{
    CharField = "Any",
    NumField = "Number"
}

interface IField{
    data: string
    subType?: FieldTypes
}

export const InputField: React.FC<IField> = ({ data }) => {
    const [fieldData, setFieldData] = useState<IField>({ data , subType: FieldTypes.CharField });
    const updateField = (e: React.FormEvent<HTMLInputElement>) => {
        setFieldData({ ...fieldData, data: e.currentTarget.value });
    }
    return(
        <div style={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
            <div style={{ padding: '10px' }}>
                <select>
                    {
                        Object.keys(FieldTypes).map(key=>
                            <option defaultChecked={ fieldData.subType === key ? true : false } value={key} key={Math.random()}>{key}</option>
                            )
                    }
                </select>
            </div>
            <div style={{ padding: '10px' }}>
                <input onChange={updateField} value={fieldData.data} />
            </div>
            <div style={{
                padding: '10px'
            }} >
                <button>Save</button>
            </div>
        </div>
    )
};