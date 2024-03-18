import React from 'react';
import { skills } from '../model/Skills';

export default function Skills() {
    return (
        <div className="h-1/4 bg-zinc-950 border-t p-5 border-zinc-800 w-full text-cyan-700 fixed bottom-0 select-none">
            <div className="text-lg poppins-medium mb-2">SKILLS</div>
            <SkillsComponent skills={skills} />
        </div>
    );
}

export const SkillsComponent = ({ skills }) => {
    return (
        <div className="flex space-x-8 overflow-x-auto p-4">
            {skills.map((skill) => (
                <div key={skill.key} className="flex flex-col items-center">
                    <div className="relative">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-zinc-950">
                            {skill.icon}
                        </div>
                        <svg className="absolute top-0 right-0 bottom-0 left-0" viewBox="0 0 36 36">
                            <path
                                className="circle-bg"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#18181b"
                                strokeWidth="2"
                            ></path>
                            <path
                                className="circle"
                                strokeDasharray={`${skill.level}, 100`}
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                strokeLinecap="round"
                                stroke="#3e3b40"
                                strokeWidth="2"
                                transform="rotate(90 18 18)"
                            ></path>
                        </svg>
                    </div>
                    <p className="mt-2 text-sm text-zinc-500">{skill.skill}</p>
                </div>
            ))}
        </div>
    );
};
