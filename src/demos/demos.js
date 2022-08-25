// {isRightClick && (
//     <Draggable>
//       <Col
//         className="onrightclick"
//         style={{
//           width: "300px",
//           height: "350px",
//         }}
//       >
//         {rightclickMenus.map((e) => (
//           <button className="rightbtn">
//             <Row
//               className="rightbtninner"
//               align="middle"
//               // justify="center"
//               style={{
//                 width: "100%",
//                 height: "30px",
//                 //   backgroundColor: "gray",
//               }}
//             >
//               <div>
//                 <Image
//                   style={{ marginLeft: "5px" }}
//                   width={15}
//                   preview={false}
//                   className="profile-image"
//                   src={e.icon}
//                 />
//               </div>
//               <div style={{ marginLeft: "15px" }}>{e.lable}</div>
//             </Row>
//           </button>
//         ))}
//       </Col>
//     </Draggable>
//   )}