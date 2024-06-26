This is React/Next application for training end learning concepts about Next/React
Also for checking some git options and CI/CD technics



---------------
```TypeScript
import Image from 'next/image'


const textHeading: string = "Heading Line For This Cat's Picture";

export async function CatsImageComponent(): JSX.Element {
    const textHeading: string = "Heading Line For This Cat's Picture";
    return (
            <div>

            <Image src="/profile.png"
                            width={500}
                                height={500}
                                    alt="Picture of the author"
                                                                />
            <p>{textHeading}</p>
            </div>
           )

}

``` 