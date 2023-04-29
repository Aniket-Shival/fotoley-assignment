import './App.css';
import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function App() {

  const data = [
    {
      key: '1',
      Isrc: 'https://www.travelandleisure.com/thmb/R2kb6GuJwF4wVJhRVevV-FqOVao=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/el-yunque-national-rainforest-tropical-puerto-rico-TROPICALPLANTS0617-d3ccb18a16064e42bdd626cdf7a8cb68.jpg',
      title: 'Rainforest',
      des: 'LUFFY  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus aliquam, voluptate, similique, omnis libero voluptasLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta voluptate sunt sint iste magnam ipsam quidem eum numquam quaerat eius atque, officia earum itaque facilis eveniet tenetur. Possimus, a nostrum molestiae ratione architecto quae harum distinctio? Officiis quis exercitationem inventore eum aperiam molestiae laboriosam? Totam, minima sit? Consequuntur sapiente blanditiis aliquid in libero odio illo, dolores natus enim minus aliquam saepe accusamus corporis cum dolorum obcaecati rerum eaque soluta incidunt velit! Amet hic, delectus inventore aperiam quisquam perspiciatis voluptates magnam voluptatem mollitia harum beatae nobis aspernatur, voluptatum nulla quam?</p> minus ab dignissimos in quas dicta nemo adipisci enim culpa sunt nostrum excepturi quam? Modi, repellat perspiciatis?'
    },
    {
      key: '2',
      Isrc: 'https://www.travelandleisure.com/thmb/6pmQIQcehr_iHFpob9v653jrqLw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sturts-stony-desert-australia-LILDESERTS0519-19036cd0298e4e3bb67bffbe5e41c1be.jpg',
      title: 'Desert',
      des: 'Desert is dry. Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta voluptate sunt sint iste magnam ipsam quidem eum numquam quaerat eius atque, officia earum itaque facilis eveniet tenetur. Possimus, a nostrum molestiae ratione architecto quae harum distinctio? Officiis quis exercitationem inventore eum aperiam molestiae laboriosam? Totam, minima sit? Consequuntur sapiente blanditiis aliquid in libero odio illo, dolores natus enim minus aliquam saepe accusamus corporis cum dolorum obcaecati rerum eaque soluta incidunt velit! Amet hic, delectus inventore aperiam quisquam perspiciatis voluptates magnam voluptatem mollitia harum beatae nobis aspernatur, voluptatum nulla quam?</p>s adipisicing elit. Accusamus aliquam, voluptate, similique, omnis libero voluptas minus ab dignissimos in quas dicta nemo adipisci enim culpa sunt nostrum excepturi quam? Modi, repellat perspiciatis?'
    },
    {
      key: '3',
      Isrc: 'https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg',
      title: 'Mountain',
      des: ' High and mighty mountains Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta voluptate sunt sint iste magnam ipsam quidem eum numquam quaerat eius atque, officia earum itaque facilis eveniet tenetur. Possimus, a nostrum molestiae ratione architecto quae harum distinctio? Officiis quis exercitationem inventore eum aperiam molestiae laboriosam? Totam, minima sit? Consequuntur sapiente blanditiis aliquid in libero odio illo, dolores natus enim minus aliquam saepe accusamus corporis cum dolorum obcaecati rerum eaque soluta incidunt velit! Amet hic, delectus inventore aperiam quisquam perspiciatis voluptates magnam voluptatem mollitia harum beatae nobis aspernatur, voluptatum nulla quam?</p> adipisicing elit. Accusamus aliquam, voluptate, similique, omnis libero voluptas minus ab dignissimos in quas dicta nemo adipisci enim culpa sunt nostrum excepturi quam? Modi, repellat perspiciatis?'
    },
    {
      key: '4',
      Isrc: 'https://a-z-animals.com/media/2020/05/Coral-in-aquarium.jpg',
      title: 'Coral',
      des: 'Coral Reefs Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta voluptate sunt sint iste magnam ipsam quidem eum numquam quaerat eius atque, officia earum itaque facilis eveniet tenetur. Possimus, a nostrum molestiae ratione architecto quae harum distinctio? Officiis quis exercitationem inventore eum aperiam molestiae laboriosam? Totam, minima sit? Consequuntur sapiente blanditiis aliquid in libero odio illo, dolores natus enim minus aliquam saepe accusamus corporis cum dolorum obcaecati rerum eaque soluta incidunt velit! Amet hic, delectus inventore aperiam quisquam perspiciatis voluptates magnam voluptatem mollitia harum beatae nobis aspernatur, voluptatum nulla quam? ipsum dolor, sit amet consectetur adipisicing elit. Accusamus aliquam, voluptate, similique, omnis libero voluptas minus ab dignissimos in quas dicta nemo adipisci enim culpa sunt nostrum excepturi quam? Modi, repellat perspiciatis?'
    },
    {
      key: '5',
      Isrc: 'https://www.buschsystems.com/resource-center/images/uploads/page/grasslands_template_1800x1200_header-image.jpg',
      title: 'Grassland',
      des: 'Tall grasses Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta voluptate sunt sint iste magnam ipsam quidem eum numquam quaerat eius atque, officia earum itaque facilis eveniet tenetur. Possimus, a nostrum molestiae ratione architecto quae harum distinctio? Officiis quis exercitationem inventore eum aperiam molestiae laboriosam? Totam, minima sit? Consequuntur sapiente blanditiis aliquid in libero odio illo, dolores natus enim minus aliquam saepe accusamus corporis cum dolorum obcaecati rerum eaque soluta incidunt velit! Amet hic, delectus inventore aperiam quisquam perspiciatis voluptates magnam voluptatem mollitia harum beatae nobis aspernatur, voluptatum nulla quam?</p> ipsum dolor, sit amet consectetur adipisicing elit. Accusamus aliquam, voluptate, similique, omnis libero voluptas minus ab dignissimos in quas dicta nemo adipisci enim culpa sunt nostrum excepturi quam? Modi, repellat perspiciatis?'
    },
    {
      key: '6',
      Isrc: 'https://www.conserve-energy-future.com/wp-content/uploads/2015/11/coldest-tundra-biome.jpg',
      title: 'Tundra',
      des: 'Tundra is cold Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta voluptate sunt sint iste magnam ipsam quidem eum numquam quaerat eius atque, officia earum itaque facilis eveniet tenetur. Possimus, a nostrum molestiae ratione architecto quae harum distinctio? Officiis quis exercitationem inventore eum aperiam molestiae laboriosam? Totam, minima sit? Consequuntur sapiente blanditiis aliquid in libero odio illo, dolores natus enim minus aliquam saepe accusamus corporis cum dolorum obcaecati rerum eaque soluta incidunt velit! Amet hic, delectus inventore aperiam quisquam perspiciatis voluptates magnam voluptatem mollitia harum beatae nobis aspernatur, voluptatum nulla quam?</p> ipsum dolor, sit amet consectetur adipisicing elit. Accusamus aliquam, voluptate, similique, omnis libero voluptas minus ab dignissimos in quas dicta nemo adipisci enim culpa sunt nostrum excepturi quam? Modi, repellat perspiciatis?'
    }
  ]

  const [d, setD] = useState(1)
  const [dat, setDat] = useState(data[0])
  const [playF,setPlayF]= useState("Pause")

  const handlePlus = () => {
    if (d === data.length) {
      setD(1)
    } else { setD(d + 1) }
  }
  const handleMinus = () => {
    if (d === 1) {
      setD(data.length)
    } else { setD(d - 1) }
  }

  const handleImg = async (e) => {
    setD(parseInt(e.key))
  }


  useEffect(() => {
    setDat(data[d - 1])
  }, [d])

  const handlePlay=()=>{
    if(playF === 'Play'){
      setPlayF("Pause")
    }else{
      setPlayF("Play")
    }
  }

  useEffect(() => {
    if(playF === "Pause"){
      const timer = setTimeout(() => {
        handlePlus()
      }, 3000)
      return () => clearTimeout(timer)
    }
   
  }, [d,playF])



  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div style={{ padding: '20px', backgroundColor:'whitesmoke', minHeight:'100vh' }}>
      <Grid container  rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{borderRadius:'100px'}}>
        <Grid item xs={12} sm={6}>
          <Item>
          <div>
            <img src={dat?.Isrc} alt={dat?.title} style={{ height: '40vw', minHeight: '250px', width: '100%', borderRadius: '10px', marginBottom:'20px' }} />
          </div>
          <Stack direction="row" alignItems="center" justifyContent="center" >
            <div>
              <Button variant='contained' onClick={() => handleMinus()}>&lt;&lt;</Button>
            </div>
            <div style={{ width:'80%'}}>
              {data.map(x => (
                <img src={x.Isrc} alt={x.title} key={x.key} onClick={() => handleImg(x)} style={{ height: '10vw', width: '10vw', maxHeight: '100px', maxWidth: '100px', minHeight: '60px', minWidth: '60px', margin: '3px', borderRadius: '5px' }} className={`${x.key == d ? '' : 'greyImg'}`} />
              ))}
            </div>
            <div>
              <Button variant="contained" onClick={() => handlePlus()}>&gt;&gt;</Button>
            </div>
          </Stack>
          </Item>
        </Grid>
        <Grid alignItems="stretch"  item xs={12} sm={6} >
          <Grid container direction="column" rowGap="auto"  style={{height:'100%'}}  justifyContent="space-between">
          <Item>
        <h1 style={{color:'blue'}}>{dat?.title}</h1>
        <p>{dat?.des}</p>
          </Item>   
          <div style={{marginTop:'5px',  textAlign:'center'}} onClick={()=>handlePlay()}>
           <Button style={{  paddingLeft:'30px', paddingRight:'30px'}} variant='contained' ><h1>{playF}</h1></Button>
          </div>
        </Grid>
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
