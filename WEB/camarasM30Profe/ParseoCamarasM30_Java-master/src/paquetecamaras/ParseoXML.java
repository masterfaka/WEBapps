package paquetecamaras;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class ParseoXML {
	
	public static ArrayList<Camara> parsear() {
		ArrayList<Camara> lista_camaras=new ArrayList();
		// TODO Auto-generated method stub
		Document documento_xml=generarDocumentoXML();
		Node elemento_xml=documento_xml.getDocumentElement();
		NodeList hijos_xml=elemento_xml.getChildNodes();
		for (int i=0; i<hijos_xml.getLength(); i++)
		{
			Node nodo=hijos_xml.item(i);
			if(nodo.getNodeName().equals("Camara"))
			{
				Camara camara=new Camara();
				NodeList hijos_camara=nodo.getChildNodes();
				for (int j=0; j<hijos_camara.getLength(); j++)
				{
					Node nodo_hijo_camara=hijos_camara.item(j);
					if (nodo_hijo_camara.getNodeName().equals("URL"))
					{
						String url=nodo_hijo_camara.getTextContent();
						camara.setUrl(url);
					}
					if(nodo_hijo_camara.getNodeName().equals("Posicion"))
					{
						NodeList hijos_posicion=nodo_hijo_camara.getChildNodes();
						for (int k=0; k<hijos_posicion.getLength(); k++)
						{
							Node nodo_hijo_posicion=hijos_posicion.item(k);
							if (nodo_hijo_posicion.getNodeName().equals("Latitud"))
							{
								String latitud=nodo_hijo_posicion.getTextContent();
								camara.setLatitud(Double.parseDouble(latitud));
							}
							if (nodo_hijo_posicion.getNodeName().equals("Longitud"))
							{
								String longitud=nodo_hijo_posicion.getTextContent();
								camara.setLongitud(Double.parseDouble(longitud));
							}
							
						}
					}
				}
				lista_camaras.add(camara);	
			}
			//System.out.println("Nombre:"+nodo.getNodeName());
			
		}
			
		return lista_camaras;
	}

	private static Document generarDocumentoXML() {
		
		Document doc_xml=null;
		// TODO Auto-generated method stub
		/*File f=new File("C:\\TED\\AD\\xml_m30.xml");
		DocumentBuilderFactory fabricante=DocumentBuilderFactory.newInstance();
		try {
			DocumentBuilder builder=fabricante.newDocumentBuilder();
			 doc_xml=builder.parse(f);
		} catch (ParserConfigurationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SAXException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}*/
		String aux=null;
		try {
		URL dieccion_web = new URL("http://www.mc30.es/components/com_hotspots/datos/camaras.xml");
		URLConnection conexion_web = dieccion_web.openConnection();
        BufferedReader br = new BufferedReader(new InputStreamReader(conexion_web.getInputStream()));
        String linea=br.readLine();
         aux="";
		        while(linea!=null)
		        {
		        	//System.out.println(linea);
		        	aux=aux+linea;//En aux estará todo el documento.
		        	
						linea=br.readLine();
					
		        
		        }
		        br.close();
		        DocumentBuilderFactory fabricante=DocumentBuilderFactory.newInstance();
				DocumentBuilder builder=fabricante.newDocumentBuilder();
				InputStream stream = new ByteArrayInputStream(aux.getBytes("UTF-8"));
				doc_xml=builder.parse(stream);
		}
        catch(Exception e)
        {
        	
        }
		
		return doc_xml;
	}

}
