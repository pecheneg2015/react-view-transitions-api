import {Paragraph} from './Paragraph';

type PageContentProps = {
    title: string
}

export const PageContent = ({title}: PageContentProps) => {
    return <div className='flex flex-col gap-6'>
        <h1 className='text-3xl font-bold text-[#00754B]'>
            {title}
        </h1>
        <div className='flex flex-col gap-2'>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus lectus dolor, eget malesuada nibh
                feugiat non. Sed nisi dolor, mattis quis dolor et, sagittis scelerisque risus. Ut in nisi non turpis
                bibendum ornare et in mi. Quisque a commodo orci. Morbi congue dolor dictum urna mattis ultricies. Sed
                in purus a odio scelerisque elementum. Ut mollis mauris eu sem hendrerit tincidunt. Etiam eget
                consectetur augue. Vestibulum at tellus est. Cras commodo venenatis nibh, faucibus tristique mauris
                tristique nec.
            </Paragraph>
            <Paragraph>
                Duis euismod hendrerit libero, tristique facilisis nibh pretium at. Nunc pellentesque massa quam, et
                pretium justo fringilla id. Quisque sed magna fringilla est imperdiet porttitor eget vestibulum elit.
                Nam mauris nisl, pharetra in nisl vitae, lobortis convallis urna. Sed malesuada pellentesque finibus.
                Vivamus convallis risus et magna aliquam, sed faucibus nisi porttitor. Maecenas ac ligula facilisis,
                pellentesque elit eu, vulputate lorem. Cras tristique massa non lorem facilisis cursus. Aliquam sem
                nulla, posuere malesuada aliquam eu, elementum non tellus. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Nam id nibh a nisl ornare blandit et posuere metus. Donec
                lorem enim, accumsan nec ipsum vel, volutpat ullamcorper tortor.
            </Paragraph>
            <Paragraph>
                Quisque suscipit, dui sed ultrices aliquam, lorem ligula ultrices quam, sed gravida ex dolor fringilla
                est. In porttitor nunc quis ipsum fermentum, aliquam suscipit lacus convallis. Ut feugiat pretium
                sapien, non tristique tellus. Ut mattis bibendum dolor, in lacinia tortor pharetra non. Nulla congue et
                lectus a lobortis. Mauris tortor lacus, rhoncus ut commodo vel, placerat nec erat. Vivamus sit amet
                metus maximus massa dictum ultrices.
            </Paragraph>
            <Paragraph>
                Nulla accumsan ultrices sem et elementum. Ut nunc dolor, mattis vitae leo vitae, efficitur aliquet
                risus. Nunc vehicula, purus eget congue dictum, enim magna pretium tellus, in efficitur elit dui nec
                quam. Donec malesuada risus libero, vel imperdiet dolor semper non. Cras aliquet, nulla eu auctor
                efficitur, ipsum lectus tempor sapien, sed volutpat eros orci et ante. Morbi ut semper justo. Nullam
                volutpat sagittis interdum. Vivamus vitae suscipit ante. Cras non suscipit turpis, a pellentesque
                mauris. Etiam egestas risus vitae eleifend lacinia. Praesent condimentum quis leo id fermentum. Donec at
                scelerisque velit. Morbi vehicula augue quis urna gravida, ac luctus nulla congue. Nulla semper dapibus
                ante, id facilisis turpis commodo sed. Quisque posuere nec ex in mattis. Phasellus faucibus laoreet
                accumsan.
            </Paragraph>
            <Paragraph>
                Ut eget nisi nec nunc commodo tincidunt. Quisque porta, neque at venenatis malesuada, nisi velit
                elementum quam, nec elementum quam dolor quis nisi. Vestibulum eu vestibulum libero. Etiam metus nunc,
                varius eu erat sed, vestibulum laoreet metus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Nunc ac pharetra purus, et dictum dolor. Donec justo odio,
                tempor vitae arcu quis, ultricies tristique eros. Phasellus vehicula ligula sapien, nec aliquet dui
                congue ac. Nullam eu finibus augue. Integer nec dapibus magna.
            </Paragraph>
        </div>
    </div>
}