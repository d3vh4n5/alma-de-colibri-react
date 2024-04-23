import { type Option, type OptionItem } from "@/types/types"


const DropDownButton = () => {

    const options: Option[] = [
        {
            title: 'Titulo',
            list: [
                {
                    name: 'Item',
                    href: '/product/id'
                },
                {
                    name: 'Item',
                    href: '/product/id'
                },
                {
                    name: 'Item',
                    href: '/product/id'
                },
            ]
        },
        {
            title: 'Titulo',
            list: [
                {
                    name: 'Item',
                    href: '/product/id'
                },
                {
                    name: 'Item',
                    href: '/product/id'
                },
                {
                    name: 'Item',
                    href: '/product/id'
                },
            ]
        },
        {
            title: 'Titulo',
            list: [
                {
                    name: 'Item',
                    href: '/product/id'
                },
                {
                    name: 'Item',
                    href: '/product/id'
                },
                {
                    name: 'Item',
                    href: '/product/id'
                },
            ]
        },
        {
            title: 'Titulo',
            list: [
                {
                    name: 'Item',
                    href: '/product/id'
                },
                {
                    name: 'Item',
                    href: '/product/id'
                },
                {
                    name: 'Item',
                    href: '/product/id'
                },
            ]
        },
        {
            title: 'Titulo',
            list: [
                {
                    name: 'Item',
                    href: '/product/id'
                },
                {
                    name: 'Item',
                    href: '/product/id'
                },
                {
                    name: 'Item',
                    href: '/product/id'
                },
            ]
        },
    ]

  return (
    <div className="border py-1 px-2 group hover:bg-emerald-300">
        <div>
            Productos v
        </div>
        <div className="group-hover:grid hidden grid-cols-3 absolute bg-emerald-500/70 p-2 mt-1 backdrop-blur-md">
            {
                options.map((option: Option, index: number) => (
                    <ul key={index} className="p-2 text-end">
                        <p className="underline">{option.title}</p>
                        {
                            option.list.map((item: OptionItem, index: number)=>(
                                <li key={index}>
                                    <a href={item.href} className="text-blue-600">{item.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                ))
            }
        </div>
    </div>
  )
}

export default DropDownButton