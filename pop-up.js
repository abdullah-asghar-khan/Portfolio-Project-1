const projects = [
    {
      name: 'Tonic',
      devInfo: 'Abdullah',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text.",
      languages: ['html', 'css', 'javascript'],
      image: '(./images/Card-works.png)',
      liveVersion: 'See Live',
      sourceLink: 'See Source',
    },
  
    {
      name: 'Multi-Post Stories',
      devInfo: 'Ishpaul',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text.",
      languages: ['html', 'css', 'javascript', 'React'],
      image: '(./images/Card-works.png)',
      liveVersion: 'See Live',
      sourceLink: 'See Source',
    },
  
    {
      name: 'Tonic',
      devInfo: 'IAbdullah',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text.",
      languages: ['html', 'css', 'javascript'],
      image: '(./images/Card-works.png)',
      liveVersion: 'See Live',
      sourceLink: 'See Source',
    },
  
    {
      name: 'Multi-Post Stories',
      devInfo: 'Abdullah',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text.",
      languages: ['html', 'css', 'javascript'],
      image: '(./images/Card-works.png)',
      liveVersion: 'See Live',
      sourceLink: 'See Source',
    },
  ];
   
  const recentWorks = document.getElementById('#recent-works');
  function addProjects(n) {
    const {
      name,
      devInfo,
      description,
      languages,
      image,
    } = projects[n];



