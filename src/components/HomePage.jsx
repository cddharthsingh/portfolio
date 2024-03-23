import CodeWithTypewriter from './CodeWithTypewriter';

export default function HomePage() {
    const sampleCode = `
<div>
    <p>
        Diving into the digital world with a mix of creativity, caffeine, and code,
        I'm <span> Siddharth Singh </span>, a Full Stack Developer with a knack for crafting
        minimal yet impactful solutions. From spinning up dynamic web applications
        to decoding the complexities of user interfaces, I've journeyed through the realms 
        of React, Node, Angular, and beyond.
    </p>
    <p>
        When I'm not tethered to my keyboard, you might find me exploring the endless 
        possibilities of graphic design and UI/UX.
    </p>
</div>`.trim();

    return <CodeWithTypewriter code={sampleCode} />;
}
