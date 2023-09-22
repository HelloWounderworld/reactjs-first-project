export const ContentList = () => {
    return (
        // this.state = {
        //     list_data: [
        //         {
        //             id: 1,
        //             company: 'Premium Art',
        //             division: 'Design',
        //             title: 'Content 1',
        //             createdData: '11-09-2023 7:08',
        //             updatedDate: '11-09-2023 7:08' 
        //             },
        //             {
        //             id: 2,
        //             company: 'Buu Digital LTDA',
        //             division: 'Programmer',
        //             title: 'Toft Site',
        //             createdData: '11-09-2023 7:08',
        //             updatedDate: '11-09-2023 7:08' 
        //             },
        //             {
        //             id: 3,
        //             company: 'Center Bob',
        //             division: 'FrontEnd',
        //             title: 'Tools for Building',
        //             createdData: '11-09-2023 7:08',
        //             updatedDate: '11-09-2023 7:08' 
        //             }
        //     ]
        // };
        // console.log(this.state)
        <div key={1}>
            <h1>{'Premium Art!'}</h1>
            <h2>{'Designer!'}</h2>
        </div>
        // this.state.list_data.map((content) => (
        //     <div key={content.id}>
        //         <h1>{content.company}</h1>
        //         <h2>{content.division}</h2>
        //     </div>
        // ));
    );
}