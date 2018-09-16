const localState = {
  albums: [
    {
      id: "382ObEPsp2rxGrnsizN5TX",
      imageSrc: `https://i.scdn.co/image/8239e8408eb461055a785cbaef37da6e5a4f5240`,
      label: "Walt Disney Records",
      name: "TRON: Legacy Reconfigured",
      popularity: 50,
      releasedIn: "2011-01-01",
      totalTracks: 15
    },
    {
      id: "4tZwfgrHOc3mvqYlEYSvVi",
      imageSrc: `https://i.scdn.co/image/dce7f4e4c5f8741e0f08877863a8e57dfe1d4224`,
      label: "Parlophone France",
      name: "Human After All",
      popularity: 51,
      releasedIn: "2011-01-01",
      totalTracks: 5
    }
  ],
  loading: false
};

export const albumReducer = (state: any = localState, action: any) => {
  switch(action.type){
    default:
      return state;
  }
}
